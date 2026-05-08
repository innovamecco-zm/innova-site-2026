import { motion } from 'framer-motion';

export default function Values() {
  const cards = [
    {
      title: "Innovation",
      icon: "⚡",
      desc: "We push the boundaries of what's possible with code, ensuring your startup stays ahead of the curve.",
      color: "bg-white"
    },
    {
      title: "Maintaining Simplicity",
      icon: "☀️",
      desc: "We prioritize ethical standards, transparency, and authenticity. Our operations are built on integrity.",
      color: "bg-white"
    },
    {
      title: "Scalability",
      icon: "📈",
      desc: "Our solutions are built to grow with you, from your first user to your first million.",
      color: "bg-white"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
        
        {/* Left Side: Sticky Text Section */}
        <div className="lg:sticky lg:top-32 h-fit space-y-8">
          <div className="inline-flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-full bg-white">
             <span className="bg-innova-red text-white p-1 rounded-full text-[10px]">👁️</span>
             <span className="text-[10px] font-bold uppercase tracking-widest text-gray-800">Our Vision</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Our Values</h2>
          
          <p className="text-xl text-gray-500 max-w-md leading-relaxed">
            We partner with you to craft a successful business model that authentically 
            reflecting your unique vision.
          </p>

          <button className="bg-innova-red text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
            Get Started →
          </button>
        </div>

        {/* Right Side: The Overlapping Cards */}
        <div className="space-y-12">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              // This creates the "Sticky" overlap effect
              className="sticky w-full border border-gray-200 rounded-[2.5rem] p-10 md:p-14 shadow-xl shadow-gray-200/50 flex flex-col gap-6"
              style={{ 
                top: `${100 + (i * 20)}px`, // Each card stops slightly lower than the last
                backgroundColor: 'white' 
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-innova-red rounded-full flex items-center justify-center text-white text-3xl">
                {card.icon}
              </div>
              <h3 className="text-3xl font-bold tracking-tight">{card.title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}