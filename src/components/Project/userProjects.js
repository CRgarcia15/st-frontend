import React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

/* have a button to create new projects 
have the user name show up as *weclome "logged in user"*
make it fill the page porperly with a modern look
show projects*/

function UserProjects () {
    const [ projects, setProjects ] = useState([]);

    useEffect((projects) => {
      const projectViewsAPI = 'http://localhost:7000/project/'

      fetch(projectViewsAPI, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
        .then((res) => res.json())
        .then((projects) => setProjects(projects))
        console.log(projects)
        console.log("making a fetch for user Projects")
    }, [])

    return(
      <div className="userProjects">
                <div>
                  <div className="pt-8 rounded-2xl bg-white w-11/12 mx-auto mt-5 drop-shadow-lg shadow-inner">
                    <h1 className="text-left font-bold border-b-4 border-lime-700">Your Current Projects</h1>
                    <div className="flex flex-wrap -mb-4">
                          {projects.map((projects, index) => {
                            console.log(projects)
                            return <div className="transition ease-in-out delay-50 hover:bg-lime-700 w-64 px-4 mx-4 my-4 rounded-2xl p-4" key={index}>
                                      <Link to={`/project/${projects._id}`}>
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
};

export default UserProjects

