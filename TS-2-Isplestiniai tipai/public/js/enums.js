"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 7] = "Sunday";
})(WeekDays || (WeekDays = {}));
var Answer;
(function (Answer) {
    Answer[Answer["No"] = 0] = "No";
    Answer[Answer["Yes"] = 1] = "Yes";
})(Answer || (Answer = {}));
var WeekDayNamesLT;
(function (WeekDayNamesLT) {
    WeekDayNamesLT["Monday"] = "pirmadienis";
    WeekDayNamesLT["Tuesday"] = "antradienis";
    WeekDayNamesLT["Wednesday"] = "tre\u010Diadienis";
    WeekDayNamesLT["Thursday"] = "ketvirtadienis";
    WeekDayNamesLT["Friday"] = "penktadienis";
    WeekDayNamesLT["Saturday"] = "\u0161e\u0161tadienis";
    WeekDayNamesLT["Sunday"] = "sekmadienis";
})(WeekDayNamesLT || (WeekDayNamesLT = {}));
console.group('Literal types - užduotys');
{
    let LietuvosMiestai;
    (function (LietuvosMiestai) {
        LietuvosMiestai["Vilnius"] = "Vilnius";
        LietuvosMiestai["Kaunas"] = "Kaunas";
        LietuvosMiestai["Klaipeda"] = "Klaipeda";
        LietuvosMiestai["Siauliai"] = "Siauliai";
        LietuvosMiestai["Mazeikiai"] = "Mazeikiai";
    })(LietuvosMiestai || (LietuvosMiestai = {}));
    let PopulatedCountries;
    (function (PopulatedCountries) {
        PopulatedCountries["Turkija"] = "Turkija";
        PopulatedCountries["Lenkija"] = "Lenkija";
        PopulatedCountries["Vokietija"] = "Vokietija";
        PopulatedCountries["Ispanija"] = "Ispanija";
        PopulatedCountries["Anglija"] = "Anglija";
    })(PopulatedCountries || (PopulatedCountries = {}));
    let BVP;
    (function (BVP) {
        BVP[BVP["USA"] = 1] = "USA";
        BVP[BVP["Lietuva"] = 2] = "Lietuva";
        BVP[BVP["Latvija"] = 3] = "Latvija";
        BVP[BVP["Estija"] = 4] = "Estija";
        BVP[BVP["Svedija"] = 5] = "Svedija";
    })(BVP || (BVP = {}));
    console.group('1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.');
    {
        const ltTown1 = LietuvosMiestai.Vilnius;
        const ltTown2 = LietuvosMiestai.Kaunas;
        const ltTown3 = LietuvosMiestai.Klaipeda;
        const ltTown4 = LietuvosMiestai.Siauliai;
        const ltTown5 = LietuvosMiestai.Mazeikiai;
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
        const biggestPop1 = PopulatedCountries.Anglija;
        const biggestPop2 = PopulatedCountries.Ispanija;
        const biggestPop3 = PopulatedCountries.Lenkija;
        const biggestPop4 = PopulatedCountries.Turkija;
        const biggestPop5 = PopulatedCountries.Vokietija;
        console.log({
            biggestPop1,
            biggestPop2,
            biggestPop3,
            biggestPop4,
            biggestPop5,
        });
    }
    console.groupEnd();
    console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
    {
        const biggestBvp1 = BVP.Estija;
        const biggestBvp2 = BVP.Latvija;
        const biggestBvp3 = BVP.Lietuva;
        const biggestBvp4 = BVP.Svedija;
        const biggestBvp5 = BVP.USA;
        console.log({
            biggestBvp1,
            biggestBvp2,
            biggestBvp3,
            biggestBvp4,
            biggestBvp5,
        });
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=enums.js.map