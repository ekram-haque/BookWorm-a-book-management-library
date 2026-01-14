import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-accent font-semibold" : "hover:text-accent"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/explore-books"
          className={({ isActive }) =>
            isActive ? "text-accent font-semibold" : "hover:text-accent"
          }
        >
          Explore Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tutorial"
          className={({ isActive }) =>
            isActive ? "text-accent font-semibold" : "hover:text-accent"
          }
        >
          Tutorial
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-accent font-semibold" : "hover:text-accent"
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 w-full bg-neutral text-white shadow-md">
      <div className="navbar w-11/12 mx-auto">
        {/* LEFT */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="text-2xl font-heading">
            📚 BookWorm
          </Link>
        </div>

        {/* CENTER - Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{navLinks}</ul>
        </div>

        {/* RIGHT - Search / Cart */}
        <div className="navbar-end flex gap-4">
         <Link
          to="/community"
          className='text-lg outline text-primary py-2 px-3 rounded-lg hover:bg-primary hover:text-black cursor-pointer'
        >
         Join Community
        </Link>
         <Link to="/auth/login" className="text-lg bg-primary py-2 px-3 rounded-lg text-black">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
