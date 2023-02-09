import React from "react";
import {
  getAllRegions,
  getAllCommunes,
  getAllCommunesByRegion,
} from "./cl-regions";

const getAllRegionOptions = () =>
    Object.entries(getAllRegions()).reduce((accumulator, [key, value]) => {
      return {
        ...accumulator,
        [key]: value.name,
      };
    }, {}),
  getAllCommunesOptions = () =>
    Object.values(getAllCommunes()).reduce((accumulator, value) => {
      return {
        ...accumulator,
        [value.name]: value.name,
      };
    }, {}),
  getAllCommunesByRegionOptions = (regionCode) =>
    Object.values(getAllCommunesByRegion(regionCode)).reduce(
      (accumulator, value) => {
        return {
          ...accumulator,
          [value.name]: value.name,
        };
      },
      {}
    );

export function useCLRegions() {
  const regions = getAllRegionOptions(),
    [currentCommunes, setState] = React.useState(getAllCommunesOptions()),
    handleRegionChange = (values) => {
      if (values.length === 0) {
        setState(getAllCommunesOptions());
        return;
      }
      const newCommunes = values.reduce((accumulator, regionCode) => {
        return {
          ...accumulator,
          ...getAllCommunesByRegionOptions(regionCode),
        };
      }, {});
      setState(newCommunes);
    };
  return { regions, currentCommunes, handleRegionChange };
}
