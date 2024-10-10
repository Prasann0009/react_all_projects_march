/**
 * Lazy Intialisation
 * State uplifting
 * Movies App
 */

import { useState } from "react";

function calcSum(n) {
  console.log("inside calc sum");
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}


function App({ n }) {
  // intial count should be sum of first n numbers
  // (n * (n + 1)) / 2

  // useState => single argument => it's the intial state

  // useState => can also take a function as an argument => this function will be executed only for
  console.log("app rendered");
  // const [count, setCount] = useState(() => calcSum(n));
  const [count, setCount] = useState(function () {
    return calcSum(n)
  })

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;