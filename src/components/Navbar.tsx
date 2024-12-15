import { Menu, X, FileText } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cv from "../files/Hariharan's cv.pdf";
import MobileNav from './MobileNav';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    // { path: 'MyPortfolio2/', label: 'Home' },
    { path: 'MyPortfolio2/about', label: 'About' },
    { path: 'MyPortfolio2/projects', label: 'Projects' },
    { path: 'MyPortfolio2/skills', label: 'Skills' }
  ];

  return (
    <>
      <nav className="fixed w-full z-50">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-lg border-bborder-white/1" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 mt-8">
            <NavLink to="MyPortfolio2/" className="text-white text-3xl font-light tracking-widest mr-12">
              Hariharan
            </NavLink>

            <div className="hidden md:flex flex-grow justify-center space-x-12">
              {navItems.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'nav-link-active' : ''}`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href={cv}
                download
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <FileText className="w-4 h-4 mr-2" />
                Curriculum Vitae
              </a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-white"
              aria-label="Toggle menu"

            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}