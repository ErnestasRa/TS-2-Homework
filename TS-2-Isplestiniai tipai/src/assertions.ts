/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
/*
  Assertion(Teigimas) - tai papildoma direktyva tiksliau aprašyti tipui, kuomet programuotojui žinoma daugiau
  informacijos nei gali žinoti TypeScript transpiliatorius.

  Įmanoma 'teigti' tik tuos tipus, kurie priklauso potencialių tipų aibei
*/

type PossibleType = string | number;

const someNumber: PossibleType = 17 as number;
const title: PossibleType = 'Grace' as string;

// Šiuo atveju 'teigiame' kad rastas elementas bus būtent form'os elementas.
const formAddUser: HTMLFormElement = document.querySelector('#form-add-user') as HTMLFormElement;
formAddUser.onsubmit = (e) => {
  e.preventDefault();
  console.log('Ateityje pridėsiu vartotoją');
};

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Assertions - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius apraškite čia ↓↓↓↓
  const button1:HTMLButtonElement = document.querySelector('#button-element') as HTMLButtonElement;
  type Event = (e: MouseEvent) => void
  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑

  console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
  {
    button1.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('paspaustas!');
    });
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
  }
  console.groupEnd();

  console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
  {
    const divElement: HTMLDivElement = document.querySelector('#div-element') as HTMLDivElement;
    const createSquare: Event = () => {
      const element = document.createElement('span');
      element.classList.add('square-element');
      divElement.append(element);
    };

    button1.addEventListener('click', createSquare);
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
  }
  console.groupEnd();

  console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
  {
    const pElement: HTMLParagraphElement = document.querySelector('#p-element') as HTMLParagraphElement;
    let createSquareElements = 0;
    const calcSquares: Event = () => {
      createSquareElements += 1;
      pElement.innerHTML = toString(createSquareElements);
    };

    button1.addEventListener('click', calcSquares);
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
  }
  console.groupEnd();
}
console.groupEnd();
