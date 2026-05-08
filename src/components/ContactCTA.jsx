export default function ContactCTA() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-6xl mx-auto bg-[#fff1f1] rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden border border-red-50">
        {/* Optional: Add a subtle wavy SVG background here if you have one */}
        
        <div className="relative z-10 flex flex-col items-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <span className="text-innova-red text-lg">✉️</span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-800">
              Let's make it happen.
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 max-w-3xl">
            Got A Business Problem Technology Can Solve?
          </h2>
          
          <button className="bg-innova-red text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-innova-red-dark transition-all transform hover:scale-105">
            Get In Touch <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}