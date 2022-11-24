import React from "react";

function Home () {
    return (
        <div className="home">
      <div>
        <h1 className='welcome-msg'>Welcome to SprintTrack</h1>
        <h3>Where you can keep track of any project you can come up with.</h3>

        <p>If you have an account with us please login. If you don't have an account with us, please make one to start tracking your projects.</p>
        <a href="/login" className="loginRedirect">login</a>
        <a href="/signup" className="signUpRedirect">Sing up</a>
      </div>
      
    </div>
    )
}

export default Home