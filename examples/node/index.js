import { regions, provinces, communes } from "@clregions/data/array"
import { clRegions } from "@clregions/data";

// === Array Implementation Example ===
console.log("=== Array Implementation Example ===");
console.log(`Total regions (array): ${regions.length}`);
regions.forEach((region, i) => {
    console.log(`Region ${i + 1}: ${region.name}`);
});
console.log(`Total provinces (array): ${provinces.length}`);
provinces.slice(0, 5).forEach((province, i) => {
    console.log(`Province ${i + 1}: ${province.name}`);
});
console.log(`Total communes (array): ${communes.length}`);
communes.slice(0, 5).forEach((commune, i) => {
    console.log(`Commune ${i + 1}: ${commune.name}`);
});
const arrayCheck = "Región de Tarapacá" === regions[0].name;
console.log(`Array check for first region 'Región de Tarapacá': ${arrayCheck ? "Passed" : "Failed"}`);

console.log(""); // Newline for separation

// === Object Implementation Example ===
console.log("=== Object Implementation Example ===");
const objectRegions = clRegions.regions;
const regionKeys = Object.keys(objectRegions);
console.log(`Total regions (object): ${regionKeys.length}`);
regionKeys.forEach((key, i) => {
    const region = objectRegions[key];
    console.log(`Region ${i + 1} (${key}): ${region.name}`);
    const provinceKeys = Object.keys(region.provinces);
    console.log(`  Total provinces: ${provinceKeys.length}`);
    provinceKeys.forEach((pKey, j) => {
        const province = region.provinces[pKey];
        console.log(`   Province ${j + 1} (${pKey}): ${province.name}`);
        const communeKeys = Object.keys(province.communes);
        console.log(`     Total communes: ${communeKeys.length}`);
        communeKeys.slice(0, 3).forEach((cKey, k) => {
            const commune = province.communes[cKey];
            console.log(`      Commune ${k + 1} (${cKey}): ${commune.name}`);
        });
    });
});
const objectCheck = "Región de Tarapacá" === clRegions.regions["01"].name;
console.log(`Object check for region "01": ${objectCheck ? "Passed" : "Failed"}`);