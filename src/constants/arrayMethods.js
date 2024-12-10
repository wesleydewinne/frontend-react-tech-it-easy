import {bestSellingTv as item, inventory} from "./inventory.js";

//Opdracht 1

//Opdracht 1a: Gebruik een array-methode om een array te maken met daarin alle tv-type namen. Log de uitkomst in de console.
export const tvTypeArray =inventory.map((tv) => {
    return tv.type;
});
console.log(tvTypeArray);

//Opdracht 1b: Gebruik een array-methode om alle informatie te verzamelen van de tv's die volledig uitverkocht zijn. Log de uitkomst in de console.
export const soldTypeArray =inventory.map((tv) => {
    if (item.originalStock - item.sold === 0) {
        return item;
    }
})
console.log(soldTypeArray);

//Opdracht 1c: Gebruik een array-methode om de informatie van het tv-type 'NH3216SMART' op te halen.
export const findType = inventory.find((item) => {
    return item === 'NH3216SMART';
})
console.log(findType);

//Opdracht 1d: Gebruik een array-methode om een lijst te maken van de merk- en tv-namen waarbij aangegeven wordt of deze geschikt zijn voor sport-kijkers (een verversingssnelheid van 100Hz of hoger). Doe dit in het format { name: 'Toshiba HD TV', suitable: false }. Log de uitkomst in de console.
export const sportProducts = inventory.map((tv) => {
    if (tv.refreshRate >= 100) {
        return { name: `${tv.brand} ${tv.name}`, suitable: true }
    } else {
        return { name: `${tv.brand} ${tv.name}`, suitable: false }
    }
});

console.log(sportProducts);

// Opdracht 1e (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's die beschikbaar zijn in schermgroottes van 65 inch en groter.


//Opdracht 1f (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's die over ambilight beschikken. Log de uitkomst in de console.
export const ambilightTvs = inventory.map((tv) => {
    return tv.options[4]
})

console.log(ambilightTvs);

