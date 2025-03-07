//1. toString
const price3 = 1_000;
console.log(price3.toString());

//2. toExponential
const total = 12345;
console.log(total.toExponential()); //1.2345 * 10 * 10 * 10 * 10

//3. toFixed
const pi = 3.14159;
console.log(pi.toFixed(2));
console.log(pi.toFixed(3));
console.log(pi.toFixed(4));

//4. Number
const record = "1000";
console.log(Number("50000"));
console.log(Number(record));
