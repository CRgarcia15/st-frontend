import React from "react";
import { Link } from "react-router-dom"


function Nav () {
    return (
        <div className="navigation">
            <Link to="/" className="site-title">SprintTrack</Link>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav