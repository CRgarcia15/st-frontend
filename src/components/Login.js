import React from "react";
import { Link } from "react-router-dom";

function Login () {
    //create functionality for loging in
    return (
        <div className="login">
            <div className="login-container">
                <form className="grid grid-rows-8 font-bold space-y-2">
                    <div className="mt-5 content-auto">
                        <label className="text-lg" htmlFor="username">Username</label>
                        <br/>
                        <input className="w-1/2 text-sm font-semibold border border-lime-800 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-green-600" type='text' name='username' required></input>
                    </div>
                   
                    <div>
                        <label className="text-lg" htmlFor="password">Password</label>
                         <br/>
                         <input className="w-1/2 text-sm font-semibold border border-lime-800 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-green-600" type='password' name='password' required></input>
                    </div>

                    <button className="border-2 rounded hover:bg-lime-800 hover:text-white m-auto p-2 px-6" type="submit">Login</button>

                </form>

                <p className="font-bold mt-2">If you don't have an account, please <Link className="text-lime-600 hover:text-lime-800" to={"/signup"}>Sign-Up</Link> to begin tracking your projects.</p>
            </div>
        </div>
    )
}

export default Login