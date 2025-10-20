import React, { useState, useEffect } from "react";

function Home() {
  const slides = [
    {
      quote: "“Order is the foundation upon which great things are built.”",
      description:
        "SprintTrack was created to help those with a busy schedule stay organized in a modern and effective way.",
    },
    {
      quote: "“Small steps every day lead to big results.”",
      description:
        "Progress isn’t about perfection — it’s about persistence. SprintTrack keeps you moving forward.",
    },
    {
      quote: "“Focus on progress, not perfection.”",
      description:
        "Stay motivated, set achievable goals, and track your journey with clarity.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setFade(false);
      // Wait for fade-out before changing slide
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 500); // 500ms fade duration
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8">
        {/* Left Section (Carousel) */}
        <div className="relative bg-white p-8 rounded-2xl shadow-lg overflow-hidden flex flex-col justify-center">
          <div
            className={`text-center transition-all duration-700 ease-in-out transform ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              {slides[current].quote}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {slides[current].description}
            </p>
            <button className="w-fit px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition-colors duration-300">
              Sign Up
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  i === current ? "bg-green-700 scale-110" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Your Productivity, Simplified
          </h3>
          <p className="text-gray-600 mb-6">
            Manage your time, track your goals, and achieve more with less stress.
          </p>
          <div className="mt-4 w-full h-40 bg-gradient-to-tr from-green-300 to-green-600 rounded-xl flex items-center justify-center text-white text-3xl font-bold">
            🚀 Start Today
          </div>
          <button className="mt-6 px-4 py-1.5 bg-green-700 text-white font-semibold rounded-md shadow hover:bg-green-800 transition-colors duration-300 text-sm">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
