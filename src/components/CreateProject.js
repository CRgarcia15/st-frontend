import React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

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
        <div className="bg-zinc-400">
            <form onSubmit={handlesubmit}>
                <label htmlFor="ProjectName">Project Name</label>
                <br/>
                <input name="projectName" id="projectName" type="text" className="form-control" required value={projectName} onChange={e => setProjectName(e.target.value)}></input>

                <br/>

                <label htmlFor="dueDate">Due Date</label>
                <br/>
                <input name="dueDate" id="dueDate" type="text" className="form-control" placeholder="YYYY/MM/DD" value={dueDate} onChange={e => setDueDate(e.target.value)}></input>

                <br/>

                <label htmlFor="assignments">Assingments</label>
                <br/>
                <textarea name="assignments" id="assingments" type="text" className="w-1/2 text-sm font-semibold border border-zinc-400 px-3 py-2 rounded-lg shadow-sm mx-auto focus:outline-none focus:border-amber-600" required value={assingments} onChange={e => setAssingments(e.target.value)}></textarea>

                <br/>

                <button className="text-zinc-700 font-semibold ring-2 ring-zinc-700 rounded p-2 ml-2 px-4 transition ease-in-out delay-100 hover:bg-zinc-400/50 duration-300" type="submit">Create</button>
                <Link to='/'>Return Home</Link>
            </form>
        </div>
    )
}

export default CreateProject