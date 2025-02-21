import communesData from '../../json/communes.json' with { type: 'json' };

export type CLCommuneItem = {
  id: string;
  name: string;
  provinceId: string;
};

export const communes: CLCommuneItem[] = communesData;
