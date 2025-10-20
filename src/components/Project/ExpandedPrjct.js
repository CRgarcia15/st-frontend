import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function ExpandedPrct() {
  const [project, setProject] = useState({});
  const { id } = useParams();
  const singleProjectAPI = `http://localhost:7000/project/${id}/`;
  const navigate = useNavigate();

  const fetchProject = useCallback(async () => {
    try {
      let response = await fetch(singleProjectAPI, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      response = await response.json();
      setProject(response);
      console.log("Fetched project:", response);
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  }, [singleProjectAPI]);

  useEffect(() => {
    fetchProject();
  }, [fetchProject]);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(singleProjectAPI, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if (res.ok) {
        navigate("/User/userProjects");
      } else {
        console.error("Failed to delete project");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-lime-50 to-white py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-lime-100">
        {/* Header Section */}
        <div className="flex justify-between items-center border-b border-lime-200 pb-4 mb-6">
          <h1 className="text-4xl font-bold text-lime-800">
            {project.projectName || "Loading..."}
          </h1>
          <Link
            to="/User/userProjects"
            className="text-lime-700 hover:text-lime-900 text-sm font-semibold underline transition-all duration-150"
          >
            ← Back to Projects
          </Link>
        </div>

        {/* Project Details */}
        <div className="space-y-4 text-gray-700">
          <p className="text-lg">
            <span className="font-semibold text-lime-700">Description:</span>{" "}
            {project.description || "No description provided."}
          </p>

          <p className="text-lg">
            <span className="font-semibold text-lime-700">Due Date:</span>{" "}
            {project.dueDate
              ? new Date(project.dueDate).toLocaleDateString()
              : "No due date set."}
          </p>

          {project.createdAt && (
            <p className="text-sm text-gray-500 italic">
              Created on: {new Date(project.createdAt).toLocaleDateString()}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-10">
          <button
            onClick={() => navigate(`/project/${id}/edit`)}
            className="bg-lime-700 hover:bg-lime-800 text-white px-6 py-2.5 rounded-full font-semibold shadow-md transition-all duration-200"
          >
            Edit Project
          </button>

          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-md transition-all duration-200"
          >
            Delete Project
          </button>
        </div>
      </div>
    </main>
  );
}

export default ExpandedPrct;
