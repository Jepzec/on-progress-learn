/* -------------------------------------------------------------------------- */
/*                            Function Declaration                            */
/* -------------------------------------------------------------------------- */

//1.
function square(num: number) {
  return num * num;
}
const x: number = square(4);
console.log(x);

function calculateRectangleArea(length: number, width: number) {
  return length * width;
}
const y: number = calculateRectangleArea(8, 8);
const y2: number = calculateRectangleArea(8, 7);
const y3: number = calculateRectangleArea(9, 8);
const y4: number = calculateRectangleArea(2, 8);

console.log(y);
console.log(y2);
console.log(y3);
console.log(y4);

//2.
function greetings(name: string) {
  return `Hi, ${name}!`; //jika return lebih dari 1 maka yang dijalankan yg pertama
  return `Hola, ${name}!`;
  return `Hello, ${name}!`;
}
const greetResult = greetings("Naufal");
console.log(greetResult);

/* -------------------------------------------------------------------------- */
/*                             Function Expression                            */
/* -------------------------------------------------------------------------- */

function cmToKm(num: number){
    return num / 100000;
}
    const cmToKmResult = function (num: number){
    console.log(cmToKmResult);
    }

/* -------------------------------------------------------------------------- */
/*                               Arrow Function                               */
/* -------------------------------------------------------------------------- */


 const grToKg1= (weight: number) => {
    return weight / 1000;
};

//2. 
const grToKg = (weight: number) => weight / 1000;
const grToKgResult = grToKg(20);
console.log(grToKgResult);

{
const grToKg = (weight: number) => weight * 10000 / 10;

const grToKgResult = grToKg(20);
console.log(grToKgResult);
}

/* -------------------------------------------------------------------------- */
/*                            Higher Order Function                           */
/* -------------------------------------------------------------------------- */
/* ------- Fungsi yang menerima atau mengembalikan sebuuah fungsi lain ------ */

function example(callback) {
    const result = callback();
    return result
}
const exampleResult = example(function inside() {
    return "Higher";
});
console.log(exampleResult);

1


