// let maxCallback2 = (acc, cur) => Math.max(acc.x, cur.x)


// // reduce() without initialValue
// console.log([{ x: 22 }, { x: 42 }].reduce(maxCallback2)) // 42
// // [{ x: 22 }].reduce(maxCallback) // { x: 22 }


//map/reduce; better solution, also works for empty or larger arrays
let maxCallback = (max, cur) => {
  console.log("the accumulator is currently:", max)
  return Math.max(max, cur.x)
}

let arr1 = [{ x: 22 }, { x: 42 }, { x: 99 }]
let reducedToMaxValue = arr1.reduce(maxCallback, -Infinity)
console.log("The max value is:", reducedToMaxValue)