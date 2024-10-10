import { useState } from "react";
import { LoginForm } from "./components/LoginForm";
import { SignupForm } from "./components/SignupForm";
import { UserDetails } from "./components/UserDetails"

const formType = {
    LOGIN: "LOGIN",
    SIGNUP: "SIGNUP"
}

export const AuthApp = () => {
    const [form, setForm] = useState(formType.SIGNUP);
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return Boolean(localStorage.getItem("token"));
    });

    const switchForm = () => {
        setForm(prev => prev === formType.LOGIN ? formType.SIGNUP : formType.LOGIN);
    }

    return (
        <div>
            {
                !isLoggedIn ?
                    <>
                        <button onClick={switchForm}>Switch Form</button>
                        {form === formType.SIGNUP && <SignupForm />}
                        {form === formType.LOGIN && <LoginForm setIsLoggedIn={setIsLoggedIn} />}
                    </>
                    :
                    <UserDetails setIsLoggedIn={setIsLoggedIn} />
            }
            {/* <UserDetails /> */}
        </div>
    );
}