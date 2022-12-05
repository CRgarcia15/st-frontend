import React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
//add styling to it 
function CreateProject () {
    const [ projectName, setProjectName ] = useState('')
    const [ dueDate, setDueDate ] = useState('')
    const [ assingments, setAssingments ] = useState('')
    const navigate = useNavigate()

    function handlesubmit (e) {
        e.preventDefault()
        const project = { projectName, dueDate, assingments }

        fetch('http://localhost:7000/projects', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(project)
         }).then(() => {
        console.log('New Project Added')
        })
        navigate('/')
    }

    return (
        <div className="bg-gray-100">
            <form onSubmit={handlesubmit}>
                <label htmlFor="ProjectName">Project Name</label>
                <br/>
                <input name="projectName" id="projectName" type="text" className="w-1/2 text-sm font-semibold border border-lime-800 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-green-600" required value={projectName} onChange={e => setProjectName(e.target.value)}></input>

                <br/>

                <label htmlFor="dueDate">Due Date</label>
                <br/>
                <input name="dueDate" id="dueDate" type="text" className="w-1/2 text-sm font-semibold border border-lime-800 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-green-600" placeholder="YYYY/MM/DD" value={dueDate} onChange={e => setDueDate(e.target.value)}></input>

                <br/>

                <label htmlFor="assignments">Assingments</label>
                <br/>
                <textarea name="assignments" id="assingments" type="text" className="w-1/2 text-sm font-semibold border border-lime-800 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-green-600" required value={assingments} onChange={e => setAssingments(e.target.value)}></textarea>

                <br/>

                <button className="border-2 rounded-full hover:bg-lime-800 hover:text-white m-auto py-2.5 px-6 mr-5" type="submit">Create</button>
                
                <Link to='/' className="text-gray-700 transition ease-in-out p-2 m-2 delay-150 hover:text-white hover:bg-lime-800 rounded p-1 font-semibold py-2">Return Home</Link>
            </form>
        </div>
    )
}

export default CreateProject