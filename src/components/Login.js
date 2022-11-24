import React from "react";
import { Link } from "react-router-dom";

function Login () {
    return (
        <div className="login">
            <div className="login-container">
                <form>
                <label htmlFor="username">Username</label>
                    <br/>
                    <input className="form-input" type='text' name='username' required></input>

                    <br/>

                    <label htmlFor="password">Password</label>
                    <br/>
                    <input className="form-input" type='password' name='password' required></input>

                    <br/>

                    <button type="submit">Login</button>
                </form>

                <p>If you don't have an account, please <Link to={"/signup"}>Sign-Up</Link> to begin tracking your projects.</p>
            </div>
        </div>
    )
}

export default Login