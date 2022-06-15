//Spread Example
const exampleArray = [1, 2, 3];
const newArray = [...exampleArray, 4, 5];
const exampleObject = { valueOne: 1, valueTwo: 2 };
const newObject = { ...exampleObject, valueThree: 3 };

//Rest Example
function sortArgs(...args) {
  return args.sort();
}
