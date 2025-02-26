import provincesData from '../../json/provinces.json' with { type: 'json' };
import type { ProvinceId } from '../types/index.ts';

export type CLProvinceItem = {
  id: ProvinceId;
  name: string;
  regionId: string;
};

export const provinces = provincesData as CLProvinceItem[];
