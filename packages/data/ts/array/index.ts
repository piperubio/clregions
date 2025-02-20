import communesData from "../../json/communes.json" with { type: "json" };
import provincesData from "../../json/provinces.json" with { type: "json" };
import regionsData from "../../json/regions.json" with { type: "json" };

export type CLCommuneItem = {
	id: string;
	name: string;
	provinceId: string;
};

export type CLProvinceItem = {
	id: string;
	name: string;
	regionId: string;
};

export type CLRegionItem = {
	id: string;
	name: string;
	shortName: string;
	abbreviation: string;
	isoCode: string;
};

export const regions: CLRegionItem[] = regionsData;
export const provinces: CLProvinceItem[] = provincesData;
export const communes: CLCommuneItem[] = communesData;
