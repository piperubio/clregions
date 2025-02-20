# CL Regions Data

CLRegions Data es un proyecto que unifica y mantiene actualizados los datos territoriales de Chile en un solo lugar. Este paquete de JavaScript y TypeScript provee una estructura de datos robusta y tipada, facilitando la integración de lógica de negocio sobre los datos de regiones, provincias y comunas. Los datos, generados mediante un repositorio de Python a partir de fuentes oficiales y colaborativas, se exportan en formatos CSV, JSON y SQL, y se encapsulan para uso seguro en proyectos web o Node.

## Objetivos
- Proveer una estructura de datos robusta.
- Facilitar la integración de lógica de negocio sobre datos regionales.
- Soportar múltiples runtimes (HTML, Node, Vite, etc).

## Librería JS/TS
Esta librería permite:
- Tipado seguro en TypeScript.
- Uso sencillo en proyectos JavaScript.
- Una API consistente para acceder a los datos de regiones, provincias y comunas.

## Instalación
La instalación se puede realizar vía npm, yarn, pnpm o utilizar unpkg para proyectos sencillos en el navegador.

### Vía npm, yarn o pnpm
```bash
npm install @clregions/data
# or
yarn add @clregions/data
# or
pnpm add @clregions/data
```

### Uso vía unpkg
Incluye directamente los archivos desde un CDN:
```html
<script type="module" src="https://unpkg.com/@clregions/data@1.0.0-next.1/dist/array/index.js"></script>
```

## Uso en JS/TS

### Uso de datos como Objeto
```javascript
import { clRegions } from '@clregions/data/object';
// Ejemplo:
console.log(clRegions.regions["01"].name);
```

### Uso de datos como Array
```javascript
import { regions, provinces, communes } from '@clregions/data/array';
// Ejemplo:
console.log(regions[0].name);
```

### Uso vía unpkg en proyectos de navegador
```html
<script type="module">
  import { regions } from "https://unpkg.com/@clregions/data@1.0.0-next.1/dist/array/index.js";
  console.log(regions[0].name);
</script>
```

<!-- Nuevo Warning: -->
> [!WARNING]
> Los datos contenidos en el paquete @clregions/data son mutables, por lo que se recomienda no modificarlos directamente. Para un uso seguro, considera utilizar @clregions/core u otros mecanismos de inmutabilidad.

## Desarrollo

### Requisitos
- Python 3.12 o superior (para la generación de datos)
- [uv package manager](https://docs.astral.sh/uv/) 

### Instalación de dependencias
```bash
uv venv
uv sync
```

## Contribución
Si deseas contribuir, por favor sigue los siguientes pasos:
1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Crea un nuevo Pull Request.

## Fuentes de Datos

[BCN Ley 21.074 2018](https://www.bcn.cl/leychile/navegar?idNorma=1115064)  
[BCN Decreto 1115 del Ministerio del Interior y Seguridad Pública 2018](https://www.bcn.cl/leychile/navegar?idNorma=1123248)  
[BCN Sistema Integrado de Información Territorial (SIIT) Regiones de Chile](https://www.bcn.cl/siit/nuestropais/regiones)  
[BCN Sistema Integrado de Información Territorial (SIIT) Regiones, provincias y comunas de Chile](https://www.bcn.cl/siit/nuestropais_29_01_2021/regiones_provincias_comunas_bak.htm)  
[ISO 316 — Codes for the representation of names of countries and their subdivisions](https://www.iso.org/obp/ui/#iso:code:3166:CL)  
[Observatorio Logístico MAESTRO Códigos Únicos Territoriales - Actualizado al 2018](https://datos.observatoriologistico.cl/dataviews/262940/maestro-codigos-unicos-territoriales-actualizado-al-2018/)  
[Observatorio Logístico Provincias por Región](https://datos.observatoriologistico.cl/dataviews/244278/provincias-por-region/)  
[Observatorio Logístico Comunas por Región](https://datos.observatoriologistico.cl/dataviews/244276/comunas-por-region/)  
[WikiPedia Regiones de Chile](https://es.wikipedia.org/wiki/Regiones_de_Chile)  
[WikiPedia Provincias de Chile](https://es.wikipedia.org/wiki/Anexo:Provincias_de_Chile)  
[WikiPedia Comunas de Chile](https://es.wikipedia.org/wiki/Anexo:Comunas_de_Chile)  

## FAQ
**¿Por qué este paquete es independiente de otros repositorios?**  
Este paquete npm se centra en proveer acceso y tipado seguro a los datos procesados. El repositorio de Python se encarga de generar y mantener actualizados los datos (CSV, JSON, SQL), permitiendo que el paquete de JavaScript se enfoque en la integración en aplicaciones web y Node.

**¿Cuáles son las diferencias con otros paquetes?**  
- Otros paquetes pueden ofrecer solo un formato de datos (e.g. CSV o JSON), mientras que CL Regions Data permite acceder a datos tanto en formato de Array como de Objeto.  
- Integración optimizada para lógica de negocio, con mejoras en tipado y seguridad en TypeScript.  
- Múltiples opciones de instalación (npm/yarn/pnpm, unpkg) adaptadas a diferentes entornos.

**¿Por qué es beneficioso contar con un paquete npm?**  
- Actualizaciones centralizadas y controladas a través de versiones.
- Integración inmediata en proyectos JS/TS sin necesidad de procesamiento manual de los datos.
- Facilita el uso de herramientas modernas y bundlers (Vite, Webpack, etc).

**En caso de no requerir un paquete npm, ¿qué alternativas existen?**  
Puedes trabajar directamente con los archivos CSV, JSON y SQL, los cuales ofrecen acceso libre a los datos sin intermediación, aunque se sacrifica la integración tipada y las optimizaciones específicas para proyectos web.

**Planean soportar otros lenguajes o entornos?**  
Sí, estamos evaluando la posibilidad de extender la librería a otros lenguajes y entornos, como Deno, Bun, Python, Java, C#, entre otros. Te invitamos a contribuir con ideas y propuestas.

**¿Cómo reporto problemas o sugiero mejoras?**  
Abre un issue en nuestro repositorio de GitHub.

**¿Los datos se actualizan automáticamente?**  
No, la actualización de datos se realiza manualmente por la comunidad en el proyecto de Python de este paquete.

**¿Puedo usar esta librería en proyectos comerciales?**
Sí, esta librería está disponible bajo la licencia MIT, por lo que puedes usarla en proyectos comerciales.