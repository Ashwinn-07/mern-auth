import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
            Auth App
          </h1>
        </Link>

        <nav>
          <ul className="flex items-center gap-8">
            <Link to="/">
              <li className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">
                About
              </li>
            </Link>

            {currentUser ? (
              <div className="flex items-center gap-4">
                {currentUser.isAdmin && (
                  <Link to="/admin">
                    <li className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">
                      Admin Dashboard
                    </li>
                  </Link>
                )}
                <Link to="/profile" className="flex items-center">
                  <div className="relative group">
                    <img
                      src={currentUser.profilePicture}
                      alt="profile"
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-blue-500 ring-offset-2 transition-all duration-200 hover:ring-purple-500"
                    />
                  </div>
                </Link>
              </div>
            ) : (
              <Link to="/profile">
                <li className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                  Sign In
                </li>
              </Link>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
