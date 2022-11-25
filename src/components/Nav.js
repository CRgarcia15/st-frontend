import React from "react";
import { Link } from "react-router-dom";

function Nav () {
    return (
        <div className="bg-gray-100 flex w=screen h-28 px-10">
            <div className="w-full flow-root h-1/8 flex items-start text-lg text-center pt-10 border-b-2 border-amber-700">
                <Link to="/" className="text-7xl">SprintTrack</Link>
                    <ul className="flex">
                        <li className="float-right">
                            <Link to="/login" className="text-gray-500 hover:text-gray-800">Login</Link>
                        </li>
                    </ul>
            </div>
            
        </div>
    )
}

export default Nav