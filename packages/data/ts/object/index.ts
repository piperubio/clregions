import object from "../../json/object.json" with { type: "json" };

export type CLCommuneObject = {
	id: string;
	name: string;
};

export type CLProvinceObject = {
	id: string;
	name: string;
	communes: {
		[key: string]: CLCommuneObject;
	};
};

export type CLRegionObject = {
	id: string;
	name: string;
	shortName: string;
	abbreviation: string;
	isoCode: string;
	provinces: {
		[key: string]: CLProvinceObject;
	};
};

export type CLCountryObject = {
	country: string;
	countryCode: string;
	regions: {
		[key: string]: CLRegionObject;
	};
};

export const clRegions: CLCountryObject = object;
