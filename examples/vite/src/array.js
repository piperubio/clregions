import "./style.css";
import { regions, provinces, communes } from "@clregions/data/array";

const app = document.getElementById('app');
const check = "Región de Tarapacá" === regions[0].name;
if (!check) {
    throw new Error('Invalid data comparison');
}
const template = `
    <h2>Regions</h2>
    ${regions.map(region => {
    return `<div>${region.name}</div>`;
}).join('')}
    <h2>Provinces</h2>
    ${provinces.map(province => {
    return `<div>${province.name}</div>`;
}).join('')}

    <h2>Communes</h2>

    ${communes.map(commune => {
    return `<div>${commune.name}</div>`;
}).join('')}
    `;
app.innerHTML = template;