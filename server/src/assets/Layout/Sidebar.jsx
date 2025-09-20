import { FaFlask, FaHome, FaSearch, FaUserCog, FaUsers } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { IoMdLogOut, IoMdSettings } from "react-icons/io";
import { MdAgriculture, MdAutoGraph } from "react-icons/md";
import { NavLink } from "react-router";

export const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-65 bg-gray-800 text-white flex flex-col overflow-y-auto shadow-lg transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out z-50">
      {/* <!-- User Profile --> */}
      <div className="px-6 py-4 border-b border-gray-700 text-center flex-shrink-0 relative">
        <button
          id="closeMenuBtn"
          className="absolute top-4 right-4 md:hidden text-gray-400 text-xl"
        >
          ✕
        </button>
        <div className="w-20 h-20 mx-auto rounded-full bg-gray-600 flex items-center justify-center text-2xl font-bold">
          DD
        </div>
        <h1 className="text-lg font-semibold mt-3">DAE, Patuakhali</h1>
        <p className="text-gray-400 text-sm">Admin Panel</p>
      </div>

      {/* <!-- Navigation --> */}
      <nav className="flex-1">
        <ul className="space-y-1 py-4">
          <li className="hover:bg-[#ff0042] transition hover:text-bold px-4 py-2 bg-[#ff0042]">
            <NavLink to="/" className="flex items-center">
              <FaHome />
              <span className="ml-2">Dashboard</span>
            </NavLink>
          </li>
          <li className="hover:bg-[#ff0042] transition hover:text-bold px-4 py-2">
            <a href="#" className="flex items-center">
              <FaSearch />
              <span className="ml-2">Search</span>
            </a>
          </li>
          <li className="hover:bg-[#ff0042] transition hover:text-bold px-4 py-2">
            <a href="#" className="flex items-center">
              <FaDiagramProject />
              <span className="ml-2">Projects</span>
            </a>
          </li>
          <li className="hover:bg-[#ff0042] transition hover:text-bold px-4 py-2">
            <a href="#" className="flex items-center">
              <MdAgriculture className="text-xl" />
              <span className="ml-3">Agricultural Machinery</span>
            </a>
          </li>
          <li className="hover:bg-[#ff0042] transition hover:text-bold px-4 py-2">
            <a href="#" className="flex items-center">
              <FaFlask />
              <span className="ml-2">Fertilizer & Pesticide</span>
            </a>
          </li>
          <li className="hover:bg-[#ff0042] transition hover:text-bold px-4 py-2">
            <a href="#" className="flex items-center">
              <MdAutoGraph className="text-xl" />
              <span className="ml-2">Reports</span>
            </a>
          </li>
          <li className="hover:bg-[#ff0042] transition hover:text-bold px-4 py-2">
            <a href="#" className="flex items-center">
              <FaUsers className="text-xl" />
              <span className="ml-2">Staffs</span>
            </a>
          </li>
          <li className="hover:bg-[#ff0042] transition hover:text-bold px-4 py-2">
            <a href="#" className="flex items-center">
              <FaUserCog />
              <span className="ml-2">Users</span>
            </a>
          </li>
          <li className="hover:bg-[#ff0042] transition hover:text-bold px-4 py-2">
            <a href="#" className="flex items-center">
              <IoMdSettings />
              <span className="ml-2">Settings</span>
            </a>
          </li>
          <li className="hover:bg-[#ff0042] transition text-bold text-teal-500 hover:text-white px-4 py-2">
            <a href="#" className="flex items-center">
              <IoMdLogOut className="text-xl" />
              <span className="ml-2 ">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
