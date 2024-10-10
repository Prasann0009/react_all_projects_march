/**
 * sass, material-icons
 * 
 * why do we need key attribute in teration ?
 */

// If the list is a read only data then we can give indices as keys
// But it's changable list then better we give keys based on each individual data item
const users = [
  { id: 2839, name: "aravind" },
  { id: 388, name: "rajesh" },
  { id: 3292, name: "akhil" },
  { id: 3838, name: "Nithish" }
]

function App() {
  return (
    <div className="App">
      {
        users.map((user) => <p key={user.id}>{user.name}</p>)
      }
    </div>
  );
}

export default App;
