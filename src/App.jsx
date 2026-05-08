import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Services from './components/Services'; // You can use components directly too
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-white font-sans antialiased">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<div className="pt-20"><Services /></div>} />
          <Route path="/contact" element={<div className="pt-20"><Contact /></div>} />
        </Routes>

        <Footer />
      </main>
    </Router>
  );
}

export default App;