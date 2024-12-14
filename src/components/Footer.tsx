import { Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import cv from "../files/Hariharan's cv.pdf";


export default function Footer() {
  return (
    // <footer className="bg-gradient-to-b from-black to-gray-900 text-gray-300 py-12">
    <footer className="bg-gradient-to-b from-black to-gray-900 text-gray-300 py-12 border-t-2 border-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand and Navigation */}
          <div>
            <Link to="/" className="text-xl font-semibold text-white">
              Hariharan
            </Link>
            <nav className="mt-4 space-y-2">
              <Link to="/MyPortfolio2/about" className="block hover:text-white">About</Link>
              <Link to="/MyPortfolio2/projects" className="block hover:text-white">Projects</Link>
              <Link to="/MyPortfolio2/skills" className="block hover:text-white">Skills</Link>
            </nav>
            {/* <a
              href={cv}
              download
              className="flex items-center px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              <FileText className="w-4 h-4 mr-2" /> */}

          <div className="mt-1 space-y-2">
            <a
            href={cv}
            download
            className="block hover:text-white"
            // className="flex items-center px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
            {/* <FileText className="w-4 h-4 mr-2" /> */}
            Curriculum Vitae
            </a>
          </div>
          </div>


          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
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
              <a
                className="flex items-center hover:text-white"
              >
                <Phone className="w-5 h-5 mr-2" />
                +91 77081 15867
              </a>
            </div>
          </div>

          {/* Acknowledgments
          <div>
            <h3 className="text-white font-semibold mb-4">Acknowledgments</h3>
            <p className="text-sm leading-relaxed">
             Just something to acknowledge
            </p>
            <p className="mt-4 text-sm">© Hariharan {new Date().getFullYear()}</p>
          </div> */}
        </div>
      </div>
    </footer>
  );
}