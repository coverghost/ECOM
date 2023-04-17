import React, { useEffect, useState } from "react";
import Head from "./header";
import BASE_URL from "../api/endurls";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    const HandleSubmit = (event: any) => {
        event.preventDefault();

        // Your login/signup logic goes here
        // console.log(`Username: ${username}, Password: ${password}, Is Login: ${isLogin}`);

        const data = { name: username, password: password }
        const LOGIN_URL = `${BASE_URL}/login`;

        fetch(LOGIN_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => {
                console.log("SENT SUCCESSFULLL")
                if (response.ok) {
                    console.log("success line 27")
                    return response.json();
                  } else {
                    throw new Error('Network response was not ok.');
                  }
                // Handle response
            })
            .then(data => {
                // Handle success response here
                setIsLogin(data.message)
              })
            .catch(error => {
                // Handle error
                console.log("error--------->>>>", error)
            });

    };




    return (
        <>
            <div>
            <Head isLogin={isLogin} username={username} onLogout={false} />
            </div>
            <form onSubmit={HandleSubmit}>
                <h1>{isLogin ? "Login" : "Sign Up"}</h1>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </label>
                <button type="submit">{isLogin ? "Sign Up" : "Login"}</button>
                <p>{isLogin ? "Don't have an account?" : "Already have an account?"} <a href="#">{isLogin ? "Login" : "Sign up"}</a></p>
            </form>
        </>
    );
}

export default LoginForm;
