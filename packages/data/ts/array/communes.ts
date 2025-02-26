import communesData from '../../json/communes.json' with { type: 'json' };
import type { CommuneId } from '../types/index.ts';

export type CLCommuneItem = {
  id: CommuneId;
  name: string;
  provinceId: string;
};

export const communes: CLCommuneItem[] = communesData as CLCommuneItem[];
