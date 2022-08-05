"use strict";
const someNumber = 17;
const title = 'Grace';
const formAddUser = document.querySelector('#form-add-user');
formAddUser.onsubmit = (e) => {
    e.preventDefault();
    console.log('Ateityje pridėsiu vartotoją');
};
console.group('Assertions - užduotys');
{
    const button1 = document.querySelector('#button-element');
    console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
    {
        button1.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('paspaustas!');
        });
    }
    console.groupEnd();
    console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
    {
        const divElement = document.querySelector('#div-element');
        const createSquare = () => {
            const element = document.createElement('span');
            element.classList.add('square-element');
            divElement.append(element);
        };
        button1.addEventListener('click', createSquare);
    }
    console.groupEnd();
    console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
    {
        const pElement = document.querySelector('#p-element');
        let createSquareElements = 0;
        const calcSquares = () => {
            createSquareElements += 1;
            pElement.innerHTML = toString(createSquareElements);
        };
        button1.addEventListener('click', calcSquares);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=assertions.js.map