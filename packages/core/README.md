# Chile regiones, provincias y comunas

¡Bienvenido! Con nuestra librería de TypeScript, podrás acceder fácilmente a información actualizada y precisa sobre las regiones, provincias y comunas de Chile, ahorrando tiempo y esfuerzo al no tener que recopilar y mantener los datos tú mismo.

🔒 Ofrece una estructura de tipos segura para trabajar con confianza en la integridad de tus datos.

🌎 Te permite trabajar con datos geográficos de una manera intuitiva y fácil de entender.

🚫 La librería clregions no tiene dependencias externas, lo que reduce los conflictos de versiones y simplifica el proceso de instalación. 

🚀 Compatible con Node.js a partir de la versión 14, lo que te permite utilizarla en tus proyectos de backend.

🌐 También es compatible con los navegadores web, lo que te permite utilizarla en tus proyectos frontend.

🤖 Se integra perfectamente con TypeScript y es fácil de usar para nuevos usuarios.

🎨 clregions es altamente personalizable y puedes utilizar sólo una parte de la librería si eso es todo lo que necesitas.

📚 La documentación detallada de clregions te ayudará a comprender fácilmente cómo utilizar la librería y resolver cualquier problema.

🛡️ Pull Request bienvenidos!! Siéntete libre de contribuir con la librería, cualquier ayuda es bienvenida.

☕ Si tienes alguna idea de como mejorar nuestra API, abre una discusión y conversemos!

## Instalación

Con npm 
```bash
$ npm install @clregions/core
```

Con yarn 
```bash
$ yarn add @clregions/core
```

Con pnpm
```bash
$ pnpm add @clregions/core
```


# Uso


## Obtener todas las regiones

```ts
import { getAllRegions } from '@clregions/core';

const regions: Record<string, CLRegion> = getAllRegions();
```

## Obtener una región por su código

```ts
import { getRegionById } from '@clregions/core';

const region: CLRegion | null = getRegionById('13');
```


## Obtener todas las provincias de una región

```ts
import { getAllProvincesByRegion } from '@clregions/core';
const provinces: Record<string, CLProvince> | null = getAllProvincesByRegion('13');
```

## Obtener todas las comunas de una región

```ts
import { getAllCommunesByRegion } from '@clregions/core';
const communes: Record<string, CLCommune> | null = getAllCommunesByRegion('13');
```

## Obtener todas las provincias

```ts
import { getAllProvinces } from '@clregions/core';

const provinces: Record<string, CLProvince> = getAllProvinces();
```

## Obtener una provincia por su código

```ts
import { getProvinceById } from '@clregions/core';

const province: CLProvince | null = getProvinceById('011');
```

## Obtener todas las comunas de una provincia

```ts
import { getAllCommunesByProvince } from '@clregions/core';
const communes: Record<string, CLCommune> | null = getAllCommunesByProvince('011');
```
## Obtener todas las comunas

```ts
import { getAllCommunes } from '@clregions/core';

const communes: Record<string, CLCommune> = getAllCommunes();
```

## Obtener una comuna por su código

```ts
import { getCommuneById } from '@clregions/core';

const commune: CLCommune | null = getCommuneById('01101');
```


