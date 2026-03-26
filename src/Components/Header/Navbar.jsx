import { NavLink } from "react-router-dom";
import { FiSettings, FiChevronDown } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Last 24 Hours");

  const options = [
    "Last 24 Hours",
    "Last 48 Hours",
    "Last 72 Hours",
    "Last 7 Days",
  ];

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      
      {/* Top Row */}
      <div className="flex justify-between items-center">

        {/* Title */}
        <div className="text-2xl font-bold text-gray-800">
          System Monitoring Dashboard
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 relative">

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:border-blue-400"
            >
              {selected}
              <FiChevronDown />
            </button>

            {/* Dropdown Menu */}
            {open && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg py-2 z-50">
                {options.map((option) => (
                  <p
                    key={option}
                    onClick={() => {
                      setSelected(option);
                      setOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {option}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Settings Icon */}
          <FiSettings className="text-xl text-gray-600 cursor-pointer hover:text-blue-500" />

        </div>
      </div>

      {/* Bottom Row (Nav Links) */}
      <div className="flex gap-6 mt-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 border-b-2 border-blue-600 pb-1 font-semibold"
              : "text-gray-700 hover:text-blue-500 pb-1"
          }
        >
          Security
        </NavLink>

        <NavLink 
          to="/network" 
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 border-b-2 border-blue-600 pb-1 font-semibold"
              : "text-gray-700 hover:text-blue-500 pb-1"
          }
        >
          Network
        </NavLink>

        <NavLink 
          to="/system-health" 
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 border-b-2 border-blue-600 pb-1 font-semibold"
              : "text-gray-700 hover:text-blue-500 pb-1"
          }
        >
          System Health
        </NavLink>
      </div>

    </nav>
  );
};

export default Navbar;