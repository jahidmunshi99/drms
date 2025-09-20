import { FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

export const Header = () => {
  return (
    <header className="w-full bg-gray-800 shadow-sm p-4 flex items-center justify-between z-10 fixed top-0 left-0">
      <span className="font-bold text-white md:ml-70">
        উপপরিচালকের কার্যালয়, কৃষি সম্প্রসারণ অধিদপ্তর, পটুয়াখালী
      </span>

      <div className="flex items-center space-x-4">
        {/* Menu button (mobile only) */}
        <button id="openMenuBtn" className="md:hidden text-gray-300 text-2xl">
          ☰
        </button>

        {/* User section */}
        <div className="hidden md:flex items-center space-x-2 text-white">
          <FaUser className="text-gray-300 text-3xl" />
          <span className="font-medium">admin</span>
          <IoSettings className="text-gray-300 text-xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
};
