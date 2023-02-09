import clLocationData from "./cl-regions.json";

export type CLCountry = {
  country: string;
  regions: {
    [key: string]: CLRegions;
  };
};

export type CLRegions = {
  name: string;
  capital_region: string;
  provinces: {
    [key: string]: CLProvince;
  };
};

export type CLProvince = {
  name: string;
  provincial_capital: string;
  communes: {
    [key: string]: CLCommune;
  };
};

export type CLCommune = {
  name: string;
};

const _clLocationData: CLCountry = clLocationData;

export const getAllRegions = (): {
  [key: string]: CLRegions;
} => _clLocationData.regions;

export const getAllCommunes = (): Record<string, CLCommune> => {
  return Object.values(_clLocationData.regions)
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
};

export const getRegionByCode = (regionCode: string): CLRegions =>
  _clLocationData.regions[regionCode];

export const getAllCommunesByRegion = (
  regionCode: string
): Record<string, CLCommune> =>
  Object.values(_clLocationData.regions[regionCode].provinces)
    .map((province: CLProvince) => Object.entries(province.communes))
    .flat()
    .reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value,
      }),
      {}
    );
