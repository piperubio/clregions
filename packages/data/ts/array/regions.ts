import regionsData from "../../json/regions.json" with { type: "json" };

export type CLRegionItem = {
	id: string;
	name: string;
	shortName: string;
	abbreviation: string;
	isoCode: string;
};

export const regions: CLRegionItem[] = regionsData;
