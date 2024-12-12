import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <Router>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="MyPortfolio2/" element={<Home />} />
            <Route path="MyPortfolio2/about" element={<About />} />
            <Route path="MyPortfolio2/projects" element={<Projects />} />
            <Route path="MyPortfolio2/skills" element={<Skills />} />
          </Routes>
        </AnimatePresence>
      </motion.div>
    </Router>
  );
}

export default App;