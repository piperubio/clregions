# Chile regiones, provincias y comunas

¡Bienvenido! Con nuestra librería de TypeScript, podrás acceder fácilmente a información actualizada y precisa sobre las regiones, provincias y comunas de Chile, ahorrando tiempo y esfuerzo al no tener que recopilar y mantener los datos tú mismo.

🔒 clregions ofrece una estructura de tipos segura para trabajar con confianza en la integridad de tus datos.

🌎 clregions te permite trabajar con datos geográficos de una manera intuitiva y fácil de entender.

🚫 La librería clregions no tiene dependencias externas, lo que reduce los conflictos de versiones y simplifica el proceso de instalación.

🤖 clregions se integra perfectamente con TypeScript y es fácil de usar para nuevos usuarios.

🎨 clregions es altamente personalizable y puedes utilizar sólo una parte de la librería si eso es todo lo que necesitas.

📚 La documentación detallada de clregions te ayudará a comprender fácilmente cómo utilizar la librería y resolver cualquier problema.

🛡️ Pull Request bienvenidos!! Siéntete libre de contribuir con la librería, cualquier ayuda es bienvenida.


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

## Obtener todas las provincias

```ts
import { getAllProvinces } from '@clregions/core';

const provinces = getAllProvinces();
```

## Obtener una provincia por su código

```ts
import { getProvinceById } from '@clregions/core';

const province: CLProvince | null = getProvinceById('011');
```

## Obtener todas las comunas

```ts
import { getAllCommunes } from '@clregions/core';

const communes = getAllCommunes();
```

## Obtener una comuna por su código

```ts
import { getCommuneById } from '@clregions/core';

const commune = getCommuneById('01101');
```


