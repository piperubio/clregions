# @clregions/data

## 1.0.0-next.5

### Patch Changes

- 7fa5e28: Fix exports for submodules array regions, provinces and communes

## 1.0.0-next.4

### Patch Changes

- 34391f7: Add CJS and segregate imports for array data, @clregions/data/array/regions, @clregions/data/array/provinces, @clregions/data/array/communes

## 1.0.0-next.3

### Patch Changes

- 765bb8e: ClRegions Data Prerelease 2

## 1.0.0-next.2

### Patch Changes

- d1b741a: improve clregions/data docs

## 1.0.0-next.1

### Major Changes

- 16b0cdb: CL Regions Data pre-release with object and array implementations

## 1.0.0

### Major Changes

- 3e093af: Fix territorial data for Chile's regions, provinces and communes. Major changes include:

  - Add data in multiple formats:

    - CSV files (regions, provinces, communes)
    - SQL files with tables and data
    - JSON files (as object and array)
    - TypeScript/JavaScript library

  - Add TypeScript types for both object and array data structures
    - CLCountryObject & CLCountryArray
    - CLRegionObject & CLRegionArray
    - CLProvinceObject & CLProvinceArray
    - CLCommune

  The package is now available on npm as @clregions/data

## 0.1.0

### Minor Changes

- ed92ca4: Add data for Chile's regions, provinces and communes. Minor changes include:

  - JSON file as object
