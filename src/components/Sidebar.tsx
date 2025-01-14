import React from 'react';
import { Home, Users, Settings } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-gray-800 text-white transition-transform duration-300 ease-in-out z-40`}>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <Home size={20} />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <Users size={20} />
              <span>Users</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <Settings size={20} />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}