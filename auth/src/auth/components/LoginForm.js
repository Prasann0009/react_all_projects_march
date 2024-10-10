import axios from "axios";
import { useState } from "react";

export const LoginForm = ({ setIsLoggedIn }) => {
    const [loading, setLoading] = useState(false);

    const login = async (event) => {
        event.preventDefault();
        const formData = {
            email: event.target.email.value,
            password: event.target.password.value
        }
        setLoading(true);
        try {
            const response = await axios({
                url: "https://node-auth-jwt-w78c.onrender.com/login",
                method: "POST",
                data: formData
            });
            localStorage.setItem("token", response.data.token) // {token: ""}
            setIsLoggedIn(true);
        }
        catch (err) {
            alert(err.response.data.message);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <form onSubmit={login}>
                <input type="email" placeholder="Email" name="email" required />
                <input placeholder="Password" name="password" required />
                <button disabled={loading}>Login</button>
            </form>
        </div>
    );
}
