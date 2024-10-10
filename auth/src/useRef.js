/**
 * 1. useRef
 * 2. auth app
 */

import { useEffect, useRef, useState } from "react";

// I want an object to be created during the first render and it should be pointing the same reference through out the life cycle of component.
const list = [];

/*
 function App() {
  console.log("rendered");
  const user = useRef({ name: "aravind" }); // { current: {name: "aravind"} } // #400 , #400
  const book = useRef({ name: "Sandeep Maheshwari"}); // { current: {author: "Sandeep Maheshwari"}}
  // list.push(user);
  // if (list.length === 2) {
  //   console.log(list[0] === list[1]);
  // }
  // console.log("List :", list);
  console.log(user.current.name); // "aravind"
  // #400 => { current: { name: "aravind" }}
  user.current.name = "Vidyashree";


  const [toggle, setToggle] = useState(false);


  return (
    <div className="App">
      <button onClick={() => setToggle(!toggle)}>Re Render</button>
    </div>
  );
}
*/

function App() {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  console.log(inputRef); // { current: null }

  const printInputDetails = () => {
    // const input = document.querySelector("input");
    // console.log(input.placeholder);
    console.log(inputRef.current.placeholder);
    console.log(buttonRef.current.innerText);
  }

  useEffect(() => {
    console.log(inputRef);
    console.log(buttonRef);
  }, [])

  return (
    <>
      <input placeholder="Enter Email" name="Email" ref={inputRef} />
      {/* 
        React.createElement("input", { placeholder: "Enter Email", name: "Email" , ref: {current: null} })
      */}
      <button onClick={printInputDetails} ref={buttonRef}>Click Me</button>
    </>
  );
}

export default App;
