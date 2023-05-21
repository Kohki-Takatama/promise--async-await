let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("err");
    resolve("Promise 1 Resolved");
  }, 2000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 Resolved");
  }, 4000);
});

Promise.all([promise1, promise2]).then(console.log).catch(console.error);
Promise.race([promise1, promise2]).then(console.log).catch(console.error);
