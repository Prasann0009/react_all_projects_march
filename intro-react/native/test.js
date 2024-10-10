
// Creation of h1 using vanilla js
const root = document.getElementById("root");
// h1 => Html element
// const h1 = document.createElement("h1");
// h1.innerText = "Hello World";
// root.appendChild(h1);

// attributes => props => properties
// h1 => not an html element => React element
// const h1 = React.createElement("h1", null, "Hello React");
// root.append(h1); since h1 is not an HTML element we cann't append it directly

// ReactDOM is a medium between React core library and document API

// render(reactElement, HTML Element)
// ReactDOM.render(h1, root);


/**
 * <div class="card">
 *      <p>Para text</p>
 *      <b id="bold">Bold text</b>
 * <div>
 */
// createElement(tagName, props, ...children)
// const bold = React.createElement("b", { id: "bold" }, "Bold text");
const para = React.createElement("p", null, "Para text");
const para1 = <p>Para text</p>
// const card = React.createElement("div", { className: "card" }, para, bold);

// const card = <div class="card">
//     <p>Para text</p>
//     <b id="bold">Bold text</b>
//     <div>

ReactDOM.render(card, root);