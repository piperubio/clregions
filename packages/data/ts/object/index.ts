import object from '../../json/object.json' with { type: 'json' };
import type { CommuneId, ProvinceId, RegionId } from '../types/index.ts';

export type CLCommuneObject = {
  id: CommuneId;
  name: string;
};

export type CLProvinceObject = {
  id: ProvinceId;
  name: string;
  communes: {
    [key: string]: CLCommuneObject;
  };
};

export type CLRegionObject = {
  id: RegionId;
  name: string;
  shortName: string;
  abbreviation: string;
  isoCode: string;
  provinces: {
    [key: string]: CLProvinceObject;
  };
};

export type CLCountryObject = {
  country: 'Chile';
  countryCode: 'CL';
  regions: {
    [key: string]: CLRegionObject;
  };
};

export const clRegions = object as CLCountryObject;
