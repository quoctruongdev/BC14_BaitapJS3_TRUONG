// Viết chương trình cho nhập 3 cạnh của tam giác. Hãy cho biết đó là tam giác gì?

var a = 5;
var b = 13;
var c = 12;
if (a === b && b === c) {
  console.log("Tam giác đều");
} else if (a === b || b === c || a === c) {
  console.log("Tam giác cân");
} else if (
  a * a === b * b + c * c ||
  b * b === a * a + c * c ||
  c * c === a * a + b * b
) {
  console.log("Tam giác vuông");
} else {
  console.log("Tam giác thường");
}
