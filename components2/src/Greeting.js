import { Component } from "react";

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
    }

    onchangeText = (event) => {
        const newValue = event.target.value;
        this.setState({ value: newValue });
    }

    render() {
        return (
            <div>
                <label htmlFor="input">Enter your name:</label>
                <input id="input" value={this.state.value} onChange={this.onchangeText} />
                {this.state.value ? <p>Hello {this.state.value}</p> : null}
            </div>
        );
    }
}

export default Greeting;