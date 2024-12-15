import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FileText } from 'lucide-react';
import cv from "../files/Hariharan's cv.pdf";


interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const navItems = [
    // { path: 'MyPortfolio2/', label: 'Home' },
    { path: 'MyPortfolio2/about', label: 'About' },
    { path: 'MyPortfolio2/projects', label: 'Projects' },
    { path: 'MyPortfolio2/skills', label: 'Skills' }
  ];

  const menuVariants = {
    closed: { y: '-100%' },
    open: { y: '0%' }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

  //   return (
  //     <AnimatePresence>
  //       {isOpen && (
  //         <>
  //           {/* Overlay */}
  //           <motion.div
  //             initial={{ opacity: 0 }}
  //             animate={{ opacity: 1 }}
  //             exit={{ opacity: 0 }}
  //             transition={{ duration: 0.2 }}
  //             className="fixed inset-0 backdrop-blur-lg z-50"
  //           // onClick={onClose}
  //           />

  //           {/* Sliding Navigation Menu */}
  //           <motion.div
  //             initial="closed"
  //             animate="open"
  //             exit="closed"
  //             variants={menuVariants}
  //             transition={{ type: "spring", damping: 30, stiffness: 200 }}
  //             className="fixed inset-x-0 top-0 h-[90vh] backdrop-blur-lg z-50 overflow-y-auto border-b border-white/10 rounded-b-lg"
  //           >
  //             <div className="fixed inset-x-0 top-20">
  //               <div className="text-white text-3xl font-light tracking-widest ml-8">
  //                 Hariharan
  //               </div>
  //               <div
  //                 className="fixed inset-x-0 top-30 h-[90vh]">
  //                 <div className="flex flex-col justify-center p-12">
  //                   {/* Navigation Items */}
  //                   <div className="space-y-8">
  //                     {navItems.map((item, i) => (
  //                       <motion.div
  //                         key={item.path}
  //                         variants={itemVariants}
  //                         transition={{ delay: i * 0.1 }}
  //                         className="text-left"
  //                       >
  //                         <NavLink
  //                           to={item.path}
  //                           onClick={onClose}
  //                           className={({ isActive }) =>
  //                             `block text-3xl font-extralight tracking-widest ${isActive ? "text-white-500" : "text-gray-300"
  //                             } hover:text-white transition-colors duration-200`
  //                           }
  //                         >
  //                           {item.label}
  //                         </NavLink>
  //                       </motion.div>
  //                     ))}
  //                   </div>

  //                   {/* CV Download */}
  //                   <motion.div
  //                     variants={itemVariants}
  //                     transition={{ delay: navItems.length * 0.1 }}
  //                     className="mt-12"
  //                   >
  //                     <a
  //                       href={cv}
  //                       download
  //                       className="inline-flex items-center text-2xl font-extralight tracking-widest text-gray-300 hover:text-white transition-colors"
  //                       onClick={onClose}
  //                     >
  //                       <FileText className="w-6 h-6 mr-3" />
  //                       Curriculum Vitae
  //                     </a>
  //                   </motion.div>

  //                   {/* Close Button Below CV */}
  //                   <motion.div
  //                     variants={itemVariants}
  //                     transition={{ delay: navItems.length * 0.15 }}
  //                     className="mt-8"
  //                   >
  //                     <button
  //                       onClick={onClose}
  //                       className="flex items-center text-gray-300 hover:text-white transition-colors"
  //                       aria-label="Close Menu"
  //                     >
  //                       <svg
  //                         xmlns="http://www.w3.org/2000/svg"
  //                         fill="none"
  //                         viewBox="0 0 24 24"
  //                         strokeWidth={1.5}
  //                         stroke="currentColor"
  //                         className="w-6 h-6 mr-3"
  //                       >
  //                         <path
  //                           strokeLinecap="round"
  //                           strokeLinejoin="round"
  //                           d="M15.75 19.5L8.25 12l7.5-7.5"
  //                         />
  //                       </svg>
  //                     </button>
  //                   </motion.div>
  //                 </div>
  //               </div>
  //             </div>
  //           </motion.div>
  //         </>
  //       )}
  //     </AnimatePresence>
  //   )
  // }

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
          />

          {/* Sliding Navigation Menu */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-x-0 top-0 h-[100vh] backdrop-blur-lg z-50 border-b border-white/10 rounded-b-lg"
          >
            <div className="fixed inset-x-0 top-20 h-[100vh]">
              {/* Header Section */}
              <div
                className="px-8 py-4"
              >
                <NavLink
                  onClick={onClose}
                  to="MyPortfolio2/"
                  className="text-white text-4xl font-light tracking-widest">
                  Hariharan
                </NavLink>
              </div>
              <div className="fixed inset-x-0 top-60 h-[100vh]">
                {/* Navigation Items */}
                <div className="flex-grow flex flex-col justify-center space-y-8 px-12">
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
                          `block text-3xl font-extralight tracking-widest ${isActive ? "text-white-500" : "text-gray-300"
                          } hover:text-white transition-colors duration-200`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </motion.div>
                  ))}
                </div>

                {/* CV Download */}
                <div className="px-12">
                  <motion.div
                    variants={itemVariants}
                    transition={{ delay: navItems.length * 0.1 }}
                    className="mt-8"
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
                    className="mt-8"
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
                        className="w-6 h-6 mr-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                      </svg>
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

