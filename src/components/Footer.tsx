import { Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import cv from "../files/Hariharan's cv.pdf";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return null;
};

export default function Footer() {
  return (
    <div>
      {/* ScrollToTop component */}
      <ScrollToTop />
      
      <footer className="bg-gradient-to-b from-black to-gray-900 text-gray-300 py-12 border-t-2 border-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Brand and Navigation */}
            <div>
              <Link to="MyPortfolio2/" className="text-xl font-semibold text-white relative inline-block">
                Hariharan
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white"></span> {/* Underline */}
              </Link>
              <nav className="mt-4 space-y-2">
                <Link to="/MyPortfolio2/about" className="block hover:text-white">
                  About
                </Link>
                <Link to="/MyPortfolio2/projects" className="block hover:text-white">
                  Projects
                </Link>
                <Link to="/MyPortfolio2/skills" className="block hover:text-white">
                  Skills
                </Link>
              </nav>

              <div className="mt-1 space-y-2">
                <a href={cv} download className="block hover:text-white">
                  Curriculum Vitae
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 relative inline-block">
                Connect
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white"></span> {/* Underline */}
              </h3>
              <div className="space-y-2">
                <a
                  href="https://github.com/hariharan-stark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Github
                </a>
                <a
                  href="https://www.linkedin.com/in/hariharan3111/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
                <a
                  href="mailto:hariharantony341@gmail.com"
                  className="flex items-center hover:text-white"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email
                </a>
                <a className="flex items-center hover:text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  +91 77081 15867
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
