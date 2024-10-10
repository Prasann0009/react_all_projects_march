import { Component } from "react";

// whenever we want to make an update in the UI => we need to trigger a re render ( re execution of render method)
// Component life cycle methods: 
// Heavy tasks should not be executed during the render of a component as it blocks the return statement.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 10 };
  }

  updateCount = () => {
    // Danger: Don't do the direct manipulation on the state of a component
    // this.state.count = this.state.count + 1;

    // State mutation should be done with the setState method provided by Compponent class
    // setState(arg) => arg can be an object or can be a function
    // this.setState({ count: this.state.count + 1 });
    this.setState(function (prev) {
      console.log("previous state", prev);
      return { count: prev.count + 1 }
    });
  }

  render() {
    console.log("rendered");

    // 2s
    // bigDataProcessingLogic();
    // 3s
    // networkCall();

    return (
      <>
        <button onClick={this.updateCount}>Update count</button>
        <h1>Count: {this.state.count}</h1>
      </>
    );
  }

  componentDidMount() {
    // this method gets executed only once after component gets mounted
    // this method gets executed only one time in the life cycle of the component as a component can be mounted only once during it's life cycle
    console.log("component mounted");
  }

  componentDidUpdate() {
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("component is unmounted");
  }

}

export default App;