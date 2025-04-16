
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CMSForm from '@/components/CMSForm';
import BackgroundAnimation from '@/components/BackgroundAnimation';

const CMSPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col relative overflow-hidden">
      <BackgroundAnimation />
      
      <header className="bg-white/80 backdrop-blur-sm shadow-sm py-4 z-10">
        <div className="container px-4 mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-brynk-blue">Company ABC CMS</h1>
          <Link to="/">
            <Button variant="outline" size="sm">
              View Website
            </Button>
          </Link>
        </div>
      </header>
      
      <main className="flex-grow container px-4 py-12 mx-auto z-10">
        <CMSForm />
      </main>
      
      <footer className="py-6 bg-white/80 backdrop-blur-sm border-t z-10">
        <div className="container px-4 mx-auto">
          <p className="text-sm text-center text-gray-600">
            &copy; {new Date().getFullYear()} Company ABC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CMSPage;
