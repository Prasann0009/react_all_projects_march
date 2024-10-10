import { Provider } from "react-redux";
import { NavBar } from "./components/navbar";
import HomeScreen from "./screens/home";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <HomeScreen />
    </Provider>
  );
}

export default App;
