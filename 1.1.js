// Declarative function which is Using Array.map
const declarativeFunction = (array) => {
  return array.map((item) => item);
};

// Imperative function which is Using a loop
const imperativeFunction = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
};

const numbers = [1, 2, 3, 4, 5];

const declarative = declarativeFunction(numbers);
console.log("Declarative function: ", declarative); // Output: [1, 2, 3, 4, 5]

const imperative = imperativeFunction(numbers);
console.log("Imperative function: ", imperative); // Output: [1, 2, 3, 4, 5]
