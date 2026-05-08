import { motion } from 'framer-motion';

export default function Compliance() {
  const documents = [
    { title: "Business Registration", status: "Public", icon: "📄" },
    { title: "Security Protocols (ISO)", status: "Request Only", icon: "🔒" },
    { title: "Service Level Agreement", status: "Public", icon: "⚖️" }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-900 text-white rounded-t-[3rem]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <span className="text-innova-red text-xs font-bold uppercase tracking-widest">Trust & Safety</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Compliance & Resources</h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              We operate with full transparency. Access our public documents or request 
              sensitive compliance data directly through our portal.
            </p>
          </div>
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-innova-red hover:text-white transition-all">
            Request Full Audit
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {documents.map((doc, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm group cursor-pointer"
            >
              <div className="text-3xl mb-6">{doc.icon}</div>
              <h3 className="text-xl font-bold mb-2">{doc.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono tracking-tighter uppercase">{doc.status}</span>
                <span className="text-innova-red opacity-0 group-hover:opacity-100 transition-opacity">Download →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}