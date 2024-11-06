import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Clock,
  FileText,
  Users,
  Briefcase,
  BarChart2,
  Settings,
  LogOut,
} from 'lucide-react';

export default function Sidebar() {
  const location = useLocation();
  
  const menuItems = [
    { icon: Clock, label: 'Time Tracking', path: '/' },
    { icon: FileText, label: 'Invoices', path: '/invoices' },
    { icon: Users, label: 'Clients', path: '/clients' },
    { icon: Briefcase, label: 'Projects', path: '/projects' },
    { icon: BarChart2, label: 'Reports', path: '/reports' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="h-screen w-72 bg-gray-900 flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white tracking-tight">TimeTracker</h1>
      </div>
      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-800">
        <button className="sidebar-link w-full">
          <LogOut className="h-5 w-5 mr-3" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}