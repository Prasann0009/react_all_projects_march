export const Navbar = ({ navBarTitle, description }) => {

    return (
        <>
            <nav>{navBarTitle}</nav>
            <p>{description}</p>
            <span>Static value</span>
        </>
    );
}

// function callme({ name, age }) {
//     console.log(name, age);
// }

// callme({ name: "aravind", age: 22 })