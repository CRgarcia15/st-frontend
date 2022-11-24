import React from "react";
import { Link } from "react-router-dom";

function Home () {
    return (
      <div className="home">
        <div>
          <h1 className='text-orange-700'>Welcome to SprintTrack</h1>
          <h3>Where you can keep track of any project you can come up with.</h3>

          <p>If you have an account with us please login. If you don't have an account with us, please make one to start tracking your projects.</p>
          <Link to="/login" className="loginRedirect">login</Link>
          <Link to="/signup" className="signUpRedirect">Sing up</Link>
        </div>
      </div>
    )
}

export default Home