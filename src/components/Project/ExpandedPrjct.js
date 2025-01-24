import React from "react";
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom"

function ExpandedPrct () {
    const [project, setProject ] = useState({})
    const { id } = useParams()
    const singleProjectAPI = `http://localhost:7000/project/${id}`
    const navigate = useNavigate()

    useEffect(() => {
        fetch(singleProjectAPI)
            .then((res) => res.json())
            .then((project) => setProject(project))
    }, [id, singleProjectAPI]) // Not sure if singleProjectAPI should be there, still need to figure it out. Only reason its there is to remove the warning in console

    const handleDelete = (e) => {
        e.preventDefault()
        fetch(singleProjectAPI, {
            method: 'DELETE'
        }).then((res) => {
            res.json().then((response) => {
                console.log(response)
            })
        })
        navigate('/')
    }
    
    return (
        <div>
            <div>
                <h1>{project.projectName}</h1>
                <h3>{project.dueDate}</h3>
                <h3>this is the project you created</h3>
                
            </div>
            
            <Link className="text-gray-700 transition mt-2 ease-in-out delay-150 hover:text-white hover:bg-lime-800 rounded p-1 font-semibold" to="/">Go Back</Link>
            <form onSubmit={handleDelete}>
                <button type="submit" value="DELETE">DELETE</button>
            </form>
        </div>
    )
}

export default ExpandedPrct