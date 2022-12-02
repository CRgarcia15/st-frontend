import React from "react";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Signup () {
    const [ name, setName ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const navigate = useNavigate()

    function handlesubmit (e) {
        e.preventDefault()
        const user = { name, username, password }

        fetch('http://localhost:7000/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
         }).then(() => {
        console.log('New user created')
        })
        navigate('/')
    }; 
    

    return (
        <div className="signup-form">
            <div className="form-container">
                <form onSubmit={handlesubmit} className="grid grid-rows-8 font-bold space-y-2">

                    <div className="mt-5 content-auto">
                        <label classname="text-lg" htmlFor="name">Full name</label>
                        <br/>
                        <input className="w-1/2 text-sm font-semibold border border-lime-800 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-green-600" type='text' name='name' required value={name} onChange={e => setName(e.target.value)}></input>
                    </div>

                    <div>
                        <label classname="text-lg" htmlFor="username">Username</label>
                        <br/>
                        <input className="w-1/2 text-sm font-semibold border border-lime-800 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-green-600" type='text' name='username' required value={username} onChange={e => setUsername(e.target.value)}></input>
                    </div>
                    
                    <div>
                        <label className="text-lg" htmlFor="password">Password</label>
                        <br/>
                        <input className="w-1/2 text-sm font-semibold border border-lime-800 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-green-600" type='password' name='password' required value={password} onChange={e => setPassword(e.target.value)}></input>
                    </div>

                    <div>
                         <button className="border-2 rounded-full hover:bg-lime-800 hover:text-white py-2.5 px-6 mr-10" type="submit">Sing-up</button>
                        <Link className="text-lime-600 hover:text-lime-800" to='/'>Cancel</Link>
                    </div>
                   
                </form>

                
            </div>
            
        </div>
    )
}

export default Signup