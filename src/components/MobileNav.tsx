import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FileText } from 'lucide-react';
import cv from "../files/Hariharan_cv.pdf";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const navItems = [
    { path: 'MyPortfolio/about', label: 'About' },
    { path: 'MyPortfolio/experience', label: 'Experience' },
    { path: 'MyPortfolio/projects', label: 'Projects' },
    { path: 'MyPortfolio/skills', label: 'Skills' }
  ];

  const menuVariants = {
    closed: { y: '-100%' },
    open: { y: '0%' }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 backdrop-blur-lg z-50"
            onClick={onClose} // Closes menu when clicking outside
          />

          {/* Sliding Navigation Menu */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-x-0 top-0 h-full backdrop-blur-lg z-50 border-b border-white/10 rounded-b-lg"
          >
            <div className="px-8 py-4 mt-20">
              {/* Header */}
              <NavLink
                onClick={onClose}
                to="MyPortfolio/"
                className="text-white text-4xl font-light tracking-wider"
              >
                Hariharan
              </NavLink>
            </div>

            {/* Navigation Items */}
            <div className="mt-10 space-y-8 px-14">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  variants={itemVariants}
                  transition={{ delay: i * 0.1 }}
                  className="text-left"
                >
                  <NavLink
                    to={item.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `block text-3xl font-extralight tracking-widest ${isActive ? "text-white" : "text-gray-300"
                      } hover:text-white transition-colors duration-200`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* CV Download */}
            <motion.div
              variants={itemVariants}
              transition={{ delay: navItems.length * 0.1 }}
              className="mt-16 px-8 px-14"
            >
              <a
                href={cv}
                download
                className="inline-flex items-center text-2xl font-extralight tracking-widest text-gray-300 hover:text-white transition-colors"
                onClick={onClose}
              >
                <FileText className="w-6 h-6 mr-3" />
                Curriculum Vitae
              </a>
            </motion.div>

            {/* Close Button */}
            <motion.div
              variants={itemVariants}
              transition={{ delay: navItems.length * 0.15 }}
              className="mt-10 px-10"
            >
              <button
                onClick={onClose}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
                aria-label="Close Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
