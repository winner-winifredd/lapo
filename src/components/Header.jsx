import React from 'react';
import { Bell, Search, User } from 'lucide-react';

function Header() {
  return (
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Dashboard
          </h1>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#667085]" />
              <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-[#d0d5dd] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2087e7] focus:border-transparent"
              />
            </div>
            <button className="p-2 hover:bg-[#f2f4f7] rounded-lg">
              <Bell className="h-5 w-5 text-[#667085]" />
            </button>
            <button className="p-2 hover:bg-[#f2f4f7] rounded-lg">
              <User className="h-5 w-5 text-[#667085]" />
            </button>
          </div>
        </div>
      </header>
  );
}

export default Header;