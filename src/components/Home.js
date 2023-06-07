import React from "react";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

// You got to add the token to the header with "bearer" in it to use the validation. 
function Home () {
  const [ projects, setProjects ] = useState([])

  useEffect(() => {
    const projectViewsAPI = 'http://localhost:7000/projects'

    fetch(projectViewsAPI)
      .then((res) => res.json())
      .then((projects) => setProjects(projects))
    
    console.log("making a fecth")
  }, [])
  
    return (
      <div className="home">
        <div>
          <h3 className="pt-2">Where you can keep track of any project you can come up with.</h3>
          <div className="pt-8 rounded-2xl bg-white w-11/12 mx-auto mt-5 drop-shadow-lg shadow-inner">
            <h1 className="text-left font-bold border-b-4 border-lime-700">Your Current Projects</h1>
            <div className="flex flex-wrap -mb-4">
                  {projects.map((projects, index) => {
                    return <div className="transition ease-in-out delay-50 hover:bg-lime-700 w-64 px-4 mx-4 my-4 rounded-2xl p-4" key={index}>
                              <Link to={`/projects/${projects._id}`}>
                                <ul>
                                  <li className="text-6xl font-semibold">{projects.projectName}</li>
                                  <li className="my-2"><strong>Due Date:</strong>{projects.dueDate}</li>
                                </ul>
                                <p className="">Click here to see your assingments</p>
                              </Link>
                            </div>
                  })}
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home