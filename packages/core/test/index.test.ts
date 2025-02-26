import { expect, test, describe } from 'vitest';
import {
  findAllRegions,
  findRegionById,
  findAllProvincesByRegion,
  findAllCommunesByRegion,
  findAllProvinces,
  findProvinceById,
  findAllCommunesByProvince,
  findAllCommunes,
  findCommuneById,
  findRegionByCommune,
} from '../src/index.ts';

// biome-ignore lint: noExplicitAny
const expectNullForInvalidValues = (fn: (arg: any) => void) => {
  expect(fn('invalid')).toBeNull();
  expect(fn('32132131231')).toBeNull();
  expect(fn('23800')).toBeNull();
  expect(fn('18')).toBeNull();
  expect(fn('181')).toBeNull();
};

describe('findAllRegions', () => {
  test('should return all regions', () => {
    const regions = findAllRegions();
    for (let i = 1; i <= 16; i++) {
      expect(regions).toHaveProperty(i < 10 ? `0${i}` : `${i}`);
    }
    expect(Object.values(regions)).toHaveLength(16);
  });
  test('Inmutable regions', () => {
    const mutatedRegions = findAllRegions();
    mutatedRegions['01'].name = 'Hola';
    const regions = findAllRegions();
    expect(regions['01'].name).toBe('Región de Tarapacá');
  });
});

describe('findRegionById', () => {
  test('when region id is 1, should return Región de Tarapacá', () => {
    const region = findRegionById('01');
    expect(region).toHaveProperty('name', 'Región de Tarapacá');
    expect(region).toHaveProperty('provinces');
    expect(region).toHaveProperty('id');
    expect(Object.values(region?.provinces || [])).toHaveLength(2);
  });

  test('when region id is 16, should return Región de Ñuble', () => {
    const region = findRegionById('16');
    expect(region).toHaveProperty('name', 'Región de Ñuble');
    expect(region).toHaveProperty('provinces');
    expect(region).toHaveProperty('id');
    expect(Object.values(region?.provinces || [])).toHaveLength(3);
  });

  test('when region code is invalid, should return null', () => {
    expectNullForInvalidValues(findRegionById);
  });

  test('Inmutable region', () => {
    const mutatedRegion = findRegionById('01');
    if (!mutatedRegion) return;
    mutatedRegion.name = 'Hola';
    const region = findRegionById('01');
    expect(region).toHaveProperty('name', 'Región de Tarapacá');
  });
});

describe('findAllProvincesByRegion', () => {
  test('when region code is 1, should return all provinces for that region', () => {
    const provinces = findAllProvincesByRegion('01');
    expect(Object.values(provinces || [])).toHaveLength(2);
  });

  test('when region code is 16, should return all provinces for that region', () => {
    const provinces = findAllProvincesByRegion('16');
    expect(Object.values(provinces || [])).toHaveLength(3);
  });

  test('when region code is invalid, should throw an error', () => {
    expectNullForInvalidValues(findAllProvincesByRegion);
  });

  test('Inmutable provinces', () => {
    const mutatedProvinces = findAllProvincesByRegion('01');
    if (!mutatedProvinces) return;
    mutatedProvinces['011'].name = 'Hola';
    const provinces = findAllProvincesByRegion('01');
    expect(provinces).toHaveProperty('011');
    expect(provinces?.['011']).toHaveProperty('name', 'Iquique');
  });
});

describe('findAllCommunesByRegion', () => {
  test('when region code is 01, should return all communes for that region', () => {
    const communes = findAllCommunesByRegion('01');
    expect(Object.values(communes || [])).toHaveLength(7);
    expect(communes).toHaveProperty('01101');
    expect(communes).toHaveProperty('01107');
  });

  test('when region code is 16, should return all communes for that region', () => {
    const communes = findAllCommunesByRegion('16');
    expect(Object.values(communes || [])).toHaveLength(21);
  });

  test('when region code is invalid, should throw an error', () => {
    expectNullForInvalidValues(findAllCommunesByRegion);
  });

  test('Inmutable communes', () => {
    const mutatedCommunes = findAllCommunesByRegion('01');
    if (!mutatedCommunes) return;
    mutatedCommunes['01101'].name = 'Hola';
    const communes = findAllCommunesByRegion('01');
    expect(communes).toHaveProperty('01101');
    expect(communes?.['01101']).toHaveProperty('name', 'Iquique');
  });
});

test('findAllProvinces', () => {
  const provinces = findAllProvinces();
  expect(Object.values(provinces || [])).toHaveLength(56);
  // Provincias al azar
  expect(provinces).toHaveProperty('011');
  expect(provinces).toHaveProperty('151');
  expect(provinces).toHaveProperty('131');
});

describe('findProvinceById', () => {
  test('when province id is 011, should return that province', () => {
    const province = findProvinceById('011');
    expect(province).toHaveProperty('name', 'Iquique');
    expect(province).toHaveProperty('communes');
    expect(province).toHaveProperty('id');
    expect(Object.values(province?.communes || [])).toHaveLength(2);
  });

  test('when province id is 161, should return that province', () => {
    const province = findProvinceById('161');
    expect(province).toHaveProperty('name', 'Diguillín');
    expect(province).toHaveProperty('communes');
    expect(province).toHaveProperty('id');
    expect(Object.values(province?.communes || [])).toHaveLength(9);
  });

  test('when province code is invalid, should return null', () => {
    expectNullForInvalidValues(findProvinceById);
  });

  test('Inmutable province', () => {
    const mutatedProvince = findProvinceById('011');
    if (!mutatedProvince) return;
    mutatedProvince.name = 'Hola';
    const province = findProvinceById('011');
    expect(province).toHaveProperty('name', 'Iquique');
  });
});

describe('findAllCommunes', () => {
  test('should return all communes', () => {
    const communes = findAllCommunes();
    expect(Object.values(communes || [[]])).toHaveLength(346);
    // Comunas al azar
    expect(communes).toHaveProperty('01101');
    expect(communes).toHaveProperty('15101');
    expect(communes).toHaveProperty('13101');
  });

  test('Inmutable communes', () => {
    const mutatedCommunes = findAllCommunes();
    mutatedCommunes['01101'].name = 'Hola';
    const communes = findAllCommunes();
    expect(communes).toHaveProperty('01101');
    expect(communes?.['01101']).toHaveProperty('name', 'Iquique');
  });
});

describe('findAllCommunesByProvince', () => {
  test('when province code is 11, should return all communes', () => {
    const communes = findAllCommunesByProvince('011');
    expect(Object.values(communes || [])).toHaveLength(2);
    expect(communes).toHaveProperty('01101');
    expect(communes).toHaveProperty('01107');
  });

  test('when province code is 161, should return all communes', () => {
    const communes = findAllCommunesByProvince('161');
    expect(Object.values(communes || [])).toHaveLength(9);
  });

  test('when province code is invalid, should return null', () => {
    expectNullForInvalidValues(findAllCommunesByProvince);
  });

  test('Inmutable communes', () => {
    const mutatedCommunes = findAllCommunesByProvince('011');
    if (!mutatedCommunes) return;
    mutatedCommunes['01101'].name = 'Hola';
    const communes = findAllCommunesByProvince('011');
    expect(communes).toHaveProperty('01101');
    expect(communes?.['01101']).toHaveProperty('name', 'Iquique');
  });
});

describe('findCommuneById', () => {
  test('when commune id is 01101, should return commune Iquique', () => {
    const commune = findCommuneById('01101');
    expect(commune).toHaveProperty('name', 'Iquique');
    expect(commune).toHaveProperty('id');
  });

  test('when commune id is 16301, should return commune Iquique', () => {
    const commune = findCommuneById('16301');
    expect(commune).toHaveProperty('name', 'San Carlos');
    expect(commune).toHaveProperty('id');
  });

  test('when commune code is invalid, should to be null', () => {
    expectNullForInvalidValues(findCommuneById);
  });

  test('Inmutable commune', () => {
    const mutatedCommune = findCommuneById('01101');
    if (!mutatedCommune) return;
    mutatedCommune.name = 'Hola';
    const commune = findCommuneById('01101');
    expect(commune).toHaveProperty('name', 'Iquique');
  });
});

describe('findRegionByCommune', () => {
  test('when commune id is 01101, should return Región de Tarapacá', () => {
    const region = findRegionByCommune('01101');
    expect(region).toHaveProperty('name', 'Región de Tarapacá');
    expect(region).toHaveProperty('id', '01');
  });

  test('when commune id is 16301, should return Región de Ñuble', () => {
    const region = findRegionByCommune('16301');
    expect(region).toHaveProperty('name', 'Región de Ñuble');
    expect(region).toHaveProperty('id', '16');
  });

  test('when commune code is invalid, should return null', () => {
    expectNullForInvalidValues(findRegionByCommune);
  });

  test('Inmutable region', () => {
    const mutatedRegion = findRegionByCommune('01101');
    if (!mutatedRegion) return;
    mutatedRegion.name = 'Hola';
    const region = findRegionByCommune('01101');
    expect(region).toHaveProperty('name', 'Región de Tarapacá');
  });
});
