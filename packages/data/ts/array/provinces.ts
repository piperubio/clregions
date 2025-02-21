import provincesData from '../../json/provinces.json' with { type: 'json' };

export type CLProvinceItem = {
  id: string;
  name: string;
  regionId: string;
};

export const provinces: CLProvinceItem[] = provincesData;
