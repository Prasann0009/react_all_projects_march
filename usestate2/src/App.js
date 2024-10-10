/**
 * useState's asynchronous behaviour
 * non primitive state ( Arrays, Objects )
 * Lazy Intialisation
 * Assignment questions
 */

import { useState } from "react";


// the setState() invocation will not update state of the component immediately.
// the state gets updated during the next render.

// function App() {
//   const [count, setCount] = useState(0);
//   // const 

//   const increment = () => {
//     setCount((prev) => prev + 1);
//     setCount((prev) => prev + 10);
//     setCount((prev) => prev + 18);
//     setCount(count + 10);
//     setTimeout(() => {
//       setCount(prev => prev + 19);
//     }, 3000);
//   }

//   return (
//     <div className="App">
//       <h1>Count :{count}</h1>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }


function App() {
  const [students, setStudents] = useState(["aravind", "rajesh"]);

  const addUser = () => {
    // "Suraj Kumar"
    // students = #400 = [ 1, 2, 3]
    // students.push("Suraj Kumar");
    // setStudents([...students, "Suraj Kumar"]); // setStudents(#500)
    setStudents((prev) => {
      return [...prev, "Suraj Kumar"];
    })
  }

  return (
    <>
      <h1>All Users: </h1>
      <div>
        {
          students.map(student => <p>{student}</p>)
        }
      </div>
      <button onClick={addUser}>Add User</button>
    </>
  );
}

export default App;


// setTimeout(() => {
//   console.log("jjdkd");
// })
// console.log("dkkdd");