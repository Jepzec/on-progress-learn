//method adalah perintah khusus dari sebuah data types
//1. toUpperCase & toLowerCase

const greetings = "Welcome to Purwadhika!";
const greetingsUpper = greetings.toUpperCase();
const greetingsLower = greetings.toLowerCase();
console.log(greetingsUpper);
console.log(greetingsLower);

//2. split
const sentence = "Jakarta is enjoyable if you have enough money";
// const sentenceArray = ["Jakarta", "enough", "money"];
const sentenceArray = sentence.split(" ");
console.log(sentenceArray);
Array(8);

//3. Search
const fullName1 = "King Un";
const result90 = fullName1.search("Un");
console.log(result90);

//4. Trim
const incomingEmail = " muhammadnaufal@gmail.com".trim();
const databaseEmail = "muhammadnaufal@gmail.com";
console.log(incomingEmail === databaseEmail);
