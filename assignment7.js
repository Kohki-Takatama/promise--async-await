const resolvePromise = (taskName, ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(`${taskName} Completed`), ms);
  });

const rejectPromise = (taskName, ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(`${taskName} Failed`), ms);
  });

const outputLog = async () => {
  let status = "";
  const logStatus = () => {
    console.log(`${status} Completed`);
  };
  try {
    console.log(await resolvePromise("Task 1", 2000));
    console.log(await resolvePromise("Task 2", 2000));
    console.log(await rejectPromise("Task 3", 2000));
  } catch (err) {
    console.error(`${err} Failed`);
    console.error(`Error: ${err.match(/Task\s\d+/)} has failed. Exiting...`);
  }
};

outputLog();
