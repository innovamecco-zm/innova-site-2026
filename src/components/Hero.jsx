import { motion } from 'framer-motion';
import SkylineImg from '../assets/hero_nnova.png'; // Ensure this matches your filename in assets

export default function Hero() {
  return (
    <section className="bg-white text-black py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-innova-red">
            INNOVA
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
            Elevating African Business through Technology.
          </h1>
          <p className="text-xl text-gray-500 max-w-xl">
            We partner with you to transform the way your business operates  building tailored digital tools that solve real problems, strengthen customer relationships, and unlock the growth you've been working towards.
          </p>
          <button className="bg-black text-white px-10 py-5 rounded-full font-medium hover:bg-innova-red transition-colors">
            Get Started →
          </button>
        </motion.div>

        {/* Right Side: The Image with Parallax & Rounding */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[3rem] shadow-2xl"
        >
          {/* Subtle Parallax Effect on the Image itself */}
          <motion.img 
            src={SkylineImg} 
            alt="Lusaka Skyline Sunset"
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.2, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          
          {/* Subtle brand text integrated into visual */}
          <div className="absolute bottom-10 right-10 text-white/40 font-bold uppercase tracking-widest text-[10px]">
            Innova Lusaka
          </div>
        </motion.div>

      </div>
    </section>
  );
}