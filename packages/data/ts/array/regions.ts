import regionsData from '../../json/regions.json' with { type: 'json' };
import type { RegionId } from '../types/index.ts';

export type CLRegionItem = {
  id: RegionId;
  name: string;
  shortName: string;
  abbreviation: string;
  isoCode: string;
};

export const regions = regionsData as CLRegionItem[];
