// ✅ Sync vs Async
console.log("1. Start");

setTimeout(() => {
  console.log("2. Async: setTimeout finished");
}, 2000);

console.log("3. End");

// ✅ Basic Promise
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  setTimeout(() => {
    if (success) {
      resolve("Promise Resolved ✅");
    } else {
      reject("Promise Rejected ❌");
    }
  }, 1000);
});

myPromise
  .then((msg) => console.log("4.", msg))
  .catch((err) => console.log("4.", err));

// ✅ Async/Await Example
async function fetchData() {
  console.log("5. Fetching data...");

  try {
    const result = await new Promise((resolve) =>
      setTimeout(() => resolve("6. Data fetched using async/await 🚀"), 1500)
    );
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();

// ✅ Callback vs Promise
function doTaskCallback(callback) {
  setTimeout(() => {
    callback("7. Task done using callback 🔁");
  }, 1000);
}

doTaskCallback((message) => {
  console.log(message);
});

function doTaskPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("8. Task done using promise 🔄");
    }, 1000);
  });
}

doTaskPromise().then((message) => console.log(message));
