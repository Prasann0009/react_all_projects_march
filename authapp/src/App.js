import { createContext, lazy, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoadingWrapper } from "./components/LoadingWrapper";
import useNotification from "antd/es/notification/useNotification";
import { Provider } from "react-redux";
import store from "./redux";
const Signup = lazy(() => import("./routes/Signup"));
const Login = lazy(() => import("./routes/Login"));
const Home = lazy(() => import("./routes/home/Home"));
const Posts = lazy(() => import("./routes/posts/index"));

export const LoginContext = createContext();

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(() => {
    return Boolean(localStorage.getItem("token"));
  });

  const contextHolder = useNotification()[1]

  return (
    <Provider store={store}>
      <LoginContext.Provider value={{ setIsUserLoggedIn }} >
        <div className="App">
          {contextHolder}
          <BrowserRouter>
            <Routes>
              {isUserLoggedIn ?
                <>
                  <Route path="home" element={<LoadingWrapper Component={Home} />} />
                  <Route path="post" element={<LoadingWrapper Component={Posts} />} />
                </>
                : <>
                  <Route path="login" element={<LoadingWrapper Component={Login} />} />
                  <Route path="signup" element={<LoadingWrapper Component={Signup} />} />
                </>
              }
              <Route path="*" element={<h2>Page Not Found</h2>} />
            </Routes>
          </BrowserRouter>
        </div>
      </LoginContext.Provider>
    </Provider>
  );
}

export default App;
