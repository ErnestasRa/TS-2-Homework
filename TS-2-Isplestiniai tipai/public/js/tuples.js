"use strict";
const person1 = ['Koridas', 'Atmazas'];
const person2 = ['Paklodijus', 'Pagalvė'];
const person3 = ['Višta', 'Maumedienė'];
let currentAge = 18;
let currentHeight = 180;
const age = [currentAge, () => currentAge += 1];
const height = [currentAge, (h) => {
        if (h)
            currentHeight = h;
    }];
console.group('Tuples - užduotys');
{
    console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
    {
        const personData1 = ['Smardijus', 20];
        const personData2 = ['Vardene', 44];
        console.log({
            personData1,
            personData2,
        });
    }
    console.groupEnd();
    console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
    {
        const mixedCreatures1 = [{
                age: 25,
                name: 'Vezuvijus',
            }, {
                age: 24,
                breed: 'Pitbull',
                name: 'Kalnas',
            }];
        const mixedCreatures2 = [{
                age: 20,
                name: 'Vermontas',
            }, {
                age: 100,
                breed: 'Ziurkenas',
                name: 'Gelezis',
            }];
        console.log({
            mixedCreatures1,
            mixedCreatures2,
        });
    }
    console.groupEnd();
    console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
    {
        const trikampis1 = [[2, 2], [3, 3], [5, 5]];
        const trikampis2 = [[2, 4], [3, 5], [5, 7]];
        console.log({
            trikampis1,
            trikampis2,
        });
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=tuples.js.map