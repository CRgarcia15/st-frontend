import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateProject() {
  const navigate = useNavigate();

  const [project, setProject] = useState({
    projectName: "",
    dueDate: "",
    description: "",
  });

  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:7000/project/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(project),
      });

      if (response.ok) {
        setSuccess(true);
        // Redirect after 2 seconds
        setTimeout(() => {
          navigate("/User/userProjects");
        }, 2000);
      } else {
        console.error("Failed to create project");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 relative">
        <h1 className="text-3xl font-extrabold text-center text-lime-700 mb-8">
          Create a <span className="text-gray-800">New Project</span>
        </h1>

        {/* Success Banner */}
        {success && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 bg-green-500 text-white font-semibold py-3 px-4 rounded-xl shadow-md text-center transition-all duration-500 animate-fade-in">
            ✅ Project created successfully! Redirecting...
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Project Name */}
          <div>
            <label
              htmlFor="projectName"
              className="block text-gray-700 font-semibold mb-2"
            >
              Project Name
            </label>
            <input
              id="projectName"
              name="projectName"
              type="text"
              placeholder="Enter your project name"
              required
              value={project.projectName}
              onChange={(e) =>
                setProject({ ...project, projectName: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lime-500 text-gray-800 shadow-sm"
            />
          </div>

          {/* Due Date */}
          <div>
            <label
              htmlFor="dueDate"
              className="block text-gray-700 font-semibold mb-2"
            >
              Due Date
            </label>
            <input
              id="dueDate"
              name="dueDate"
              type="date"
              value={project.dueDate}
              onChange={(e) =>
                setProject({ ...project, dueDate: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lime-500 text-gray-800 shadow-sm"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-semibold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Describe your project goals, purpose, or milestones..."
              rows="4"
              value={project.description}
              onChange={(e) =>
                setProject({ ...project, description: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-lime-500 text-gray-800 shadow-sm"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 space-y-3 sm:space-y-0">
            <button
              type="submit"
              disabled={success}
              className="w-full sm:w-auto bg-gradient-to-tr from-lime-500 to-lime-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:from-lime-600 hover:to-lime-800 transition-all duration-300 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Create Project
            </button>

            <Link
              to="/"
              className="w-full sm:w-auto text-center text-gray-700 font-semibold px-8 py-3 rounded-xl border border-lime-600 hover:bg-lime-700 hover:text-white transition-all duration-300 shadow-sm"
            >
              Return Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProject;
