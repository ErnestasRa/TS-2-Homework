/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/*
  Enum(išvardinimas) - tai konstantų rinkinys.
  Enum(išvardinimai) yra naudojami įvardinti tipams ar nustatymams.
  Jų reikšmės dažniau naudojamos tipo patikrinimams, nei atvazdavimui.
*/

// Skaitiniai išvardinimai (numeric enums)
// Nurodžius pirmajai konstantai reikšmę, sekančios susinumeruoja pradedant nurodyta reikšme
enum WeekDays {
  Monday = 1,
  Tuesday, // 2
  Wednesday, // 3
  Thursday, // 4
  Friday, // 5
  Saturday, // 6
  Sunday, // 7
}

// Jei nenurodote pirmosios reikšmės, numeruojama nuo 0
enum Answer {
  No, // 0
  Yes, // 1
}

// Jei išvardinamų konstantų tipas yra ne skaičius, privalote įvardinti kiekvieną narį
enum WeekDayNamesLT {
  Monday = 'pirmadienis',
  Tuesday = 'antradienis',
  Wednesday = 'trečiadienis',
  Thursday = 'ketvirtadienis',
  Friday = 'penktadienis',
  Saturday = 'šeštadienis',
  Sunday = 'sekmadienis',
}

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↓↓↓↓
  enum LietuvosMiestai {
    Vilnius = 'Vilnius',
    Kaunas = 'Kaunas',
    Klaipeda = 'Klaipeda',
    Siauliai = 'Siauliai',
    Mazeikiai = 'Mazeikiai'
  }
  enum PopulatedCountries {
    Turkija = 'Turkija',
    Lenkija = 'Lenkija',
    Vokietija = 'Vokietija',
    Ispanija = 'Ispanija',
    Anglija = 'Anglija'
  }

  enum BVP {
    USA = 1,
    Lietuva,
    Latvija,
    Estija,
    Svedija
  }
  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↑↑↑↑

  console.group('1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.');
  {
    const ltTown1: LietuvosMiestai = LietuvosMiestai.Vilnius;
    const ltTown2: LietuvosMiestai = LietuvosMiestai.Kaunas;
    const ltTown3: LietuvosMiestai = LietuvosMiestai.Klaipeda;
    const ltTown4: LietuvosMiestai = LietuvosMiestai.Siauliai;
    const ltTown5: LietuvosMiestai = LietuvosMiestai.Mazeikiai;
    // sprendimą|sprendimo pavyzdžius spausdinkite čia

    console.log({
      ltTown1,
      ltTown2,
      ltTown3,
      ltTown4,
      ltTown5,
    });
  }
  console.groupEnd();

  console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
  {
    const biggestPop1: PopulatedCountries = PopulatedCountries.Anglija;
    const biggestPop2: PopulatedCountries = PopulatedCountries.Ispanija;
    const biggestPop3: PopulatedCountries = PopulatedCountries.Lenkija;
    const biggestPop4: PopulatedCountries = PopulatedCountries.Turkija;
    const biggestPop5: PopulatedCountries = PopulatedCountries.Vokietija;

    console.log({
      biggestPop1,
      biggestPop2,
      biggestPop3,
      biggestPop4,
      biggestPop5,
    });
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
  }
  console.groupEnd();

  console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
  {
    const biggestBvp1: BVP = BVP.Estija;
    const biggestBvp2: BVP = BVP.Latvija;
    const biggestBvp3: BVP = BVP.Lietuva;
    const biggestBvp4: BVP = BVP.Svedija;
    const biggestBvp5: BVP = BVP.USA;

    console.log({
      biggestBvp1,
      biggestBvp2,
      biggestBvp3,
      biggestBvp4,
      biggestBvp5,
    });
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
  }
  console.groupEnd();
}
console.groupEnd();
