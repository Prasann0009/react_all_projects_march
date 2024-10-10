import { legacy_createStore as createStore } from "redux";


// parameters: currentState, action
// reducer should return the state object

// action = { type: "" }
function reducer(currentState, action) {
  if (action.type === "suman") {
    return { name: "suman" }
  }
  return { name: "aravind" }
}

const store = createStore(reducer);

// store = { dispatch, getState, subscribe, replaceReducer  }

// getState => will return the latest state of the store
store.subscribe(function () {
  console.log("store got changed");
});
// console.log(store.getState()); // { name: "aravind" }
store.dispatch({ type: "suman" })
// console.log(store.getState()); // { name: "suman" }










function App() {
  return (
    <div className="App">
      <h1>Redux Introduction</h1>
    </div>
  );
}

export default App;


/**
 * Imagine a medical Shop: 
 * 1. State/Store ( medicine )
 * 2. Customer gives(dispatching) the prescription(action => {} ) to the sales person(reducer => function)
 * 3. When store gets updated reducer will inform , cashier(subscriber) to the store.
 * 
 * Technical terminology: 
 * 1. store ( which stores the state/data )
 * 2. reducer => function that takes previous state, action and returns a new state.
 * 3. action => {type: ""} a plain object based on which the reducer will update state.
 * 4. dispatch => function which takes action object and informs the reducer.
 * 5. subscribe => a functions which will get executed upon store/state change.
 * 6. getState => a function which returns the latest state value.
 */