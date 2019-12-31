const array1 = [4];
const reducer = (accumulator, currentValue) => {
  console.log("The accumulator value is: ", accumulator)
  console.log("The currentValue is: ", currentValue)
  console.log("-----------------")
  return accumulator + currentValue
};

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 15


