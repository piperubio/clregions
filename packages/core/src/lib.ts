import type {
	CLRegionObject,
	CLProvinceObject,
	CLCommuneObject,
} from "@clregions/data/object";
import { clRegions } from "@clregions/data/object";
import type { RegionId, ProvinceId, CommuneId } from "./generate-types";

/**
 * This comment _supports_ [Markdown](https://marked.js.org/)
 */
export const getAllRegions = (): Record<string, CLRegionObject> =>
	JSON.parse(JSON.stringify(clRegions.regions));

export const getRegionById = (regionId: RegionId): CLRegionObject | null =>
	clRegions.regions[regionId]
		? JSON.parse(JSON.stringify(clRegions.regions[regionId]))
		: null;

export const getAllProvincesByRegion = (
	regionId: RegionId,
): Record<string, CLProvinceObject> | null => {
	if (!clRegions.regions[regionId as RegionId]) {
		return null;
	}

	return Object.entries(
		JSON.parse(
			JSON.stringify(clRegions.regions[regionId as RegionId].provinces),
		),
	).reduce(
		(acc, [key, value]) => ({
			...acc,
			[key]: value,
		}),
		{},
	);
};

export const getAllCommunesByRegion = (
	regionId: RegionId,
): Record<string, CLCommuneObject> | null => {
	if (!clRegions.regions[regionId as RegionId]) {
		return null;
	}

	return Object.values(
		JSON.parse(JSON.stringify(clRegions.regions[regionId].provinces)) as Record<
			string,
			CLProvinceObject
		>,
	)
		.map((province) => Object.entries(province.communes))
		.flat()
		.reduce(
			(acc, [key, value]) => ({
				...acc,
				[key]: value,
			}),
			{},
		);
};

export const getAllProvinces = (): Record<string, CLProvinceObject> =>
	Object.values(clRegions.regions)
		.map((region) =>
			Object.entries(JSON.parse(JSON.stringify(region.provinces))),
		)
		.flat()
		.reduce(
			(acc, [key, value]) => ({
				...acc,
				[key]: value,
			}),
			{},
		);

export const getProvinceById = (
	provinceId: ProvinceId,
): CLProvinceObject | null => {
	try {
		return (
			JSON.parse(
				JSON.stringify(
					clRegions.regions[
						provinceId.length === 2
							? provinceId.slice(0, 1)
							: provinceId.slice(0, 2)
					].provinces[provinceId],
				),
			) || null
		);
	} catch {
		return null;
	}
};

export const getAllCommunesByProvince = (
	provinceId: ProvinceId,
): Record<string, CLCommuneObject> | null => {
	try {
		return Object.entries(
			JSON.parse(
				JSON.stringify(
					clRegions.regions[provinceId.slice(0, 2)].provinces[provinceId]
						.communes,
				),
			),
		).reduce(
			(acc, [key, value]) => ({
				...acc,
				[key]: value,
			}),
			{},
		);
	} catch {
		return null;
	}
};

export const getAllCommunes = (): Record<string, CLCommuneObject> =>
	Object.values(clRegions.regions)
		.flatMap((region) => Object.values(region.provinces))
		.flatMap((province) => Object.entries(province.communes))
		.reduce(
			(acc, [key, value]) => ({
				...acc,
				[key]: value,
			}),
			{},
		);

export const getCommuneById = (
	communeId: CommuneId,
): CLCommuneObject | null => {
	try {
		return {
			...clRegions.regions[communeId.slice(0, 2)].provinces[
				communeId.slice(0, 3)
			].communes[communeId],
		};
	} catch {
		return null;
	}
};
