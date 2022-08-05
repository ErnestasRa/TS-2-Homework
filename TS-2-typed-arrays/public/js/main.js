"use strict";
const numbers = [1, 2, 3, 4, 5, 6];
const names = ['Jagnita', 'Kimparas', 'Pitonkas', 'Fasalija'];
const people = [{
        id: '39304075689',
        name: 'Verundijus',
        surname: 'Bauda',
        age: 51,
    }, {
        id: '39304075689',
        name: 'Ryja',
        surname: 'Žaneirytė',
        age: 41,
        height: 1.65,
        weight: 55,
    }, {
        id: '39304075689',
        name: 'Brudas',
        surname: 'Veilokas',
        age: 11,
        height: 1.45,
        weight: 45,
    }];
const printStrings = (strings) => {
    const printString = (str) => console.log(str);
    strings.forEach(printString);
};
const sumNumbers = (nums) => {
    const numberSumReducer = (sum, num) => sum + num;
    return nums.reduce(numberSumReducer, 0);
};
const createPeopleArray = (p1, p2) => [p1, p2];
console.group('Panaudojimo pavyzdžiai:');
{
    console.group('printStrings');
    {
        printStrings(names);
    }
    console.groupEnd();
    console.group('sumNumbers');
    {
        const result = sumNumbers(numbers);
        console.log({
            numbers,
            result,
        });
    }
    console.groupEnd();
    console.group('createPeopleArray');
    {
        const couple = createPeopleArray(people[0], people[1]);
        console.log(couple);
    }
    console.groupEnd();
}
console.groupEnd();
console.group('Užduotys');
console.group('1. Aprašykite funkcijoms ir kintamiesiems tipus');
{
    const nums = [1, -8, -6, 7, 5, 1];
    function addPositiveNumbers(arr) {
        const positiveNumberReducer = (sum, num) => (num > 0 ? sum + num : sum);
        return arr.reduce(positiveNumberReducer, 0);
    }
    console.log({
        nums,
        sumOfPositiveNumbers: addPositiveNumbers(nums),
    });
}
console.groupEnd();
console.group('2. Sukurkite ir tipais aprašykite funkciją, kuri sudarytų string\'ą iš string\'ų masyvo elementų pirmųjų raidžių');
{
    const reducer = (x, y) => x + y[0];
    const createBigLetters = (words) => {
        const acro = words.reduce(reducer, '');
        return acro;
    };
    const wordArr = [
        ['labas', 'vau', 'oho'],
        ['So', 'Be', 'Odigos'],
    ];
    wordArr.forEach((word) => {
        console.log(`${word.join(', ')} ====== ${createBigLetters(word)}`);
    });
}
console.groupEnd();
console.group('3. Sukurkite ir tipais aprašykite funkciją, kuri saudaugintų visus number masyvo skaičius');
const avg = (arr) => arr.reduce((sum, num) => sum * num, 1);
const numArray1 = [1, 3, 5, 7, 8, 10];
const numArray2 = [2, 5, 8, 7, 8, 20];
console.log(avg(numArray1));
console.log(avg(numArray2));
console.groupEnd();
console.groupEnd();
//# sourceMappingURL=main.js.map