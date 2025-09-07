const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs! 🐞",
  "I would tell you a UDP joke, but you might not get it.",
  "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?' 🍻",
  "To understand recursion, you must first understand recursion. 🔁"
];

function randomJoke() {
  return jokes[Math.floor(Math.random() * jokes.length)];
}

module.exports = randomJoke;
