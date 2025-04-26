import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {                                         //got to fix the styling, page is currently working as expected

    const navigate = useNavigate() 

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch(`http://localhost:7000/user/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })

        const data = await response.json()

        if(response.status === 200) {
            localStorage.setItem('token', data)
            navigate('/User/userProjects')
        } else {
            setErrorMessage(data.message)
        }
        
    }
    
    return (
        <main>
            {errorMessage !== null
                ?(
                    <div className="alert alert-danger text-red-600 background-orange" role="alert">
                        {errorMessage}
                    </div>
                )
                :null
            }
            <div className="login-form">
                <div className="form-container">
                    <form onSubmit={handleSubmit} className="">

                    <div>
                        <label className="text-lg" htmlFor="username">Username</label>
                        <br/>
                        <input className="w-1/2 text-sm font-semibold border border-lime-800 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-green-600" 
                        style={{ textAlign: 'center' }} 
                        type='username' 
                        name='username' 
                        id="username"
                        required value={credentials.username} 
                        onChange={e => setCredentials({ ...credentials, username: e.target.value })}></input>
                    </div>

                    <div>
                        <label className="text-lg" htmlFor="password">Password</label>
                        <br/>
                        <input className="w-1/2 text-sm font-semibold border border-lime-800 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-green-600" 
                        style={{ textAlign: 'center' }} 
                        type='password' 
                        name='password' 
                        required value={credentials.password} 
                        onChange={e => setCredentials({...credentials, password: e.target.value})}></input>
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
        </main>
        
    )
}

export default Login