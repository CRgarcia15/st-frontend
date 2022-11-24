import React from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup () {
    const [ name, setName ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const navigate = useNavigate()

    async function handlesubmit (e) {
        e.preventDefault()
        const user = { name, username, password }

      await fetch('http://localhost:7000/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
         }).then(() => {
        console.log('New Project Added')
        })
        navigate('/UserHome')
      }; 
    

    return (
        <div className="signup-form">
            <div className="signup-container">
                <form onSubmit={handlesubmit}>
                    <label htmlFor="name">Full name</label>
                    <br/>
                    <input className="form-input" type='text' name='name' required onChange={e => setName(e.target.value)}></input>

                    <br/>
                    
                    <label htmlFor="username">Username</label>
                    <br/>
                    <input className="form-input" type='text' name='username' required onChange={e => setUsername(e.target.value)}></input>

                    <br/>

                    <label htmlFor="password">Password</label>
                    <br/>
                    <input className="form-input" type='password' name='password' required onChange={e => setPassword(e.target.value)}></input>

                    <br/>

                    <button className="form-submit" type="submit">Sing-up</button>
                </form>
            </div>
            
        </div>
    )
}

export default Signup