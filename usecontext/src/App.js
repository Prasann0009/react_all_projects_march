import { createContext } from "react";
import "./app.css";
import Component1 from "./components/Component1";
import Component3 from "./components/Component3";
export const Context = createContext(290022);

function App() {
  let a = 60;

  return (
    <div>
      <h1>Context API , root component {a}</h1>
      <Component3 />
      <Context.Provider value={a}>
        <Component1 />
        <Context.Provider value={99}>
          <Component3 />
        </Context.Provider>
      </Context.Provider>
    </div>
  );
}

export default App;