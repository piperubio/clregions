export type CLCountry = {
  country: string;
  regions: {
    [key: string]: CLRegion;
  };
};

export type CLRegion = {
  id: string;
  name: string;
  iso_code: string;
  provinces: {
    [key: string]: CLProvince;
  };
};

export type CLProvince = {
  id: string;
  name: string;
  communes: {
    [key: string]: CLCommune;
  };
};

export type CLCommune = {
  id: string;
  name: string;
};
