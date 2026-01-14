import React from "react";
import { Outlet, NavLink } from "react-router";
import {
  FiHome,
  FiUser,
  FiBookOpen,
  FiStar,
  FiSettings,
  FiLogOut,
  FiUsers,
  FiBook,
  FiTag,
  FiVideo,
  FiCheckSquare,
} from "react-icons/fi";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-base-100">

      {/* SIDEBAR */}
      <aside className="w-64 sticky top-0 h-screen bg-secondary text-neutral p-4 shadow-lg  flex flex-col">

        {/* Logo */}
        <h2 className="text-xl font-bold mb-6 text-textDark flex items-center gap-2">
          📚 BookWorm
        </h2>

       

        <ul className="menu gap-1 mb-4">
          {[
            { to: "/", label: " Home", icon: <FiHome />, end: true },
            { to: "/dashboard/my-profile", label: "My Profile", icon: <FiUser /> },
            { to: "/dashboard/my-library", label: "My Library", icon: <FiBookOpen /> },
            { to: "/dashboard/my-reviews", label: "My Reviews", icon: <FiStar /> },
            { to: "/dashboard/settings", label: "Settings", icon: <FiSettings /> },
          ].map((item, i) => (
            <li key={i}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition-all
                  ${
                    isActive
                      ? "bg-primary  shadow-md"
                      : "text-textDark hover:bg-primary/20"
                  }`
                }
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ADMIN MENU */}
        <p className="text-xs uppercase tracking-wide text-textDark/60 mb-2">
          Admin Menu
        </p>

        <ul className="menu gap-1 flex-1">
          {[
            { to: "/dashboard/overview", label: "Admin Overview", icon: <FiHome /> },
            { to: "/dashboard/manage-users", label: "Manage Users", icon: <FiUsers /> },
            { to: "/dashboard/manage-books", label: "Manage Books", icon: <FiBook /> },
            { to: "/dashboard/manage-genre", label: "Manage Genres", icon: <FiTag /> },
            { to: "/dashboard/manage-tutorials", label: "Manage Tutorials", icon: <FiVideo /> },
            { to: "/dashboard/users-reviews", label: "Users Reviews", icon: <FiCheckSquare /> },
          ].map((item, i) => (
            <li key={i}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition-all
                  ${
                    isActive
                      ? "bg-primary  shadow-md"
                      : "text-textDark hover:bg-primary/20"
                  }`
                }
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <hr className="border-black/20 my-4 w-full" />

        {/* Logout */}
        <button className="flex items-center gap-3 px-4 py-2 rounded-lg text-error hover:bg-error/20 transition">
          <FiLogOut className="text-lg" />
          Logout
        </button>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 bg-accent">

        {/* TOP BAR */}
        <div className="navbar sticky top-0 z-40 bg-neutral text-secondary px-6 shadow-lg">
          <h3 className="text-lg font-semibold text-textDark">
            Dashboard
          </h3>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-6">
          <Outlet />
        </div>

      </main>
    </div>
  );
};

export default DashboardLayout;
