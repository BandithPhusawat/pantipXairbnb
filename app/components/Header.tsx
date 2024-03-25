import { Button, Image } from '@nextui-org/react';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
     <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image className="h-8 bg-red-400 rounded-md " width={50} height={30} src="https://ptcdn.info/mobile/logo-mobile-pantip-white.png" alt="PanTip Logo" />
          </div>

          {/* Navbar links */}
          <div className="hidden md:block rounded-full">
            <ul className="flex space-x-8">
              <li className="text-gray-700 font-medium">หน้าแรก</li>
              <li className="text-gray-700 font-medium">My Feed</li>
              <li className="text-gray-700 font-medium">Pantip Pick</li>
              <li className="text-gray-700 font-medium">Pantip Hitz</li>
              <li className="text-gray-700 font-medium">Explore</li>
            </ul>
          </div>

          <div className='hidden md:block'>
            
            <form className="flex items-center max-w-sm mx-auto">   
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full ps-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="ค้นหาบน Pantip" required />
                </div>
                <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-red-500 rounded-lg border border-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-500 dark:hover:bg-red-500 dark:focus:ring-red-500">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </form>


          </div>

          {/* Authentication buttons */}
          <div className="hidden md:block">
            <button className="text-gray-700 font-medium">สมัครสมาชิก</button>
            <button className="ml-4 bg-red-500 text-white font-medium px-4 py-2 rounded-lg">เข้าสู่ระบบ</button>
          </div>

          {/* Mobile menu (hidden by default) */}
          <div className="md:hidden">
            <button className="text-gray-700 font-medium">Menu</button>
          </div>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Header;
