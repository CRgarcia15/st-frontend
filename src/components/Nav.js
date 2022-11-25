import React from "react";
import { Link } from "react-router-dom";

function Nav () {
    return (
        <div className="bg-gray-100 flex w=screen h-28 px-10">
            <div className="w-full flow-root h-1/8 flex items-start text-lg text-center pt-10 border-b-2 border-lime-800">
                <Link to="/" className="text-7xl font-bold hover:text-lime-900">SprintTrack</Link>
                    <ul className="flex">
                        <li className="float-right">
                            <Link to="/login" className="text-gray-700 transition ease-in-out delay-150 hover:text-white hover:bg-lime-800 rounded p-1 font-semibold">Login</Link>
                        </li>
                    </ul>
            </div>
            
        </div>
    )
}

export default Nav