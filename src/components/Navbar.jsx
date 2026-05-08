import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-50">
      <div className="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl tracking-tighter uppercase">Innova</Link>

        <div className="space-x-8 text-sm font-medium text-gray-600 hidden md:flex">
          <Link to="/" className="hover:text-innova-red transition-colors">Home</Link>
          <Link to="/about" className="hover:text-innova-red transition-colors">About</Link>
          <Link to="/services" className="hover:text-innova-red transition-colors">Services</Link>
          <Link to="/contact" className="hover:text-innova-red transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}