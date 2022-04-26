// inicijuoti ts projekta tsc --init
// prirasyti tipus

const numbers: number[] = [1, 15, 9, -9, -8, -7, 2, 8, 51, 6, 5];
const numbers2: number[] = [10, 105, 90, -90, -18, -17, 20, 18, 51, 16, 35];

// console.log('numbers ===', numbers[0]);

// 1. parasyti funkcija kuri ima masyva kaip argumenta ir grazina vidurki (jei galit su reduce)
function getAvg(arr: number[]): number {
  let total: number = 0;
  const elemntuMasyve: number = arr.length;
  arr.forEach((sk: number): void => {
    total = total + sk;
    // total += sk; // trumpiau
  });
  const avg: number = total / elemntuMasyve;
  console.log('avg ===', avg);
  return avg;
}
getAvg(numbers);
getAvg(numbers2);
getAvg(numbers2);
// 2. sukurti kinmanji positives ir ikelti i ji visas teigiamas reikmes is numbers2

// 3. parasyti funkcija kuri ima masyva kaip argumenta ir grazins masyvu objekta su [{value: 1}, {value: 15}...]

// 4. parasyti funkcija kuri ima masyva kaip argumenta ir grazina pirmus 4 elementus

// 4.a ta pati funkcija bet su string argumentu. jei argumentas === 'last' grazinam paskutinius 4 elementus, jei nera argumento pirmus 4.

// 5 kuriam funkcija kuri priima 2 argumentus. msg ir dest.
// msg yra string zinute, o dest yra id elemento i kur padeti msg zinute.

// sunkesnes =========================

// naudojam data.js items masyva
// s1. isikelti i ts faila ir parasyti kokio tipo duomenys yra items masyve ir pats masyvas

// -- kuriam funkcijas kurios masyva gauna kaip argumenta --

// s2. parasysti funkcija kuri grazina objektu masyva su pavadinimu ir kaina {price: 45, name: 'shoues'}

// s3. parasyti funkcija kuri grazina kainu vidurki

// s4. parasyti funkcija kuri grazina visas kategorijas masyve.

// s5.parasyti funkcija kuri grazina ir iskonsolina bendra prekiu kieki
