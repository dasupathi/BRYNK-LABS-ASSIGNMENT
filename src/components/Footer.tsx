
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brynk-darkgrey text-white py-10">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold mb-4">Company ABC</h3>
            <p className="text-sm">
              Providing innovative solutions for businesses worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:underline">Home</a></li>
              <li><a href="#" className="text-sm hover:underline">About</a></li>
              <li><a href="#" className="text-sm hover:underline">Services</a></li>
              <li><a href="#" className="text-sm hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="text-sm not-italic">
              <p>123 Business Avenue</p>
              <p>Business District</p>
              <p>contact@companyabc.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Company ABC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
