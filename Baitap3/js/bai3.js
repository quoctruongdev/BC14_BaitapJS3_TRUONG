// Cho 3 số nguyên. Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn
// input
var a = 55;
var b = 24;
var c = 99;
var tongChan = 0;
var tongLe = 0;

// Process
a % 2 === 0 ? tongChan++ : tongLe++;
b % 2 === 0 ? tongChan++ : tongLe++;
c % 2 === 0 ? tongChan++ : tongLe++;

// Output
console.log("tổng số chẵn : ", tongChan);
console.log("tổng số Lẻ : ", tongLe);
