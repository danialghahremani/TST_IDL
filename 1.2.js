console.log("1 - Firt queue.....");

new Promise((resolve) => {
  console.log("2 - Inside the promise :)");
  resolve("Horray! Promise resolved :)");
}).then((result) => {
  console.log("4 - Promise result:", result);
});

console.log("3 - Last queue.....");
