// inicijuoti ts projekta tsc --init
// prirasyti tipus

const numbers: number[] = [1, 15, 9, -9, -8, -7, 2, 8, 51, 6, 5];
const numbers2: number[] = [10, 105, 90, -90, -18, -17, 20, 18, 51, 16, 35];

interface numItem {
  id: string;
  name: string;
}

const numItemPvz: numItem = {
  id: 'sdsd',
  name: 'Mike',
};

const num15: numItem[] = [
  {
    id: 'id_1',
    name: 'James ',
  },
  {
    id: 'id_1',
    name: 'James ',
  },
  {
    id: 'id_3',
    name: 'Mike',
  },
];

// const rez: number[] = numbers.map((sk): number => {
//   if (numbers[2] > 2) {
//     return sk + 2;
//   }
// });

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
// [1, 2, 3];
// 1/3 + 2/3 + 3/3
function getAvgReduce(arr: number[]): number {
  const avg: number = arr.reduce(
    (total: number, sk: number, _idx: number, argArr: number[]): number => {
      return total + sk / argArr.length;
    },
    0
  );
  // const avg: number = sum / elemntuMasyve;
  console.log('getAvgReduce ===', avg);
  return avg;
}

getAvg(numbers);
getAvgReduce(numbers);
// getAvg(numbers2);
// 2. sukurti kinmanji positives ir ikelti i ji visas teigiamas reikmes is numbers2
const positives: number[] = numbers2.filter((sk: number): boolean => sk > 0);

// 3. parasyti funkcija kuri ima masyva kaip argumenta ir grazins objektu masyva su [{value: 1}, {value: 15}...]
interface valueObj {
  value: number;
}

// const a: valueObj = { id: 125 };
// const b: object = { id: 125 };

function makeArrObj(arr: number[]): valueObj[] {
  const rez: valueObj[] = arr.map((sk: number): valueObj => {
    return { value: sk };
  });
  return rez;
}
const rez = makeArrObj(numbers);
console.log('rez ===', rez);

// 4. parasyti funkcija kuri ima masyva kaip argumenta ir grazina pirmus 4 elementus
function getPartOfArr(arr: number[]): number[] {
  const sliced: number[] = arr.slice(0, 4);
  console.log('sliced ===', sliced);
  return sliced;
}
getPartOfArr(numbers);

// 4.a ta pati funkcija bet su string argumentu. jei argumentas === 'last' grazinam paskutinius 4 elementus, jei nera argumento pirmus 4.

// 5 kuriam funkcija kuri priima 2 argumentus. msg ir dest.
// msg yra string zinute, o dest yra id elemento i kur padeti msg zinute.
function displayMessage(msg: string, dest: string): void {
  // 1. nusitaikyti i elmenta
  // 2. irasyti i ta el msg (el.textContent)
}

displayMessage('hello from ts world', 'app');
displayMessage('hello from ts world', 'out');
// sunkesnes =========================

// naudojam data.js items masyva
// s1. isikelti i ts faila ir parasyti kokio tipo duomenys yra items masyve ir pats masyvas

// -- kuriam funkcijas kurios masyva gauna kaip argumenta --

// s2. parasysti funkcija kuri grazina objektu masyva su pavadinimu ir kaina {price: 45, name: 'shoues'}

// s3. parasyti funkcija kuri grazina kainu vidurki

// s4. parasyti funkcija kuri grazina visas kategorijas masyve.

// s5.parasyti funkcija kuri grazina ir iskonsolina bendra prekiu kieki
