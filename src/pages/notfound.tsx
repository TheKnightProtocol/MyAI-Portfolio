import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Dark alley accessed — no route found at:",
      location.pathname
    );
    document.title = "404 - Vanished into Gotham's Shadows";
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-gray-200 flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-6xl font-extrabold tracking-widest text-yellow-400 mb-4">
          404
        </h1>
        <p className="text-2xl text-gray-400 mb-6">
          This part of Gotham doesn’t exist...
        </p>
        <Link
          to="/"
          className="inline-block bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-300 transition duration-300 shadow-md"
        >
          Return to the Batcave
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
