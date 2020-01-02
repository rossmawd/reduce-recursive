let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce((allNames, name) => {
  if (name in allNames) {
    allNames[name]++
    console.log(allNames)
  }
  else {
    allNames[name] = 1
    console.log(allNames)
  }
  return allNames
}, {})

console.log(countedNames)
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }