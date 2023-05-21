const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const firstAsync = async () => {
  try {
    await delay(2000);
    console.log("first async done");
  } catch (err) {
    console.error(err);
  }
};

const secondAsync = async () => {
  try {
    await firstAsync();
    await delay(2000);
    console.log("second async done");
  } catch (err) {
    console.error(err);
  }
};

console.log("start");
secondAsync();
