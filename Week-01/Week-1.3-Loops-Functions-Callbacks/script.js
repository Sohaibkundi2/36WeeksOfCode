// Loop Example
for (let i = 1; i <= 3; i++) {
  console.log("Looping: ", i);
}

// Function Example
function greet(name) {
  console.log("Hello, " + name);
}
greet("Sohaib");

// Callback Example
function processData(data, callback) {
  console.log("Data received:", data);
  callback();
}

function done() {
  console.log("Processing done.");
}

processData("Sample data", done);
