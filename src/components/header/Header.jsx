import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../redux/reducer/authReducer";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = useSelector((state) => state.AuthReducer.user);
  const isLogin = useSelector((state) => state.AuthReducer.isLogin);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">Info Blog</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-700">
            Home
          </a>
          <a href="#" className="hover:text-gray-700">
            Article
          </a>
          <a href="#" className="hover:text-gray-700">
            Videos
          </a>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="flex space-x-4">
          {isLogin ? (
            <>
              <div className="text-xl font-bold">{user.username}</div>
              <div className="text-xl cursor-pointer" onClick={handleLogout}>
                Logout
              </div>
            </>
          ) : (
            <>
              <div className="text-xl cursor-pointer" onClick={() => navigate("/sign-in")} >
                Signin
              </div>
              <div className="text-xl cursor-pointer" onClick={() => navigate("/sign-up")}>
                Signup
              </div>
            </>
          )}
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">
            Home
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">
            Article
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">
            Videos
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
