import React from "react";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function Home () {
  const [ project, setproject ] = useState([])

  useEffect(() => {
    const projectViewsAPI = 'http://localhost:7000/projects'
    fetch(projectViewsAPI)
      .then((res) => res.json())
      .then((project) => setproject(project))
  }, [])
  
    return (
      <div className="home">
        <div>
          <h3 className="pt-2">Where you can keep track of any project you can come up with.</h3>
          <div className="pt-8 rounded bg-white w-3/4 mx-auto">
            <h1>I</h1>
          </div>
          
        </div>
      </div>
    )
}

export default Home