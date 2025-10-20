import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(`http://localhost:7000/user/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (response.status === 200) {
      localStorage.setItem("token", data);
      navigate("/User/userProjects");
    } else {
      setErrorMessage(data.message);
    }
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-lime-700 mb-6 text-center">
          Welcome Back
        </h1>

        {/* Error Message */}
        {errorMessage && (
          <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-700 text-center text-sm font-semibold border border-red-300">
            {errorMessage}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              className="block text-gray-700 font-semibold mb-1"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full text-sm border border-lime-700 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-lime-600 text-center"
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              required
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-semibold mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full text-sm border border-lime-700 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-lime-600 text-center"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              className="px-6 py-2 rounded-lg bg-lime-700 text-white font-semibold shadow hover:bg-lime-800 transition-colors duration-300"
              type="submit"
            >
              Login
            </button>
            <Link
              to="/"
              className="text-lime-700 hover:text-lime-800 font-medium transition-colors duration-200"
            >
              Cancel
            </Link>
          </div>
        </form>

        {/* Sign Up Prompt */}
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-lime-700 font-semibold hover:text-lime-800 transition-colors duration-200"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;
