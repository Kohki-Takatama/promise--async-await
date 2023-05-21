let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, World");
  }, 2000);
});

// promise.then((txt) => console.log(txt)).catch(console.error);

const asyncFunction = async () => {
  try {
    let result = await promise;
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};

asyncFunction();
