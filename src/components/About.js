import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-10 text-center">
        <h1 className="text-4xl font-extrabold text-lime-700 mb-6">
          About <span className="text-gray-800">SprintTrack</span>
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          SprintTrack helps teams and individuals stay organized, focused, and
          productive. Whether you’re managing large projects or personal tasks,
          our platform brings everything together — so you can plan smarter,
          collaborate better, and track progress effortlessly.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left mb-10">
          <div className="bg-gradient-to-tr from-green-100 to-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
            <h2 className="text-xl font-semibold text-lime-800 mb-2">
              📋 Organized Projects
            </h2>
            <p className="text-gray-700">
              Group your work by project, sprint, or goal. See everything at a
              glance without losing track of details.
            </p>
          </div>

          <div className="bg-gradient-to-tr from-green-100 to-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
            <h2 className="text-xl font-semibold text-lime-800 mb-2">
              ⏱️ Track Progress
            </h2>
            <p className="text-gray-700">
              Visualize how your team is performing with clear task statuses and
              progress indicators — from start to finish.
            </p>
          </div>

          <div className="bg-gradient-to-tr from-green-100 to-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
            <h2 className="text-xl font-semibold text-lime-800 mb-2">
              🤝 Stay Connected
            </h2>
            <p className="text-gray-700">
              Collaborate effortlessly — assign tasks, set priorities, and stay
              updated in real time with your team.
            </p>
          </div>
        </div>

        <Link
          to="/login"
          className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-tr from-green-400 to-green-600 text-white text-lg font-semibold rounded-xl shadow-md hover:from-green-500 hover:to-green-700 transition-all duration-300 active:scale-95"
        >
          🚀 Start Tracking Today
        </Link>
      </div>
    </div>
  );
}

export default About;
