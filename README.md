# clregions — datos y utilidades de regiones, provincias y comunas de Chile

Monorepo con dos paquetes publicados en npm para trabajar con la división político–administrativa de Chile.

- `@clregions/data`: datos tipados (objeto y arrays) listos para usar en Node, navegador o CDN.
- `@clregions/core`: utilidades inmutables y tipadas para consultar regiones, provincias y comunas.

## Enlaces rápidos

- Paquete core: ./packages/core/README.md
- Paquete data: ./packages/data/README.md
- Ejemplos: ./examples

## Instalación rápida

```bash
npm install @clregions/core
# o
npm install @clregions/data
```

## Uso básico (@clregions/core)

```ts
import { findRegionById } from '@clregions/core';
const rm = findRegionById('13');
```

## Características

- Tipos estrictos para regiones, provincias y comunas
- ESM/CJS; funciona en Node y navegadores (vía bundlers)
- Sin dependencias externas
- Datos mantenidos en `@clregions/data` y consumidos de forma inmutable en `@clregions/core`

## Desarrollo

Requisitos: Node 18+, pnpm.

```bash
pnpm i
pnpm -w -F @clregions/core build
pnpm -w -F @clregions/data build
pnpm -F @clregions/core test
```

Format y lint:

```bash
pnpm biome format --write .
pnpm biome check .
pnpm -F @clregions/core lint
pnpm -F @clregions/data lint
```

## Estructura

- packages/core: API de consulta inmutable sobre los datos.
- packages/data: dataset tipado y exportado en distintos formatos.
- examples: ejemplos HTML, Node y Vite.

## Licencia y contribución

MIT. PRs y discusiones bienvenidas.