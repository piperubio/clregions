import array from "./json/array.json" with { type: "json" };

export type CLCountryArray = {
	country: string;
	countryCode: string;
	regions: CLRegionArray[];
};

export type CLRegionArray = {
	id: string;
	name: string;
	shortName: string;
	abbreviation: string;
	isoCode: string;
	provinces: CLProvinceArray[];
};

export type CLProvinceArray = {
	id: string;
	name: string;
	communes: CLCommune[];
};

export type CLCommune = {
	id: string;
	name: string;
};

