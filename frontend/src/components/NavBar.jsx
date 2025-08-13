import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem("refresh");
      if (refreshToken) {
        await fetch("http://localhost:8000/api/users/logout/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refresh_token: refreshToken }),
        });
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      // Clear all auth data
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("user");
      navigate("/login");
    }
  };

  return (
    <nav className="bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-800/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold gradient-text-primary group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                EduTech Nexus
              </span>
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {user.username && (
              <>
                <Link 
                  to="/courses" 
                  className="text-gray-300 hover:text-indigo-400 font-medium transition-colors duration-200 relative group"
                >
                  Learning Paths
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-200"></span>
                </Link>
                <Link 
                  to="/videos" 
                  className="text-gray-300 hover:text-indigo-400 font-medium transition-colors duration-200 relative group"
                >
                  Video Library
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-200"></span>
                </Link>
                <Link 
                  to="/quizzes" 
                  className="text-gray-300 hover:text-indigo-400 font-medium transition-colors duration-200 relative group"
                >
                  Knowledge Tests
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-200"></span>
                </Link>
              </>
            )}
          </div>
          
          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {user.username ? (
              <>
                <div className="flex items-center space-x-3">
                  <div className="hidden sm:flex items-center space-x-2 px-3 py-2 bg-gray-800/80 rounded-lg border border-gray-700/50">
                    <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-medium">
                        {user.username.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-200">Welcome, {user.username}</span>
                  </div>
                  <Link 
                    to="/dashboard" 
                    className="px-4 py-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors duration-200 hover:bg-gray-800/50 rounded-lg"
                  >
                    My Hub
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:shadow-red-500/25"
                  >
                    Sign Out
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="px-4 py-2 text-gray-300 hover:text-gray-100 font-medium transition-colors duration-200 hover:bg-gray-800/50 rounded-lg"
                >
                  Sign In
                </Link>
                <Link 
                  to="/register" 
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:shadow-indigo-500/25"
                >
                  Join Now
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
