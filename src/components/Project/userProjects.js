import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function UserProjects() {
  const [projects, setProjects] = useState([]);
  const [username, setUsername] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 12; // 3 rows * 4 projects per row
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = JSON.parse(atob(token.split(".")[1]));
        setUsername(decoded.username || "");
      } catch {
        console.log("Could not decode username from token");
      }
    }

    fetch("http://localhost:7000/project/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <main className="min-h-screen bg-gradient-to-b from-lime-50 to-white py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-lime-100">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-lime-800">
              Welcome{username ? `, ${username}` : ""}!
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              Manage and track your current projects below.
            </p>
          </div>

          <button
            onClick={() => navigate("/project/new")}
            className="bg-lime-700 hover:bg-lime-800 text-white px-5 py-2.5 rounded-full font-semibold shadow-md transition-all duration-200"
          >
            + New Project
          </button>
        </div>

        {/* Projects Section */}
        <h2 className="text-2xl font-semibold text-lime-800 border-b-4 border-lime-700 pb-2 mb-6">
          Your Current Projects
        </h2>

        {projects.length === 0 ? (
          <p className="text-gray-500 italic text-center py-12">
            You don’t have any projects yet. Click “New Project” to get started!
          </p>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentProjects.map((project, index) => {
                const formattedDate = project.dueDate
                  ? new Date(project.dueDate).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "No due date";

                return (
                  <Link
                    key={index}
                    to={`/project/${project._id}`}
                    className="group bg-lime-100 hover:bg-lime-700 hover:text-white p-5 rounded-2xl shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-lime-800 group-hover:text-white">
                        {project.projectName}
                      </h3>
                      <p className="text-sm">
                        <strong>Due Date:</strong>{" "}
                        <span className="italic">{formattedDate}</span>
                      </p>
                    </div>
                    <p className="mt-4 text-sm font-semibold text-lime-900 group-hover:text-lime-50">
                      View Assignments →
                    </p>
                  </Link>
                );
              })}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-10">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-full border border-lime-700 text-lime-700 font-semibold hover:bg-lime-700 hover:text-white transition-all duration-200 ${
                    currentPage === 1 && "opacity-40 cursor-not-allowed"
                  }`}
                >
                  ← Prev
                </button>

                <span className="text-gray-600 font-medium">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-full border border-lime-700 text-lime-700 font-semibold hover:bg-lime-700 hover:text-white transition-all duration-200 ${
                    currentPage === totalPages && "opacity-40 cursor-not-allowed"
                  }`}
                >
                  Next →
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}

export default UserProjects;
