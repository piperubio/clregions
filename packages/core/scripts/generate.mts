/* c8 ignore start */
import { clRegions } from "@clregions/data/object";
import * as fs from "node:fs";

const generateTypes = () => {
	const regions = Object.values(clRegions.regions);

	const provinces = regions.flatMap((region) =>
		Object.values(region.provinces),
	);
	const communes = provinces.flatMap((province) =>
		Object.values(province.communes),
	);
	const clRegionType = regions.map((region) => `'${region.id}'`).join(" | ");
	const clProvinceType = provinces
		.map((province) => `'${province.id}'`)
		.join(" | ");
	const clCommuneType = communes
		.map((commune) => `'${commune.id}'`)
		.join(" | ");

	const fileContent = `
        export type RegionId = ${clRegionType};

        export type ProvinceId = ${clProvinceType};

        export type CommuneId = ${clCommuneType}
        `;

	fs.writeFileSync("src/generate-types.ts", fileContent);
};

generateTypes();
