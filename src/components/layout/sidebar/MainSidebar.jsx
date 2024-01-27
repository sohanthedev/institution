import React, { useState } from 'react';
import { FaBookmark, FaComment, FaSignOutAlt } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';
import { FaChartBar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
const MainSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isChatDropdownOpen, setChatDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleChatDropdown = () => {
    setChatDropdownOpen(!isChatDropdownOpen);
  };

  return (
   <div className='flex gap-2 justify-between'>
     <div className='w-[20%] '>
      <div className={` h-screen ${isSidebarOpen ? '' : 'hidden'}`}>
      <span className="absolute text-white text-4xl top-5 left-4 cursor-pointer" onClick={toggleSidebar}>
        <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
      </span>

      <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center dark:text-white text-black dark:bg-gray-900 bg-white">
        <div className="text-gray-100  text-xl">
          <div className="p-2.5 mt-1 flex items-center">
           
            <h1 className="font-bold dark:text-gray-200 text-textColor text-[15px] ml-3">TailwindCSS</h1>
            <i className="bi bi-x cursor-pointer ml-28 lg:hidden" onClick={toggleSidebar}></i>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        <p className='dark:text-gray-200 text-black dark:bg-gray-900 bg-lime-100 font-bold'>General</p>
         <Link to="/about">
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
         
          <FaChartBar size={24} className='dark:text-gray-200 text-black' />
          <span className="text-[15px] ml-4 dark:text-gray-200 text-textColor font-bold">Dashboard</span>
        </div>
        </Link>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <FaBookmark size={24} className='dark:text-gray-200 text-black' />
          <span className="text-[15px] ml-4 dark:text-gray-200 text-textColor text-bla font-bold">Bookmark</span>
        </div>

        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          onClick={toggleChatDropdown}
        >
          <FaComment size={24} className='dark:text-gray-200 text-black'/>
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 dark:text-gray-200 text-textColor font-bold">Chat</span>
            <span className={`text-sm ${isChatDropdownOpen ? 'rotate-180' : ''}`}>
              <BiChevronDown className='dark:text-gray-200 text-black'/>
            </span>
          </div>
        </div>

        {isChatDropdownOpen && (
          <div className="text-left text-sm mt-2 w-4/5 mx-auto className='dark:text-gray-200 text-textColor' font-bold">
            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Social</h1>
            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Personal</h1>
            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Friends</h1>
          </div>
        )}

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 dark:text-gray-200 text-textColor">
          <FaSignOutAlt size={24} />
          <span className="text-[15px] ml-4 dark:text-gray-200 text-textColor font-bold">Logout</span>
        </div>
      </div>
    </div>
     </div>
   <div className='w-[75%] dark:bg-gray-900 bg-slate-100 p-3'>
    <Dashboard></Dashboard>
    </div>
   </div>
  );
};

export default MainSidebar;