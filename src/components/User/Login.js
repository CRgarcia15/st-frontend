import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login () {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const navigate = useNavigate()

    function handlesubmit (e) {
        e.preventDefault()
        const user = { username, password }
        try {
            fetch('http://localhost:7000/user/login', {
                        method: 'POST',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(user)
                }).then(() => {
                    console.log('User has logged in')
                })
            navigate('/')
        }catch(error) {
            console.log(error)
        }
    };

    return (
        <div className="login-form">
            <div className="form-container">
                <form onSubmit={handlesubmit} className="">

                    <div>
                        <label className="text-lg" htmlFor="username">Username</label>
                        <br/>
                        <input className="w-1/2 text-sm font-semibold border border-lime-800 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-green-600" type='text' name='username' required value={username} onChange={e => setUsername(e.target.value)}></input>
                    </div>

                    <div>
                        <label className="text-lg" htmlFor="password">Password</label>
                        <br/>
                        <input className="w-1/2 text-sm font-semibold border border-lime-800 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-green-600" type='text' name='password' required value={password} onChange={e => setPassword(e.target.value)}></input>
                    </div>

                    <div>
                        <button className="border-2 rounded-full hover:bg-lime-800 hover:text-white py-2.5 px-6 mr-10" type="submit">Login</button>
                        <Link className="text-lime-600 hover:text-lime-800" to='/'>Cancel</Link>
                    </div>

                </form>

                <div>
                    <h4 className="font-bold mt-2">If you don't have an account, please <Link className="text-lime-600 hover:text-lime-800" to={"/signup"}>Sign-Up</Link> to begin tracking your projects.</h4>
                </div>
                
            </div>
        </div>
    )
}

export default Login