
/**
 * Mounting Phase: 
 * constructor
 * render
 * componentDidMount => (after mounting)
 * 
 * Updating Phase: 
 * render
 * componentDidUpdate => (after updating)
 * 
 * Unmounting Phase:
 * componentWillUnMount
 */

import { useEffect, useState } from "react";

// import { Component } from "react";

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { time: 0 };
//         this.timerId = null;
//     }

//     render() {
//         if (this.timerId !== null && this.state.time === 30) {
//             clearInterval(this.timerId);
//             this.timerId = null;
//         }
//         return <h1>{this.state.time} s</h1>
//     }

//     componentDidMount() {
//         this.timerId = setInterval(() => {
//             this.setState({ time: this.state.time + 1 });
//         }, 1000)
//     }
// }


// function useCustomHook() {
//     const [state, setState] = useState(10);
//     return [state, setState];
// }
// useEffect extactly mimics the behaviour of componentDidUpdate , componentDidMount and componentWillUnMount 

// useEffect => two arguments
// 1. function 
// 2. dependency array of any elements


function App() {
    const [count, setCount] = useState(0); // 1

    useEffect(function () {
        console.log("component mounted");
    }, [count]);

    return (
        <>
            <h1>Introduction to useEffect</h1>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Update Count</button>
        </>
    );
}
// Scenario 2:
// during the first render: dependency Array : [ 0 ]
// during the second render: dependency Array: [ 1 ]
// during the third render : dependency array: [ 2 ]
// since the value inside the dependency array is changed the callback will be executed upon component update (componentDidUpdate)



// Scenario 1: 
// during first render: dependency Array: [ ] 
// during the second render: dependency Array:  [ ]

// If there's no change in the dependency array , then the callback passed to the useEffect will not be executed upon component's update. ( componentDidMount )


export default App;