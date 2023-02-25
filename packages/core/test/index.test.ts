import { expect, test, describe } from "vitest";
import {
  getAllRegions,
  getRegionById,
  getAllProvincesByRegion,
  getAllCommunesByRegion,
  getAllProvinces,
  getProvinceById,
  getAllCommunesByProvince,
  getAllCommunes,
  getCommuneById,
} from "../src";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const expectNullForInvalidValues = (fn: (arg: any) => void) => {
  expect(fn("invalid")).toBeNull();
  expect(fn("32132131231")).toBeNull();
  expect(fn("15800")).toBeNull();
  expect(fn("18")).toBeNull();
  expect(fn("181")).toBeNull();
};

test("getAllRegions", () => {
  const regions = getAllRegions();
  for (let i = 1; i <= 16; i++) {
    expect(regions).toHaveProperty(i < 10 ? `0${i}` : `${i}`);
  }
  expect(Object.values(regions)).toHaveLength(16);
});

describe("getRegionById", () => {
  test("when region id is 1, should return Región de Tarapacá", () => {
    const region = getRegionById("01");
    expect(region).toHaveProperty("name", "Región de Tarapacá");
    expect(region).toHaveProperty("provinces");
    expect(region).toHaveProperty("id");
    expect(Object.values(region?.provinces || [])).toHaveLength(2);
  });

  test("when region id is 16, should return Región de Ñuble", () => {
    const region = getRegionById("16");
    expect(region).toHaveProperty("name", "Región de Ñuble");
    expect(region).toHaveProperty("provinces");
    expect(region).toHaveProperty("id");
    expect(Object.values(region?.provinces || [])).toHaveLength(3);
  });

  test("when region code is invalid, should throw an error", () => {
    expectNullForInvalidValues(getRegionById);
  });
});

describe("getAllProvincesByRegion", () => {
  test("when region code is 1, should return all provinces for that region", () => {
    const provinces = getAllProvincesByRegion("01");
    expect(Object.values(provinces || [])).toHaveLength(2);
  });

  test("when region code is 16, should return all provinces for that region", () => {
    const provinces = getAllProvincesByRegion("16");
    expect(Object.values(provinces || [])).toHaveLength(3);
  });

  test("when region code is invalid, should throw an error", () => {
    expectNullForInvalidValues(getAllProvincesByRegion);
  });
});

describe("getAllCommunesByRegion", () => {
  test("when region code is 01, should return all communes for that region", () => {
    const communes = getAllCommunesByRegion("01");
    expect(Object.values(communes || [])).toHaveLength(7);
    expect(communes).toHaveProperty("01101");
    expect(communes).toHaveProperty("01107");
  });

  test("when region code is 16, should return all communes for that region", () => {
    const communes = getAllCommunesByRegion("16");
    expect(Object.values(communes || [])).toHaveLength(21);
  });

  test("when region code is invalid, should throw an error", () => {
    expectNullForInvalidValues(getAllCommunesByRegion);
  });
});

test("getAllProvinces", () => {
  const provinces = getAllProvinces();
  expect(Object.values(provinces || [])).toHaveLength(57);
  // Provincias al azar
  expect(provinces).toHaveProperty("011");
  expect(provinces).toHaveProperty("151");
  expect(provinces).toHaveProperty("131");
});

describe("getProvinceById", () => {
  test("when province id is 11, should return that province", () => {
    const province = getProvinceById("011");
    expect(province).toHaveProperty("name", "Iquique");
    expect(province).toHaveProperty("communes");
    expect(province).toHaveProperty("id");
    expect(Object.values(province?.communes || [])).toHaveLength(2);
  });

  test("when province id is 161, should return that province", () => {
    const province = getProvinceById("161");
    expect(province).toHaveProperty("name", "Diguillín");
    expect(province).toHaveProperty("communes");
    expect(province).toHaveProperty("id");
    expect(Object.values(province?.communes || [])).toHaveLength(9);
  });

  test("when province code is invalid, should return null", () => {
    expectNullForInvalidValues(getProvinceById);
  });
});

test("getAllCommunes", () => {
  const communes = getAllCommunes();
  expect(Object.values(communes || [[]])).toHaveLength(367);
  // Comunas al azar
  expect(communes).toHaveProperty("01101");
  expect(communes).toHaveProperty("15101");
  expect(communes).toHaveProperty("13101");
});

describe("getAllCommunesByProvince", () => {
  test("when province code is 11, should return all communes", () => {
    const communes = getAllCommunesByProvince("011");
    expect(Object.values(communes || [])).toHaveLength(2);
    expect(communes).toHaveProperty("01101");
    expect(communes).toHaveProperty("01107");
  });

  test("when province code is 161, should return all communes", () => {
    const communes = getAllCommunesByProvince("161");
    expect(Object.values(communes || [])).toHaveLength(9);
  });

  test("when province code is invalid, should return null", () => {
    expectNullForInvalidValues(getAllCommunesByProvince);
  });
});

describe("getCommuneById", () => {
  test("when commune id is 01101, should return commune Iquique", () => {
    const commune = getCommuneById("01101");
    expect(commune).toHaveProperty("name", "Iquique");
    expect(commune).toHaveProperty("id");
  });

  test("when commune id is 16301, should return commune Iquique", () => {
    const commune = getCommuneById("16301");
    expect(commune).toHaveProperty("name", "San Carlos");
    expect(commune).toHaveProperty("id");
  });

  test("when commune code is invalid, should to be null", () => {
    expectNullForInvalidValues(getCommuneById);
  });
});
