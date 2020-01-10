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

// const range = (low, high) => {
//   let arr = []
//   return low === high ? arr : arr[range(low + 1, high)]
// }

const longestString = (array) => {

}

console.log(range(3, 12))


let arr1 = ["dave", "sam", "adam", "mike"]
