// Callback Example
function fetchDataCallback(callback) {
  setTimeout(() => {
    callback("📦 Data fetched using callback");
  }, 1000);
}

fetchDataCallback((data) => {
  console.log(data);
});

// Promise Example
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("📦 Data fetched using Promise");
    }, 1000);
  });
}

fetchDataPromise().then((data) => {
  console.log(data);
});

// Async/Await Example
async function fetchDataAsync() {
  const data = await fetchDataPromise();
  console.log("📦 Data fetched using async/await");
  console.log(data);
}

fetchDataAsync();

// Promisified Function Example
function addNumbersAsync(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a === "number" && typeof b === "number") {
      setTimeout(() => {
        resolve(a + b);
      }, 500);
    } else {
      reject("❌ Inputs must be numbers");
    }
  });
}

addNumbersAsync(5, 10)
  .then((sum) => console.log("✅ Sum:", sum))
  .catch((err) => console.error(err));

// Non-promisified version for comparison
function addNumbersSync(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error("❌ Inputs must be numbers");
  }
}

try {
  const sum = addNumbersSync(5, 10);
  console.log("✅ Sync Sum:", sum);
} catch (err) {
  console.error(err.message);
}
