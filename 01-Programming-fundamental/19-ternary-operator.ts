let president: string = "Jokowi";

/* ------------------------------- // If else ------------------------------- */
if (president == "Prabowo") {
  console.log("Benar");
} else {
  console.log("Salah");
}

// [Condition] ? [True Condition] : [False Condition]
const result2 = president === "Prabowo" ? "Benar" : "Salah";
console.log(result2);

/* ---------------------------- // If Elseif Else --------------------------- */
if (president === "Prabowo") {
  console.log("Benar");
} else if (president === "Jokowi") {
  console.log("Bisa jadi");
} else president === "Jokowi";
{
  console.log("Salah");
}

const result1 =
  president === "Prabowo"
    ? "Benar"
    : president === "Jokowi"
    ? "Bisa jadi"
    : "Salah";
console.log(president);
