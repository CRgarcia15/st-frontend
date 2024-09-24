import { React, useEffect, useContext, useState } from "react";
import { username } from "react-lorem-ipsum";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Login () {

    const history = useNavigate()

    const { setCurrentUser } = useContext(currentUser)

    cosnt [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState(null)

    /*useEffect(() => {
        const userLoginAPI = 'http://localhost:7000/user/login'
    
        fetch(userLoginAPI)
          .then((res) => res.json())
           
        console.log("making a fecth")
      }, [])*/

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
            setCurrentUser(data.user)
            history.push('/') //still not sure this will work, as the update changed the way it works
            // also check the what is the correct route
        } else {
            setErrorMessage(data.message)
        }
      }

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

                    <div>
                        <button className="border-2 rounded-full hover:bg-lime-800 hover:text-white m-auto py-2.5 px-6 mr-5" type="submit">Login</button>
                        <Link className="text-lime-600 hover:text-lime-800" to='/'>Cancel</Link>
                    </div>
                </form>

                <p className="font-bold mt-2">If you don't have an account, please <Link className="text-lime-600 hover:text-lime-800" to={"/signup"}>Sign-Up</Link> to begin tracking your projects.</p>
            </div>
        </div>
    )
}

export default Login