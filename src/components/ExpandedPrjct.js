import React from "react";
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom"

function ExpandedPrct () {
    const [project, setProject ] = useState({})
    const { id } = useParams()
    const singlePRojectAPI = `http://localhost:7000/projects/${id}`
    const navigate = useNavigate()

    useEffect(() => {
        fetch(singlePRojectAPI)
            .then((res) => res.json())
            .then((project) => setProject(project))
    }, [id])

    const handleDelete = (e) => {
        e.preventDefault()
        fetch(singlePRojectAPI, {
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
            <h1>Coming soon...</h1>

            <Link className="text-gray-700 transition mt-2 ease-in-out delay-150 hover:text-white hover:bg-lime-800 rounded p-1 font-semibold" to="/">Go Back</Link>
        </div>
    )
}

export default ExpandedPrct