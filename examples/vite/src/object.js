import "./style.css";
import { clRegions } from "@clregions/data/object";

const app = document.getElementById('app');
const check = "Región de Tarapacá" === clRegions.regions["01"].name;
if (!check) {
    throw new Error('Invalid data comparison');
}
const template = `
    <ol>
        ${Object.values(clRegions.regions)
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(region => `
        <li>${region.name}
          <ol>
            ${Object.values(region.provinces)
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(province => `
              <li>${province.name}
                <ol>
                  ${Object.values(province.communes)
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map(commune => `<li>${commune.name}</li>`)
                        .join('')}
                </ol>
              </li>`)
                .join('')}
          </ol>
        </li>`)
        .join('')}
    </ol>
    `;
app.innerHTML = template;
