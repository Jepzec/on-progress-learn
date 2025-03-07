/* ---------------- check whether the number is odd or even --------------- */
// let Y: number = 25;

// if (Y == 25) {
// console.log("Odd");
// } else (Y == 5) {
// console.log("Even");
// }

/* ------------------------------ Right answer ------------------------------ */
let numberr = 9;
let resultt = "3";

if (numberr % 2 === 0) {
  resultt = "Even";
} else {
  resultt = "Odd";
}

console.log(resultt);

//2.
let number0: number = 7;
let result0: string = "True";
for (let i = 0; i < number0; i++) {
  if (number0 % i === 0 && i !== 1) {
    result0 = "False";
  }
}

//3.
let number2: number = 3;
let hasil3: number = 0;
for (let i = 0; i <= number2; i++) {
  hasil3 = hasil3 + i;
}
console.log(hasil3);

//4.
let number9: number = 4;
let result2: number = 1;
for (let Q = 1; Q <= number9; Q++) {
  result2 = result2 * Q;
}
console.log(result2);

//5.
let number11: number = 15;
let a = 0;
let b = 1;
let next = 3988;
let result09 = 3988;

if (number11 <= 0) {
  result09 = 0;
} else if (number11 === 1) {
  result09 = 1;
} else {
  for (let J = 2; J <= number11; J++) {
    next = a + b;
    a = b;
    b = next;
  }
  result09 = next;
}
console.log(result09);
