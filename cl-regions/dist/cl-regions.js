"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCommunesByRegion = exports.getRegionByCode = exports.getAllCommunes = exports.getAllRegions = void 0;
const cl_regions_json_1 = __importDefault(require("./cl-regions.json"));
const _clLocationData = cl_regions_json_1.default;
const getAllRegions = () => _clLocationData.regions;
exports.getAllRegions = getAllRegions;
const getAllCommunes = () => {
    return Object.values(_clLocationData.regions)
        .map((region) => Object.values(region.provinces))
        .flat()
        .map((province) => Object.entries(province.communes))
        .flat()
        .reduce((acc, [key, value]) => ({
        ...acc,
        [key]: value,
    }), {});
};
exports.getAllCommunes = getAllCommunes;
const getRegionByCode = (regionCode) => _clLocationData.regions[regionCode];
exports.getRegionByCode = getRegionByCode;
const getAllCommunesByRegion = (regionCode) => Object.values(_clLocationData.regions[regionCode].provinces)
    .map((province) => Object.entries(province.communes))
    .flat()
    .reduce((acc, [key, value]) => ({
    ...acc,
    [key]: value,
}), {});
exports.getAllCommunesByRegion = getAllCommunesByRegion;
