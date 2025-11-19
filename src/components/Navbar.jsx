import { useContext, useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "My Profile", path: "/profile" },
  ];

  return (
    <nav data-aos="fade-down" className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex items-center justify-between h-14">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">WarmPaws</div>

        {/* Desktop Menu Links */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                    : "text-gray-700 hover:text-blue-600 transition"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Login / User */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <button
                onClick={() => logOutUser()}
                className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
              >
                Sign Out
              </button>
              <img
                className="w-12 h-12 rounded-full cursor-pointer"
                src={user.photoURL}
                alt={user.displayName || "User"}
                title={user.displayName || "User"}
              />
            </div>
          ) : (
            <NavLink
              to="/login"
              className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
            >
              Log In
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          {user && (
            <img
              className="w-10 h-10 rounded-full cursor-pointer"
              src={user.photoURL}
              alt={user.displayName || "User"}
              title={user.displayName || "User"}
            />
          )}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <HiOutlineX className="w-6 h-6 text-blue-600 cursor-pointer" />
            ) : (
              <HiOutlineMenu className="w-6 h-6 text-blue-600 cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                      : "text-gray-700 hover:text-blue-600 transition"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li>
              {user ? (
                <button
                  onClick={() => {
                    logOutUser();
                    setIsMenuOpen(false);
                  }}
                  className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer w-full"
                >
                  Sign Out
                </button>
              ) : (
                <NavLink
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer block text-center"
                >
                  Log In
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
