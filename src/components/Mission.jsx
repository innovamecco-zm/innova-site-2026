import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Mission() {
  const containerRef = useRef(null);
  
  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax: Move the block up by 100 pixels as we scroll past
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8 order-2 lg:order-1 relative z-10"
        >
          <div className="inline-flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-full">
            <span className="bg-innova-red text-white p-1 rounded-full text-[10px]">⭐</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-800">Our Mission</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900">
            Empowering You
          </h2>
          
          <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
            To equip every African business with the digital tools, systems and 
            partnerships they need to compete, grow and lead in a global economy.
          </p>

          <button className="bg-innova-red text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-innova-red-dark transition-all transform hover:scale-105 group">
            Join Our Team <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>

        {/* Right Side: Parallax Decorative Block */}
        <motion.div 
          style={{ y: yRange }} // This applies the parallax movement
          className="relative h-[400px] md:h-[600px] w-full rounded-[3rem] overflow-hidden order-1 lg:order-2 shadow-2xl"
        >
          {/* High-End Tech Aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-12">
             
             {/* Animated Core */}
             <motion.div 
               animate={{ 
                 rotate: [0, 360],
               }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="w-64 h-64 border border-innova-red/20 rounded-full flex items-center justify-center border-dashed"
             >
               <div className="w-48 h-48 border border-white/5 rounded-full flex items-center justify-center">
                 <div className="w-20 h-20 bg-innova-red rounded-full blur-3xl opacity-40 animate-pulse"></div>
               </div>
             </motion.div>

             {/* Floating UI Elements (Simulated) */}
             <div className="absolute top-1/4 left-1/4 w-12 h-1 bg-innova-red/40 rounded-full"></div>
             <div className="absolute bottom-1/3 right-1/4 w-8 h-8 border border-white/10 rounded-lg rotate-12"></div>
          </div>
          
          {/* Subtle noise/glass overlay */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"></div>
        </motion.div>

      </div>
    </section>
  );
}