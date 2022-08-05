/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-empty */
/* eslint-disable no-lone-blocks */
console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');

    type Drink = {
      name: string,
      price: number
    };

const priceSorter = (drinkOne:Drink, drinkTwo:Drink) => drinkOne.price - drinkTwo.price;

const sorter = (drinks:Array<Drink>): Array<Drink> => [...drinks].sort(priceSorter);

const drinks: Drink[] = [
  { name: 'lemonade', price: 50 },
  { name: 'lime', price: 10 },
  { name: 'water', price: 15 },
  { name: 'coffee', price: 0.50 },
];

console.log(sorter(drinks));
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    type Parameters = {
      name: string,
      value: number
    };

    const addItsName = (name: Parameters, value: Parameters) => {
      const object = {};
      object[name] = value;
      return object;
    };

    console.log(addItsName('obuolys', 200));
    console.log(addItsName('zmogus', 300));
    console.log(addItsName(' ', 1));
}
console.groupEnd();
