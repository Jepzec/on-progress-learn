/* ---------------------- // AND short sircuit operator --------------------- */
// 1. [Falsy1 && Falsy2] = Falsy1
// 2. [Falsy1 && Truthy1] = Falsy1
// 3. [Truthy1 && Truthy2] = Truthy2
const result3 = "Some text" && 0;
console.log(result3);

/* ------------------------ OR Short circuit operator ----------------------- */

const result4: number | string = 0 || "Some text";
console.log(result4);

// 1. [Truthy1 || Truthy2] = Truthy1
// 2. [Truthy1 || Falsy1 ] = Truthy1
// 3. [Falsy1 || Falsy2  ] = Falsy2

/* ---------------------------------- Note ---------------------------------- */
console.log(10 === 10 && 5 > 6); // && -> Logical operator AND
console.log(0 && "Some text"); // && -> Short Circuit Operator AND