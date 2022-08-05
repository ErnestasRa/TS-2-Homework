"use strict";
console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
const priceSorter = (drinkOne, drinkTwo) => drinkOne.price - drinkTwo.price;
const sorter = (drinks) => [...drinks].sort(priceSorter);
const drinks = [
    { name: 'lemonade', price: 50 },
    { name: 'lime', price: 10 },
    { name: 'water', price: 15 },
    { name: 'coffee', price: 0.50 },
];
console.log(sorter(drinks));
console.groupEnd();
console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    const addItsName = (name, value) => {
        const object = {};
        object[name] = value;
        return object;
    };
    console.log(addItsName('obuolys', 200));
    console.log(addItsName('zmogus', 300));
    console.log(addItsName(' ', 1));
}
console.groupEnd();
//# sourceMappingURL=main.js.map