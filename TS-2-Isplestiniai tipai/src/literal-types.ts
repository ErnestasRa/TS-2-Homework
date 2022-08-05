/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
/*
  literal-types(konkretūs tipai) - tai tipai sudaryti iš konkrečių reikšmių
*/

type Latvia = 'Latvia';
type Lithuania = 'Lithuania';
type Estonia = 'Estonia';
const country: Latvia = 'Latvia';

type BalticCountry = Latvia | Lithuania | Estonia;
const country2 = 'Estonia';

type HttpType = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

type HttpRequest = {
  url: string,
  headers?: {
    [key: string]: string,
  },
  body?: {
    [key: string]: string,
  }
  method: HttpType,
};

const req1 = {
  url: 'https://tavo-veidas.lt',
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'GET',
};

const req2 = {
  url: 'https://tavo-veidas.lt/api/',
  headers: {
    Authorization: 'Bearer fhdguisdf8g76sdf89ghf5..?sfg',
    'Content-Type': 'application/json',
  },
  body: {
    image: 'https://i.pinimg.com/474x/67/0a/1d/670a1d06e7bff426ec343e8c06c93ca5--crazy-faces-strange-people.jpg',
  },
  method: 'POST',
};

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius apraškite čia ↓↓↓↓
  type Berlin = 'Berlin'
  type Hamburg = 'Hamburg'
  type Munich = 'Munich'
  type Cologne = 'Cologne'
  type Stuttgart = 'Stuttgart'

  type BiggestGermanCities = Berlin | Hamburg | Munich | Cologne | Stuttgart

  type Yorksire = 'Yorksire'
  type Bulldog = 'Bulldog'
  type Chihuaha = 'Chihuaha'
  type Mixas = 'Mixas'
  type Katasunis = 'Katasunis'

  type DogTypes = Yorksire | Bulldog | Chihuaha | Mixas| Katasunis

  type Katalizatorius = 'Katalikas'
  type Motoras = 'Motoras'
  type Langai = 'Langai'
  type Valytuvai = 'Valytuvai'
  type Ratai = 'Ratai'

  type CarParts = Katalizatorius | Motoras | Langai | Valytuvai | Ratai
  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑

  console.group('1. Sukurkite konkrečius 5 dižiausių Vokietijos miestų tipus. Sukurkite tipą, kurio reikšmė būtų viena iš miestų.');
  {
    const germanCity1: BiggestGermanCities = 'Berlin';
    const germanCity2: BiggestGermanCities = 'Stuttgart';

    console.log({
      germanCity1,
      germanCity2,
    });
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
  }
  console.groupEnd();

  console.group('2. Sukurkite konkrečias 5 šunų veisles. Sukurkite tipą, kurio reikšmė būtų viena iš veislių.');
  {
    const dogBreed1: DogTypes = 'Bulldog';
    const dogBreed2: DogTypes = 'Katasunis';

    console.log({
      dogBreed1,
      dogBreed2,
    });
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
  }
  console.groupEnd();

  console.group('3. Sukurkite konkrečias 5 mašinos dalių tipus. Sukurkite tipą, kurio reikšmė būtų viena iš dalių.');
  {
    const autoDalys1: CarParts = 'Katalikas';
    const autoDalys2: CarParts = 'Ratai';

    console.log({
      autoDalys1,
      autoDalys2,
    });
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
  }
  console.groupEnd();
}
console.groupEnd();
