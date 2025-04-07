import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"

function ExpandedPrct () {
    const [project, setProject ] = useState({})
    const { id } = useParams()
    const singleProjectAPI = `http://localhost:7000/project/${id}/`
    const navigate = useNavigate()

    const fetchProject = useCallback(async () => {

        let response = await fetch(singleProjectAPI, {
            headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        response = await response.json()
        setProject(response)
        console.log("Fetched project:", response);

    },[singleProjectAPI])// removed singleProjectAPI from the dependency array

    useEffect(() => {
        fetchProject()
    }, [fetchProject])

    const handleDelete = (e) => {
        e.preventDefault()
        fetch(singleProjectAPI, {
            method: 'DELETE'
        }).then((res) => {
            res.json().then((response) => {
                console.log(response)
            })
        })
        navigate('/User/userProjects')
    }
    
   console.log(project)

    return(
        <div>
            <h1 className="text-red-700">{project.projectName}</h1>
        </div>
    )
}

export default ExpandedPrct