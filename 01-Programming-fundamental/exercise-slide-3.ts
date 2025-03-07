//1
let InputNumber: number = 9;
let limit: number = 10;

for (let i = 1; i <= limit; i++) {
  console.log(`${InputNumber} x ${i} = ${InputNumber * i}`);
}

{
  const num: number = 9;
  for (let i = 1; i <= 10; i++) console.log(`${num} x ${900}`);
}

//2.
function reverseString(str) {
  let newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  console.log(newString);
  if (newString === str) {
    console.log("Palindrome");
  } else {
    console.log("Not a palindrome");
  }
}
reverseString("anj");

const text = "anjay";
const textArray = text.split(" ");
console.log(textArray);

textArray.reverse();

//split (String Method): Memisahkan string menjadi array berdasarkan parameter pemisah yan kita tentukan
// -  Join (array Method): Menggabungan array menjadi sebuah string berdasarkan parameter penggabung yang kita tentukan
// - reverse (Array Method): memutar balik susunan array

const originalText: string = "kasur rusak";
const reverseText: string = originalText.split("").reverse().join("");

console.log(originalText);
console.log(reverseText);

if (originalText.toLowerCase() == reverseText.toLowerCase()) {
  console.log("Palindrome!");
} else {
  console.log("Not Palindrome!");
}

//3.
{
  let cm = 1000;
  let Hasil2 = 0;

  if (cm / 100000 >= 1) {
    Hasil2 = cm / 100000 + " " + "km";
  } else {
    Hasil2 = `${cm / 100}m`;
    console.log(Hasil2);
  }
}

//4
const nominal = 1_000_000_000;
console.log(
  "Rp." + nominal.toLocaleString("id-ID", { minimumFractionDigits: 2 })
);

{
  //5
  let target: string = "Hello World";
  const search: string = "ell";
  const searchIndex: number = target.search(search);
  const before: string = target.slice(0, searchIndex);
  const after: string = target.slice(searchIndex + search.length);
  const result = before + after;

  console.log(result);
}

const KataKata1: string = "hello";
const KataKata2: string = "world";

const modKataKata1 =
  KataKata1[0].toUpperCase() +
  KataKata1.slice(1) +
  " " +
  (KataKata2[0].toUpperCase() + KataKata2.slice(1));
console.log(modKataKata1);
