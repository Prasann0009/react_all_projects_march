import React from "react";
import ReactDOM from "react-dom"
// React, ReactDOM

const root = document.getElementById("app");

const h1 = <h1 id="test" className="test2u28">Hello React</h1>
// React.createElement("h1", { id: "test" }, "Hello React");

ReactDOM.render(h1, root);