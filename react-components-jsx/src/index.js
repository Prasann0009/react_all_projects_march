import React from 'react';
import ReactDOM from 'react-dom/client';
import Product from "./product";
import { Navbar } from './navabar';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const heading = React.createElement("h1", { id: "test" }, "Hello React");
// babel

// JSX => Javascript XML
// we can bind the variables inside jsx by using {} notation
// const name = "Hello Aravind";

// const props = { id: "test", className: "abc" };

// const heading = <h1 {...props}>{2 + 3}</h1>

// const names = ["Pravin", "Suman", "Harry", "Rajesh", "Akhil", "Harry2"];
// // const paras = names.map(name => {
// //   return <p>{name}</p>
// // })

// const div = (
//   <>
//     {
//       names.map(name => {
//         return <p>{name}</p>
//       })
//     }
//   </>
// );

const navBarTitle = "Rajesh";

root.render(
  <>
    <h1>kiddod</h1>
    {/* {navbar(navBarTitle, "Some description")} */}
    <Navbar navBarTitle={navBarTitle} description={"Some description"} />
    <Navbar navBarTitle={"Title2"} description={"Some description 2"} />

    {/* {product()} */}
    <Product
      title="Ultimate Rolling"
      imageUrl="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/478728a.jpg?ts=1690814280"
      price={90}
    />
    <Product
      title="Brown Rolling Paper Cones - Stash Pro"
      imageUrl="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/496996a.jpg?ts=1690814374"
      price={100}
    />
  </>
);

{/* <Navbar navBarTitle={navBarTitle} description={"Some description"}  /> => 
Navbar({
  navBarTitle: "Rajesh",
  description: "Some description"
 }); */}

// navbar(navBarTitle, "Some description") => <navbar navBarTitle={} description={} />

// <sjjdd abc="dkkd">djjd</sjjdd>

// {user: "aravind", age: 23, address: { city: "Hyderabad"}}
/*
  <user>aravind</user>
  <age>23</age>
  <address>
    <city>Hyderabad</city>
  </address>
*/


/** 
 * Component: 
 * 
 * A component in react is a javascript function (ideally) which can take props (arguments) and returns a computed JSX.
 * A component represents a small chunk of UI.
 * 
 * */