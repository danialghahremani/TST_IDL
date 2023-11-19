// Define the target object
const target = {};

const proxy = new Proxy(target, {
  get: () => {
    return "404";
  },
});

// Always Will be returned 404 :)
console.log(proxy.someProperty); // Output: 404
