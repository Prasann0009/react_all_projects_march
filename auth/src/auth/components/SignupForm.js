import axios from "axios";
import { useState } from "react";

export const SignupForm = () => {
    const [loading, setLoading] = useState(false);

    const signup = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = {
            email: form.email.value,
            name: form.name.value,
            gender: form.gender.value,
            password: form.password.value,
            city: form.city.value
        };
        setLoading(true);
        axios({
            url: "https://node-auth-jwt-w78c.onrender.com/signup",
            method: "POST",
            data: formData
        })
            .then(response => {
                console.log(response);
                setLoading(false);
            })
            .catch(err => {
                console.log("Some error", err);
                setLoading(false);
            })
    }

    return (
        <div>
            <form onSubmit={signup} style={{ width: "300px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <input placeholder="Email" name="email" required />
                <input placeholder="Name" name="name" required />
                <div>
                    <p>Geneder</p>
                    <input required type="radio" name="gender" id="male" value="MALE" />
                    <label htmlFor="male">Male</label>

                    <input required type="radio" name="gender" id="female" value="FEMALE" />
                    <label htmlFor="female">Female</label>

                    <input required type="radio" name="gender" id="others" value="OTHERS" />
                    <label htmlFor="others">Others</label>
                </div>
                <input type="password" placeholder="Password" name="password" required />
                <input placeholder="City" name="city" required />
                <button disabled={loading} type="submit">Signup</button>
            </form>
        </div>
    );
};