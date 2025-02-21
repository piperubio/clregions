import { clRegions } from "@clregions/data/object";
import type {
	CLRegionObject,
	CLProvinceObject,
	CLCommuneObject,
} from "@clregions/data/object";
import type { RegionId, ProvinceId, CommuneId } from "./generate-types";

/**
 * Returns a deep-cloned object containing all regions.
 * @returns {Record<string, CLRegionObject>} The regions object.
 */
export const getAllRegions = (): Record<string, CLRegionObject> =>
	structuredClone(clRegions.regions);

/**
 * Returns a deep-cloned region object by its identifier.
 * @param {RegionId} regionId - The region identifier.
 * @returns {CLRegionObject | null} The region object or null if not found.
 */
export const getRegionById = (regionId: RegionId): CLRegionObject | null =>
	clRegions.regions[regionId]
		? structuredClone(clRegions.regions[regionId])
		: null;

/**
 * Returns a deep-cloned object containing all provinces for a given region.
 * @param {RegionId} regionId - The region identifier.
 * @returns {Record<string, CLProvinceObject> | null} The provinces object or null if region not found.
 */
export const getAllProvincesByRegion = (
	regionId: RegionId,
): Record<string, CLProvinceObject> | null => {
	const region = clRegions.regions[regionId];
	if (!region) {
		return null;
	}
	return structuredClone(region.provinces);
};

/**
 * Returns all communes within a given region by iterating all provinces.
 * @param {RegionId} regionId - The region identifier.
 * @returns {Record<string, CLCommuneObject> | null} An object mapping commune identifiers to commune objects, or null if region not found.
 */
export const getAllCommunesByRegion = (
	regionId: RegionId,
): Record<string, CLCommuneObject> | null => {
	const region = clRegions.regions[regionId];
	if (!region) return null;

	const provinces = structuredClone(region.provinces);
	const communes: Record<string, CLCommuneObject> = {};
	for (const provKey in provinces) {
		const province = provinces[provKey];
		for (const communeKey in province.communes) {
			communes[communeKey] = province.communes[communeKey];
		}
	}
	return communes;
};

/**
 * Returns a deep-cloned object containing all provinces from all regions.
 * @returns {Record<string, CLProvinceObject>} An object mapping province identifiers to province objects.
 */
export const getAllProvinces = (): Record<string, CLProvinceObject> => {
	const result: Record<string, CLProvinceObject> = {};
	for (const region of Object.values(clRegions.regions)) {
		const provinces = structuredClone(region.provinces);
		for (const key in provinces) {
			result[key] = provinces[key];
		}
	}
	return result;
};

/**
 * Returns a deep-cloned province object by its identifier.
 * @param {ProvinceId} provinceId - The province identifier.
 * @returns {CLProvinceObject | null} The province object or null if not found.
 */
export const getProvinceById = (
	provinceId: ProvinceId,
): CLProvinceObject | null => {
	try {
		const parentRegionKey =
			provinceId.length === 2 ? provinceId.slice(0, 1) : provinceId.slice(0, 2);
		const province = structuredClone(
			clRegions.regions[parentRegionKey].provinces[provinceId],
		);
		return province || null;
	} catch {
		return null;
	}
};

/**
 * Returns a deep-cloned object containing all communes for a given province.
 * @param {ProvinceId} provinceId - The province identifier.
 * @returns {Record<string, CLCommuneObject> | null} An object mapping commune identifiers to commune objects, or null on failure.
 */
export const getAllCommunesByProvince = (
	provinceId: ProvinceId,
): Record<string, CLCommuneObject> | null => {
	try {
		const communesData = structuredClone(
			clRegions.regions[provinceId.slice(0, 2)].provinces[provinceId].communes,
		);
		const result: Record<string, CLCommuneObject> = {};
		for (const key in communesData) {
			result[key] = communesData[key];
		}
		return result;
	} catch {
		return null;
	}
};

/**
 * Returns a deep-cloned object containing all communes from all regions.
 * @returns {Record<string, CLCommuneObject>} An object mapping commune identifiers to commune objects.
 */
export const getAllCommunes = (): Record<string, CLCommuneObject> => {
	const communes: Record<string, CLCommuneObject> = {};
	// Direct nested loops iteration
	for (const region of Object.values(clRegions.regions)) {
		for (const provKey in region.provinces) {
			const province = region.provinces[provKey];
			for (const commKey in province.communes) {
				communes[commKey] = structuredClone(province.communes[commKey]);
			}
		}
	}
	return communes;
};

/**
 * Returns a deep-cloned commune object by its identifier.
 * @param {CommuneId} communeId - The commune identifier.
 * @returns {CLCommuneObject | null} The commune object or null if not found.
 */
export const getCommuneById = (
	communeId: CommuneId,
): CLCommuneObject | null => {
	try {
		const commune = structuredClone(
			clRegions.regions[communeId.slice(0, 2)].provinces[communeId.slice(0, 3)]
				.communes[communeId],
		);
		return structuredClone(commune);
	} catch {
		return null;
	}
};
