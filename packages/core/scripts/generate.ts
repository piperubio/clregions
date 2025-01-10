import clData from "@clregions/data";
import { CLCountry, CLRegion, CLProvince, CLCommune } from "../src";
import * as fs from "node:fs";

const regions: {
    [key: string]: CLRegion;
  } = Object.entries(clData.regions)
    .map(([key, region]) => {
      const provinces = Object.entries(region.provinces)
        .map(([key, province]: [string, CLProvince]) => {
          const communes = Object.entries(province.communes)
            .map(([key, commune]: [string, CLCommune]) => ({
              ...commune,
              id: key,
            }))
            .reduce(
              (acc, commune) => ({
                ...acc,
                [commune.id]: commune,
              }),
              {}
            );
          return {
            ...province,
            id: key,
            communes,
          };
        })
        .reduce(
          (acc, province) => ({
            ...acc,
            [province.id]: province,
          }),
          {}
        );

      return {
        ...region,
        id: key,
        provinces,
      };
    })
    .reduce(
      (acc, region) => ({
        ...acc,
        [region.id]: region,
      }),
      {}
    ),
  _clLocationData: CLCountry = {
    ...clData,
    regions,
  };

const generateTypes = () => {
  const regions = Object.values(_clLocationData.regions),
    provinces = regions.map((region) => Object.values(region.provinces)).flat(),
    communes = provinces
      .map((province) => Object.values(province.communes))
      .flat(),
    clRegionType = regions.map((region) => `'${region.id}'`).join(" | "),
    clProvinceType = provinces
      .map((province) => `'${province.id}'`)
      .join(" | "),
    clCommuneType = communes.map((commune) => `'${commune.id}'`).join(" | ");

  const fileContent = `
export type RegionId = ${clRegionType};

export type ProvinceId = ${clProvinceType};

export type CommuneId = ${clCommuneType}
`;

  fs.writeFileSync("src/generate-types.ts", fileContent);
};

const updateData = () => {
  const updatedRegions = Object.entries(_clLocationData.regions).map(
      ([key, region]) => {
        const updatedProvinces = Object.entries(region.provinces)
          .map(([key, province]) => {
            const updatedCommunes = Object.entries(province.communes)
              .map(([key, commune]) => ({
                ...commune,
                id: key.length === 4 ? "0" + key : key,
              }))
              .reduce(
                (acc, commune) => ({
                  ...acc,
                  [commune.id]: commune,
                }),
                {}
              );
            return {
              ...province,
              id: key.length === 2 ? "0" + key : key,
              communes: updatedCommunes,
            };
          })
          .reduce(
            (acc, province) => ({
              ...acc,
              [province.id]: province,
            }),
            {}
          );

        return {
          ...region,
          id: key.length === 1 ? "0" + key : key,
          provinces: updatedProvinces,
        };
      }
    ),
    fileContent = JSON.stringify(
      {
        ..._clLocationData,
        regions: updatedRegions.reduce(
          (acc, region) => ({
            ...acc,
            [region.id]: region,
          }),
          {}
        ),
      },
      null,
      2
    );
  fs.writeFileSync("data/data.json", fileContent);
};

const generateData = () => {
  const fileContent = `
    import { CLCountry } from "./base-types";
    export const _clLocationData: CLCountry = ${JSON.stringify(
      _clLocationData,
      null,
      2
    )};
  `;
  fs.writeFileSync("src/generate-data.ts", fileContent);
};

//updateData();
generateTypes();
generateData();
