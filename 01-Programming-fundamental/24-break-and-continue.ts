/* ---------------------------------- BREAK --------------------------------- */
let sum: number = 0;
while (true) {
  let value: number = 1;

  if (sum === 5) break;

  sum = sum + value;
  //sum += value;
}

console.log("sum: " + sum);

let sum1: number = 5;

while (true) {
  break;
  let value: number = 1;

  if (sum1 === 5) break;

  sum = sum + value;
  //sum += value;
}

console.log("sum1: " + sum1);

/* -------------------------------- CONTINUE -------------------------------- */
for (let i = 0; i < 10; i++){
    if (i===5) continue;
    console.log(i);
}