export type CLCountry = {
  country: string;
  regions: {
    [key: string]: CLRegion;
  };
};

export type CLRegion = {
  id: string;
  name: string;
  capital_region: string;
  iso_code: string;
  provinces: {
    [key: string]: CLProvince;
  };
};

export type CLProvince = {
  id: string;
  name: string;
  provincial_capital: string;
  communes: {
    [key: string]: CLCommune;
  };
};

export type CLCommune = {
  id: string;
  name: string;
};
