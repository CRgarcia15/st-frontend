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
        console.log('New Project Added')
        })
        navigate('/')
    }; 
    

    return (
        <div className="signup-form">
            <div className="form-container">
                <form onSubmit={handlesubmit}>
                    <label htmlFor="name">Full name</label>
                    <br/>
                    <input className="form-input" type='text' name='name' required value={name} onChange={e => setName(e.target.value)}></input>

                    <br/>
                    
                    <label htmlFor="username">Username</label>
                    <br/>
                    <input className="form-input" type='text' name='username' required value={username} onChange={e => setUsername(e.target.value)}></input>

                    <br/>

                    <label htmlFor="password">Password</label>
                    <br/>
                    <input className="form-input" type='password' name='password' required value={password} onChange={e => setPassword(e.target.value)}></input>

                    <br/>

                    <button className="form-submit" type="submit">Sing-up</button>
                    <Link to='/'>Return Home</Link>
                </form>

                
            </div>
            
        </div>
    )
}

export default Signup