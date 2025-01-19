import array from "./json/array.json" with { type: "json" };
import object from "./json/object.json" with { type: "json" };

export type CLCountryObject = {
	country: string;
	countryCode: string;
	regions: {
		[key: string]: CLRegionObject;
	};
};

export type CLCountryArray = {
	country: string;
	countryCode: string;
	regions: CLRegionArray[];
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

export type CLRegionArray = {
	id: string;
	name: string;
	shortName: string;
	abbreviation: string;
	isoCode: string;
	provinces: CLProvinceArray[];
};

export type CLProvinceObject = {
	id: string;
	name: string;
	communes: {
		[key: string]: CLCommune;
	};
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

export const dataObject: CLCountryObject = object;
export const dataArray: CLCountryArray = array;
