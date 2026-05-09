import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Services from './components/Services';
import Contact from './components/Contact';
import Compliance from './components/Compliance'; // Import the component
import ScrollToTop from './components/ScrollToTop';
import DiscoveryQuiz from './components/DiscoveryQuiz';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="min-h-screen bg-white font-sans antialiased">
        <Navbar />
        
        <Routes>
          <Route path="/get-started" element={<DiscoveryQuiz />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<div className="pt-20"><Services /></div>} />
          <Route path="/contact" element={<div className="pt-20"><Contact /></div>} />
          {/* Dedicated Compliance Route */}
          <Route path="/compliance" element={<div className="pt-20"><Compliance /></div>} />
        </Routes>

        <Footer />
      </main>
    </Router>
  );
}

export default App;