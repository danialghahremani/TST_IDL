const numbers = [4, [[5], [6, [7], 8], 9, 10]];

function flatArray(array) {
  return array.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flatArray(val) : val),
    []
  );
}

const result = flatArray(numbers);
console.log("flatted array!: ", result); // Output: [4, 5, 6, 7, 8, 9, 10]
