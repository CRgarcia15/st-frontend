import React from "react";

function Home () {

    return (
      <div className="w-1/2 text-sm border rounded-lg shadow-md mx-auto focus:outline-none focus:border-green-600 text-7xl grid h-56 grid-cols-2 content-stretch gap-6 md:content-around">
        <div className="border-2 border-black rounded-md">
            <h3 className="text-lg font-bold ">"Order is the foundation upon which great things are built."</h3>
            <p className="text-base"> SprintTrack was created with the purpose of helping those with a busy schedule organize their
                agenda in a modern and effective way.
            </p>
            <p className="text-base font-semibold">Let's start creating a new horizon together </p>
            <button className="text-lg font-bold border-2 border-black rounded-md">Sign-up</button>
        </div>
        <div className="border-2 border-black rounded-md"> 
          <h3 className="text-base">Sample Title 2 </h3>
        </div>
      </div>
    )
}

export default Home
