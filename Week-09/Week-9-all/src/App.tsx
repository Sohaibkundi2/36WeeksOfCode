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


// ************practice of generic enum import export***********


  enum taskStatus{
    Todo= "Todo",
    InProgress= "InProgress",
    Done= "Done"
  }

  interface Task{
    title:string,
    isCompleted:boolean,
    status:taskStatus
  }

  const myTask: Task ={
    title:"practice week 9",
    isCompleted:false,
    status:taskStatus.InProgress
  }

    // type is also same like interface but it is more extandable
  
  type user = {
    name:string,
    age:number
  }
  enum tech {
    mobileUser= "mobileUser",
    laptopUser= "laptopUser"
  }
  type techUser= user &{
    userOf:tech
  }

  const Sohaib : techUser = {
    name:"sohaib khan",
    age: 19,
    userOf:tech.laptopUser
  }

  // Generic

  function wrappArray<T>(value:T):T[]{
    return [value]
  }

  const a = wrappArray <string>("Sohaib")
  const b = wrappArray <number>(20)

  // export

//   export default function add(a: number, b: number): number {
//   return a + b;
// }





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