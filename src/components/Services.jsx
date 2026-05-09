import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom Company web portfolios and applications optimized for speed, scalability, and SEO.",
      tags: ["company websites", "E-commerce"],
      size: "md:col-span-1",
      icon: "🌐"
    },
    {
      title: "Long-term Tech Partnership",
      description: "We don't disappear after go-live. Innova stays with you as your dedicated technology partner—maintaining your systems and evolving your tools as your business grows.",
      tags: ["IT-department-as-a-service"],
      size: "md:col-span-1",
      icon: "🤝"
    },
    {
      title: "SaaS Products",
      description: "Industry-specific software like Clinic CRMs and Payroll systems. Powerful out of the box, and flexible enough to grow with your team.",
      tags: ["CRMS", "PayRoll", "Clinic Management"],
      size: "md:col-span-2", // This card will be wider to stand out
      icon: "🚀"
    },
    {
      title: "System Automation",
      description: "Automate workflows—like calling clients for lens renewals or weather-based product matches—to save time and reduce human error.",
      tags: ["workflow automation", "CRM integrations"],
      size: "md:col-span-2",
      icon: "⚙️"
    }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-innova-red font-bold uppercase tracking-widest text-xs">Our Expertise</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mt-4 mb-6">
            Uncover our <br /> capabilities
          </h2>
          <p className="text-xl text-gray-500 max-w-lg leading-relaxed">
            We offer a full suite of digital solutions to take your company from player to market leader.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${service.size} bg-gray-50 rounded-[2.5rem] p-10 md:p-12 flex flex-col justify-between border border-gray-100 hover:border-innova-red/20 hover:shadow-2xl hover:shadow-red-50 transition-all group`}
            >
              <div>
                <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-500 inline-block">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-innova-red transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-8 text-lg">
                  {service.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, j) => (
                  <span 
                    key={j} 
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-white border border-gray-100 px-4 py-2 rounded-full group-hover:border-innova-red/30 group-hover:text-innova-red transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}