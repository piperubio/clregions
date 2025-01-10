import { CLRegion, CLProvince, CLCommune } from "./base-types";
import { RegionId, ProvinceId, CommuneId } from "./generate-types";
import { _clLocationData } from "./generate-data";

/**
 * This comment _supports_ [Markdown](https://marked.js.org/)
 */
export const getAllRegions = (): Record<string, CLRegion> =>
  JSON.parse(JSON.stringify(_clLocationData.regions));

export const getRegionById = (regionId: RegionId): CLRegion | null =>
  _clLocationData.regions[regionId]
    ? JSON.parse(JSON.stringify(_clLocationData.regions[regionId]))
    : null;

export const getAllProvincesByRegion = (
  regionId: RegionId
): Record<string, CLProvince> | null => {
  if (!_clLocationData.regions[regionId as RegionId]) {
    return null;
  }

  return Object.entries(
    JSON.parse(
      JSON.stringify(_clLocationData.regions[regionId as RegionId].provinces)
    )
  ).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

export const getAllCommunesByRegion = (
  regionId: RegionId
): Record<string, CLCommune> | null => {
  if (!_clLocationData.regions[regionId as RegionId]) {
    return null;
  }

  return Object.values(
    JSON.parse(
      JSON.stringify(_clLocationData.regions[regionId].provinces)
    ) as Record<string, CLProvince>
  )
    .map((province) => Object.entries(province.communes))
    .flat()
    .reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value,
      }),
      {}
    );
};

export const getAllProvinces = (): Record<string, CLProvince> =>
  Object.values(_clLocationData.regions)
    .map((region) =>
      Object.entries(JSON.parse(JSON.stringify(region.provinces)))
    )
    .flat()
    .reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value,
      }),
      {}
    );

export const getProvinceById = (provinceId: ProvinceId): CLProvince | null => {
  try {
    return (
      JSON.parse(
        JSON.stringify(
          _clLocationData.regions[
            provinceId.length === 2
              ? provinceId.slice(0, 1)
              : provinceId.slice(0, 2)
          ].provinces[provinceId]
        )
      ) || null
    );
  } catch {
    return null;
  }
};

export const getAllCommunesByProvince = (
  provinceId: ProvinceId
): Record<string, CLCommune> | null => {
  try {
    return Object.entries(
      JSON.parse(
        JSON.stringify(
          _clLocationData.regions[provinceId.slice(0, 2)].provinces[provinceId]
            .communes
        )
      )
    ).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value,
      }),
      {}
    );
  } catch {
    return null;
  }
};

export const getAllCommunes = (): Record<string, CLCommune> =>
  Object.values(_clLocationData.regions)
    .map((region) => Object.values(region.provinces))
    .flat()
    .map((province) => Object.entries(province.communes))
    .flat()
    .reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value,
      }),
      {}
    );

export const getCommuneById = (communeId: CommuneId): CLCommune | null => {
  try {
    return {
      ..._clLocationData.regions[communeId.slice(0, 2)].provinces[
        communeId.slice(0, 3)
      ].communes[communeId],
    };
  } catch {
    return null;
  }
};
