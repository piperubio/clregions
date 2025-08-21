# @clregions/core — Utilidades seguras para datos territoriales de Chile

Librería TypeScript/JavaScript para consultar regiones, provincias y comunas de Chile sobre una fuente de datos tipada. Provee funciones inmutables, tipos estrictos y una API estable pensada para backend y frontend.

- Sin dependencias externas
- Tipos estrictos (TS) exportados desde `@clregions/data`
- ESM y CJS listos para Node y bundlers
- Funciones que devuelven copias seguras (structuredClone) para evitar mutaciones accidentales

En caso de necesitar acceder a los datos "crudos" (arrays u objeto) usa el paquete hermano `@clregions/data`.

## Instalación

```bash
npm install @clregions/core
# yarn add @clregions/core
# pnpm add @clregions/core
```

## Tipos disponibles

Los tipos se re-exportan desde `@clregions/data`:

- `CLRegionObject`, `CLProvinceObject`, `CLCommuneObject`
- `RegionId`, `ProvinceId`, `CommuneId`

## API

Todos los retornos son copias profundas para preservar inmutabilidad. Los métodos que buscan por id devuelven `null` cuando no existe.

- `findAllRegions(): Record<string, CLRegionObject>`
- `findRegionById(id: RegionId): CLRegionObject | null`
- `findAllProvincesByRegion(id: RegionId): Record<string, CLProvinceObject> | null`
- `findAllCommunesByRegion(id: RegionId): Record<string, CLCommuneObject> | null`
- `findAllProvinces(): Record<string, CLProvinceObject>`
- `findProvinceById(id: ProvinceId): CLProvinceObject | null`
- `findAllCommunesByProvince(id: ProvinceId): Record<string, CLCommuneObject> | null`
- `findAllCommunes(): Record<string, CLCommuneObject>`
- `findCommuneById(id: CommuneId): CLCommuneObject | null`
- `findRegionByCommune(id: CommuneId): CLRegionObject | null`

## Ejemplos rápidos

```ts
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
  type CLRegionObject,
  type CLProvinceObject,
  type CLCommuneObject,
} from '@clregions/core';

const regions: Record<string, CLRegionObject> = findAllRegions();
const region = findRegionById('13');
const provincesInRM = findAllProvincesByRegion('13');
const communesInRM = findAllCommunesByRegion('13');
const provinces = findAllProvinces();
const province = findProvinceById('131');
const communesIn131 = findAllCommunesByProvince('131');
const communes = findAllCommunes();
const commune = findCommuneById('13101');
const regionFromCommune = findRegionByCommune('13101');
```

## Compatibilidad

- Node.js >= 18 (recomendado) — funciona también en navegadores vía bundlers.
- ESM por defecto; CJS disponible en `exports`.

## Paquetes relacionados

- `@clregions/data`: datos tipados en formato objeto y array, para uso directo o vía CDN.

## Contribuir

Los PR son bienvenidos. Abre un issue para discutir cambios de API. Licencia MIT.

