/* -------------------------------------------------------------------------- */
/*                               Array Creation                               */
/* -------------------------------------------------------------------------- */

//Keduanya sama, bedanya hanya penggunaan tanda ()/[]
const array1 = [];
const array2 = new Array();

console.log(array1);
[];
console.log(array2);
[];
console.log(array1.length);
[];
console.log(array2.length);
[];

const array3 = [1, 2, 3, 4, 5];
const array4 = new Array(1, 2, 3, 4, 5);

console.log(array3);
console.log(array4);
console.log(array3.length);
console.log(array4.length);

const array5 = [
  {
    name: "John Doe",
    address: {
      street: "Wall Street",
      city: "New York",
      state: "Texas",
    },
  },
  {
    name: "Jane Doe",
    address: {
      street: "Gg.Buntu",
      city: "Cibubur",
      state: "Cileungsi",
    },
  },
];

console.log(array5);

const array6 = [
  {
    // "Null", undefined:, false, "A", {name: "Budbud"},  [1, 2, 3], "$",
  },
];

/* -------------------------------------------------------------------------- */
/*                           Accessing array element                          */
/* -------------------------------------------------------------------------- */

const array7 = [1, 2, 3, 4, 5];
console.log(array7[2]);

const array8 = ["A", null, "B", null];
console.log(array8[2]);

const array9 = ["A", "a", "Aa", ["B", ["C", ["D"]]]];
console.log(array9[0]);

/* -------------------------------------------------------------------------- */
/*                            Array Built In Method                           */
/* -------------------------------------------------------------------------- */

//. push() untuk menambahkan value di akhir
const array10 = [1, 2, 3, 4, 5];
array10.push(6);
console.log(array10);

//. pop() untuk menghilangkan value di akhir

const array11 = ["1", "2", "3", "4", "5"];
array11.pop();
console.log(array11);

//. unshift() untuk mmenambahkan value di awal

const array12 = [1, 2, 3, 4, 5];
array12.unshift(0);
console.log(array12);

//. shift() untuk menghilangkan value di awal
const array13 = [1, 2, 3, 4, 5];
array13.shift();
console.log(array13);

//.toString()
const array14 = [1, 2, 3];
console.log(array14.toString());

//.join( "ini bisa di isi sesuai kebutuhan")
const array15 = [1, 2, 3];
console.log(array15.join(" >> "));

//. concat()
const array16 = [1, 2, 3];
const array17 = ["A", "B", "C"];
const array18 = array16.concat(17);
console.log(array16.concat(array17));

//.splice()
//  Beaviournya seperti Cut. Dia akan mengubah nilai array aslinya
const array19 = ["Jan", "March", "April", "June", "July"];
array19.splice(1, 0, "Feb");
// Inserts at index 1
console.log(array19);

array19.splice(4, 1, "May", "June");
// Replaces 1 element at index 4
console.log(array19);

const array21 = ["Jan", "Feb", "Maret", "April", "June"];
const sliceResult1 = array21.splice(1, 3);
console.log(array21);
console.log(sliceResult1);

//.slice()
// Beaviournya seperti Copy. Jadi tidak mengubah nilai array aslinya

const array20 = ["Jan", "Feb", "Maret", "April", "June"];
const sliceResult = array20.slice(1, 4);
console.log(array20);
console.log(sliceResult);

//.indexOf()
const array22 = [2, 3, 6, 1, 90, 1000, 100, 23];
console.log(array22.indexOf(90));
console.log(array22.indexOf(55));
console.log(array22.indexOf(3));

//.lastIndexOff
const array23 = [2, 3, 6, 1, 90, 1000, 100, 23, 3, 887, 62, 3];
console.log(array23.lastIndexOf(90));
console.log(array23.lastIndexOf(55));
console.log(array23.lastIndexOf(3));
