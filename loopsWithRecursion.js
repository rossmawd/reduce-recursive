const loop = (x) => {
  if (x >= 5) {// "x >= 5" is the exit condition 
    console.log(`completed ${x} loops`)
    return;
  }
  console.log(`Loop: ${x}`)
  loop(x + 1); // the recursive call
}

loop(0)

//find prime factors
const primeFactors = (num) => {

}



let arr1 = ["dave", "sam", "adam", "mike"]
console.log(sort(arr1))