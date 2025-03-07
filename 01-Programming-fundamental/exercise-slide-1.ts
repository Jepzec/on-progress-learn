//1. Find rectangel area
const width1 = 3;
const lenght1 = 5;
const area = width1 * lenght1;
console.log(area);

//2. Find perimeter of rectangle
const lenght2 = 5;
const width2 = 3;
const perimeter = 2 * (5 + 3);
console.log(perimeter);

//3. Circumference area of circle
const radius = 5;
const pi = Math.PI;
const Circumference = 2 * pi * radius;
console.log(Circumference.toFixed(2));

//Area
const piCircle = Math.PI;
const radius2 = 5;
const areaCircle = piCircle * radius ** 2;
console.log(areaCircle);

//Diameter
const radiusCircle = 5 * 2;
console.log(radiusCircle);

//4. Angels of Triangles
const aAngles = 80;
const bAngles = 65;
const cAngels = 180 - (aAngles + bAngles);
console.log(cAngels);

/* ---------------------- 5. Convert Days to Year Month --------------------- */

{
  const days = 400;

  const Year = Math.round(400 / 365);
  const Month = Math.round((400 % 365) / 30);
  const Day = Math.round((400 % 365) % 30);

  console.log(Year);
  console.log(Month);
  console.log(Day);
}

{
  let days = 366;

  let Year = Math.round(days / 365);
  let Month = Math.round((days % 365) / 30);
  let Day = Math.round((days % 365) % 30);

  console.log(Year);
  console.log(Month);
  console.log(Day);
}

const days = 400;
const convertYear = Math.floor(days / 365);
const convertMonth = Math.floor((days % 365) / 30);
const convertDay = Math.floor((days % 365) % 30);
console.log(`${convertYear} year, ${convertMonth} month, ${convertDay} Day`);

const days1 = 366;
const convertYear1 = Math.floor(days1 / 365);
const convertMonth1 = Math.floor((days1 % 365) / 30);
const convertDay1 = Math.floor((days1 % 365) % 30);
console.log(`${convertYear1} year, ${convertMonth1} month, ${convertDay1} Day`);

/* --------------------- //6. find the between two date --------------------- */
const date1: Date = new Date("2022-01-20");
const date2: Date = new Date("2022-01-22");
console.log(date1);
console.log(date2);
const diffDateInMs = date2.getTime() - date1.getTime();
console.log(diffDateInMs);
const diffDateInDays = Math.abs(diffDateInMs / (1000 * 60 * 60 * 24));
console.log(diffDateInDays);

{
  //kalo dapet minus pake Math.abs untuk membulatkan minus
  const diffDateInMs = date1.getTime() - date2.getTime();
  console.log(diffDateInMs);
  const diffDateInDays = Math.abs(diffDateInMs / (1000 * 60 * 60 * 24));
  console.log(diffDateInDays);
}

/* -------------------------------------------------------------------------- */
/*                                 Math Object                                */
/* -------------------------------------------------------------------------- */
console.log(Math.PI);
console.log(Math.floor(3.4));
console.log(Math.ceil(3.2));

//dibulatkan sesuai dengan pengertian matematika
console.log(Math.round(3.9));

console.log(Math.abs(-3));
