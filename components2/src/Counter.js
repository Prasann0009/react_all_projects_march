import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    incrementCount = () => {
        // this => instance of Counter Component
        const curr = this.state.count;
        this.setState({ count: 1 + curr })
    }

    render() {

        return (
            <>
                <p>Button clicked for {this.state.count} times</p>
                <button onClick={this.incrementCount}>Click Me</button>
            </>
        )
    }
}

export default Counter;