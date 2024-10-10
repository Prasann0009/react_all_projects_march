import { Component } from "react";
/**
 * VDOM 
 * Class Components
 * Assignments
 */
// function App() {
//   return (
//     <div className="App">
//       <h1>Aravind</h1>
//     </div>
//   );
// }

// to make a class component always we need to inherit Component class from react library
class App extends Component {
  constructor(props) {
    console.log("constructor executer");
    super(props);
    this.state = { count: 0 };
  }

  render() {
    console.log("render executed");
    /*
      never do this as state is a readonly value
      this.state = { count: 1}
      this.state.count += 1

      To update the state of a component, we can use a setState method in a class component.

      React re renders the component, whenever there's a change in the state.
      React re renders on state change to compute the VDOM2 (updated UI)
    */
    const increment = () => {
      // console.log("clicked on button");
      const curr = this.state.count;
      this.setState({ count: curr + 1 });
    }

    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        <p>count: {this.state.count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
  }
}


// Function component
// const App = ({name}) => <h1>Aravind</h1>


export default App;


// function displayUsers(users) {

//   // for browser repainting an element is a time consuming task
//   users.forEach(user => {
//     const item = document.createElement("p");
//     item.innerText = user;
//     item.className = "item"

//     container.appendChild(item);
//   });
// }

// state: State is changable data assigned to a peice of UI (Component)