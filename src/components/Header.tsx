
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  // Check if the component is being rendered within a Router context
  const location = useLocation();

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-brynk-blue">Company ABC</h1>
        </div>
        <nav className="hidden space-x-6 md:flex">
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-brynk-blue">Home</a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-brynk-blue">About</a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-brynk-blue">Services</a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-brynk-blue">Contact</a>
        </nav>
        <div className="flex items-center">
          <Link to="/cms">
            <Button variant="outline" className="hidden md:block">
              CMS Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
