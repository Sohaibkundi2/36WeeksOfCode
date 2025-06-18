// App.jsx
import useCounter from './useCounter';

function App() {
  const { count, increment, decrement, reset } = useCounter(5);


  let username: string = "Sohaib";
  let age: number = 20;
  let isStudent: boolean = true;

  let fruits: string[] = ["apple", "banana"];
  let scores: [string, number] = ["Math", 95]; // Tuple
  console.log(fruits[1])


  return (
    <>
      <div>
        <h2>{count}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
      {/* typscript practice */}
      <h2>Hello there, my name is {username} and my age is {age}</h2>


    </>
  );
}
export default App