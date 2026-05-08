export default function Footer() {
  const links = ["Services", "About Us", "Projects", "Pricing", "FAQ'S", "Contact Us"];
  const socials = ["Facebook", "Instagram", "Twitter/X", "Linkedin"];

  return (
    <footer className="bg-white pt-20 pb-10 px-6 md:px-12 lg:px-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        
        {/* Column 1: Brand info */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-innova-red rounded-full opacity-80"></div>
             <span className="font-bold text-2xl tracking-tighter uppercase">Innova</span>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            The future of African business is digital. At Innova, we're building it one business at a time. 
            We work alongside SMEs and professionals to design custom digital solutions that 
            don't just solve today's problems, but lay the foundation for tomorrow's growth.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="grid grid-cols-1 gap-4">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-lg font-bold hover:text-innova-red transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Column 3: Socials */}
        <div className="space-y-0">
          {socials.map((social) => (
            <a 
              key={social} 
              href="#" 
              className="group flex justify-between items-center py-4 border-b border-gray-100 hover:text-innova-red transition-colors"
            >
              <span className="text-lg font-bold">{social}</span>
              <span className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-gray-50 flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-gray-400">
        <p>© innova limited | Licences</p>
      </div>
    </footer>
  );
}