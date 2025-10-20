import React from "react";
import { Link } from "react-router-dom";

function Err() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-lime-50 to-white px-6">
      <div className="text-center bg-white p-12 rounded-2xl shadow-xl border border-lime-100 max-w-md">
        <h1 className="text-6xl font-bold text-lime-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Couldn't find what you were looking for.
        </h2>
        <p className="text-gray-600 mb-8">
          The page you are trying to access does not exist or may have been removed.
        </p>
        <Link
          to="/"
          className="inline-block bg-lime-700 hover:bg-lime-800 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-200"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}

export default Err;
