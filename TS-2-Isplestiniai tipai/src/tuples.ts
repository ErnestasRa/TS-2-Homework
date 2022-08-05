/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */
/*
  Tuple(rinkinys) - tai masyvas su greižtai nurodytais masyvo elemento tipais ir jų seka.
  Šis tipas neleidžia turėti kitokį kiekį, ar kitokio tipo elementų
*/
type FullnameTuple = [string, string];
type UseNumericStateTuple = [number, (num?: number) => void];

const person1: FullnameTuple = ['Koridas', 'Atmazas'];
const person2: FullnameTuple = ['Paklodijus', 'Pagalvė'];
const person3: FullnameTuple = ['Višta', 'Maumedienė'];

let currentAge: number = 18;
let currentHeight: number = 180;
const age: UseNumericStateTuple = [currentAge, () => currentAge += 1];
const height: UseNumericStateTuple = [currentAge, (h) => {
  if (h) currentHeight = h;
}];

// Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Tuples - užduotys');
{
  // ↓↓↓↓ Tipus apraškite čia ↓↓↓↓
  type PersonTuple = [string, number]
  type Person = {
    name: string,
    age: number,
  }

  type Dog ={
    name: string,
    breed: 'Pitbull' | 'Chihuahua' | 'Ziurkenas'
    age: number
  }
  type MixTuple = [Person, Dog]

  type TrikampioKampas = [number, number]
  type TrikampisTuple = [TrikampioKampas, TrikampioKampas, TrikampioKampas]

  // ↑↑↑↑ Tipus apraškite čia ↑↑↑↑

  console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
  {
    const personData1: PersonTuple = ['Smardijus', 20];
    const personData2: PersonTuple = ['Vardene', 44];

    console.log({
      personData1,
      personData2,
    });
    // sprendimo pavyzdžius spausdinkite čia
  }
  console.groupEnd();

  console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
  {
    const mixedCreatures1: MixTuple = [{
      age: 25,
      name: 'Vezuvijus',
    }, {
      age: 24,
      breed: 'Pitbull',
      name: 'Kalnas',
    }];

    const mixedCreatures2: MixTuple = [{
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
    // sprendimo pavyzdžius spausdinkite čia
  }
  console.groupEnd();

  console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
  {
    const trikampis1: TrikampisTuple = [[2, 2], [3, 3], [5, 5]];
    const trikampis2: TrikampisTuple = [[2, 4], [3, 5], [5, 7]];

    console.log({
      trikampis1,
      trikampis2,
    });
    // sprendimo pavyzdžius spausdinkite čia
  }
  console.groupEnd();
}
console.groupEnd();
