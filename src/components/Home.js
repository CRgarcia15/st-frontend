import React from "react";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { LoremIpsum } from 'react-lorem-ipsum'

function Home () {
  const [ projects, setProjects ] = useState([])

  useEffect(() => {
    const projectViewsAPI = 'http://localhost:7000/projects'
    fetch(projectViewsAPI)
      .then((res) => res.json())
      .then((Projects) => setProjects(Projects))
  }, [])
  
    return (
      <div className="home">
        <div>
          <h3 className="pt-2">Where you can keep track of any project you can come up with.</h3>
          <div className="pt-8 rounded-2xl bg-white w-11/12 mx-auto mt-5 drop-shadow-lg shadow-inner">
            <h1 className="text-left font-bold border-b-4 border-lime-700">Your Current Projects</h1>
            {projects.map((projects, index) => {
              return <div>
                        <Link to={`/projects/${projects._id}`}>
                          <ul>
                            <li className="text-6xl font-semibold">{projects.projectName}</li>
                            <li><strong>Due Date:</strong>{projects.dueDate}</li>
                          </ul>
                          <p>Click here to see your assingments</p>
                        </Link>
                      </div>
            })}
              <LoremIpsum p={2} />
          </div>
        </div>
      </div>
    )
}

export default Home