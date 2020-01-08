// const gcd = (a, b) => {
//   return b === 0 ? a : gcd(b, a % b)
// }
var gcd = function (a, b) {
  if (!b) {
    console.log("b equals zero!")
    return a;
  }
  console.log(`${a} % ${b} equals ${a % b}`)
  return gcd(b, a % b);
};
console.log(gcd(3, 8));


// 1st: gcd(8,12)
//if b !== 0  gcd(b, a % b)
  //2nd
  // DOES 12 GO INTO 8?
  //  gcd(12, 8 % 12) ==>  gcd(12, 8) //NO, GIVES BACK 8
    //  b != 0

//3rd
//DOES 8 GO INTO 12?
// gcd (8,12 % 8) ==> gcd(8,4) //YES, GIVES REMAINDER 4
  // b != 0

  //4th
  // gcd(4, 8 % 4) ==> gcd(4,0)
  // b === 0


