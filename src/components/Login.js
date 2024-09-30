import { React, useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Login () {

    const history = useNavigate()

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState(null)/

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch(`http://localhost:7000/user/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })

        const data = await response.json()

        if (response.status === 200) {
            history.push('project/') //still not sure this will work, as the update changed the way it works
        } else {
            setErrorMessage(data.message)
        }
    }

    return (
        <main>
            <div className="login-container">
                <form className="grid grid-rows-8 font-bold space-y-2" onSubmit={handleSubmit}>
                    <div className="mt-5 content-auto">
                        <label className="text-lg" htmlFor="username">Username</label>
                        <br/>
                        <input className="w-1/2 text-sm font-semibold border border-lime-800 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-green-600" 
                        type='text' 
                        name='username' 
                        required
                        value={credentials.username}
                        onChange={e => setCredentials({ ...credentials, username: e.target.value})}
                        ></input>
                    </div>
                   
                    <div>
                        <label className="text-lg" htmlFor="password">Password</label>
                    <br/>
                        <input className="w-1/2 text-sm font-semibold border border-lime-800 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-green-600" 
                        type='password' 
                        name='password' 
                        required
                        value={credentials.password}
                        onChange={e => setCredentials({ ...credentials, password: e.target.value})}
                        ></input>
                    </div>

                    <div>
                        <button className="border-2 rounded-full hover:bg-lime-800 hover:text-white m-auto py-2.5 px-6 mr-5" type="submit">Login</button>
                        <Link className="text-lime-600 hover:text-lime-800" to='/'>Cancel</Link>
                    </div>
                </form>

                <p className="font-bold mt-2">If you don't have an account, please <Link className="text-lime-600 hover:text-lime-800" to={"/signup"}>Sign-Up</Link> to begin tracking your projects.</p>
            </div>
        </main>
        
    )
}

export default Login