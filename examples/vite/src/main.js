import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { regions, provinces, communes } from "@clregions/data/array"

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <h2>Regions</h2>
    ${regions.map(region => `<p>${region.name}</p>`).join('')}
    <h2>Provinces</h2>
    ${provinces.map(province => `<p>${province.name}</p>`).join('')}
    <h2>Communes</h2>
    ${communes.map(commune => `<p>${commune.name}</p>`).join('')}
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

