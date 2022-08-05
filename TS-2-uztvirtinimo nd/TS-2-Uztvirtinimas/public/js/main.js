"use strict";
const wordArr = ['labas', 'oho', 'vau', 'super', 'nerealu'];
const numArr = [-1, 1, 5, 6, 8, 1, 2, 3, 4, 5, 6];
console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
    const lastIndexOfArray = (arr) => arr.length - 1;
    console.log(`lastIndexOfArray(['labas', 'oho', 'vau']) : ${lastIndexOfArray(['labas', 'oho', 'vau'])}`);
    console.log(`lastIndexOfArray(['labas', 'oho', 'vau', 'super', 'nerealu']) : ${lastIndexOfArray(['labas', 'oho', 'vau', 'super', 'nerealu'])}`);
}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
    const printArrIndexInRow = (arr) => {
        for (let i = 0; i < arr.length; i += 1) {
            console.log(`element index: ${i}`);
        }
    };
    console.log(wordArr);
    printArrIndexInRow(wordArr);
}
console.groupEnd();
console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
    const printEachArrayMember = (arr) => {
        console.log(arr);
        arr.forEach((member) => {
            console.log(member);
        });
    };
    printEachArrayMember(wordArr);
}
console.groupEnd();
console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
{
    const printEachMemberWithIndex = (arr) => {
        console.log(arr);
        for (let i = 0; i < arr.length; i += 1) {
            console.log(`${i} => ${arr[i]}`);
        }
    };
    printEachMemberWithIndex(wordArr);
    printEachMemberWithIndex(['suo', 'kate', 'meska']);
}
console.groupEnd();
console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
    const printElementsBackwards = (arr) => {
        const newArr = [];
        for (let i = arr.length - 1; i >= 0; i -= 1) {
            newArr.push(arr[i]);
        }
        return newArr;
    };
    console.log(`previous ==== ${wordArr}`);
    console.log(`now ==== ${printElementsBackwards(wordArr)}`);
}
console.groupEnd();
console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
    const printIndexOfElementsBackwards = (arr) => {
        const newArr = [];
        for (let i = arr.length - 1; i >= 0; i -= 1) {
            newArr.push(arr[i]);
        }
        return newArr;
    };
    console.log(`previous ==== ${numArr}`);
    console.log(`now ==== ${printIndexOfElementsBackwards(numArr)}`);
    console.log(`previous ==== ${wordArr}`);
    console.log(`now === ${printIndexOfElementsBackwards(wordArr)}`);
}
console.groupEnd();
console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
    const printArrayElementsInRow = (arr) => arr.join();
    console.log(printArrayElementsInRow(numArr));
    console.log(printArrayElementsInRow(wordArr));
}
console.groupEnd();
console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
{
    const printArrayElementsWithIndex = (arr) => {
        const result = arr.map((x, y) => `${x} ===> ${y}`).join(', ');
        return result;
    };
    console.log(printArrayElementsWithIndex(numArr));
}
console.groupEnd();
console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
    const printArrayMultiplied = (arr) => {
        arr.forEach((number) => console.log(number * 2));
    };
    console.log(`Previous ==== ${numArr}`);
    printArrayMultiplied(numArr);
}
console.groupEnd();
console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
    const printArraySquare = (arr) => {
        arr.forEach((number) => {
            console.log(number ** 2);
        });
    };
    console.log(`previous === ${numArr} now ↓`);
    printArraySquare(numArr);
}
console.groupEnd();
console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
    const printArayIndexMultiply = (arr) => {
        arr.map((x, y) => {
            console.log(x * y);
        });
    };
    console.log(`previous === ${numArr} now ↓`);
    printArayIndexMultiply(numArr);
}
console.groupEnd();
console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
    const printArrayPositiveNumbers = (arr) => arr.filter((x) => x > 0);
    console.log(printArrayPositiveNumbers(numArr));
}
console.groupEnd();
console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
    const printArrayNegativeNumbers = (arr) => arr.filter((x) => x < 0);
    console.log(printArrayNegativeNumbers(numArr));
}
console.groupEnd();
console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
    const printArrayEqualNumbers = (arr) => arr.filter((x) => x % 2 === 0);
    console.log(printArrayEqualNumbers(numArr));
}
console.groupEnd();
console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
    const printArrayNotEqualNumbers = (arr) => arr.filter((x) => x % 2);
    console.log(printArrayNotEqualNumbers(numArr));
}
console.groupEnd();
console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
    const printArrayOnlyPositiveNumbers = (arr) => {
        return arr.map((x) => x > 0 ? x * 1 : x);
    };
    console.log(printArrayOnlyPositiveNumbers(numArr));
}
console.groupEnd();
//# sourceMappingURL=main.js.map