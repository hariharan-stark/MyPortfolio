import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Footer from './components/Footer';


// function App() {
//   return (
//     <Router>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Navbar />
//         <main className="flex-grow">
//         <AnimatePresence mode="wait">
//           <Routes>
//             <Route path="MyPortfolio/" element={<Home />} />
//             <Route path="MyPortfolio/about" element={<About />} />
//             <Route path="MyPortfolio/projects" element={<Projects />} />
//             <Route path="MyPortfolio/skills" element={<Skills />} />
//           </Routes>
//         </AnimatePresence>
//         </main>
//         {location.pathname !== "MyPortfolio/" && <Footer />}
//       </motion.div>
//     </Router>
//   );
// }

// export default App;



function App() {
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen"
    >
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/MyPortfolio/" element={<Home />} />
            <Route path="/MyPortfolio/about" element={<About />} />
            <Route path="/MyPortfolio/projects" element={<Projects />} />
            <Route path="/MyPortfolio/skills" element={<Skills />} />
          </Routes>
        </AnimatePresence>
      </main>
      {location.pathname !== "/MyPortfolio/" && <Footer />}
    </motion.div>
  );
}

function Wrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Wrapper;