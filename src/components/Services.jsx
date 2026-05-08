export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom Company web portfolials and applications optimized for speed, scalability, and SEO.",
      tags: ["company websites"]
    },
    {
      title: "Long-term Technology Partnership",
      description: "We don't disappear after go-live. Innova stays with you as your dedicated technology partner — maintaining your systems, evolving your tools as your business grows, and always being the team you can call when something needs fixing or building.",
      tags: ["IT-department-as-a-service"]
    },
    {
      title: "SaaS Products",
      description: "We develop and manage ready-to-use software products built for specific industries — so you can get started faster without waiting for a fully custom build. Powerful out of the box, and flexible enough to grow with you.",
      tags: ["CRMS", "PayRoll"]
    },
    {
      title: "System Automation & Integration",
      description: "Manual processes slow businesses down. We connect your tools, automate your workflows and build systems that work quietly in the background — saving your team time and reducing the risk of human error.",
      tags: ["time tracker", "industrial automation"]
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Uncover our capabilities</h2>
          <p className="text-gray-500 max-w-lg">
            We offer a full suite of digital solutions to take your company from player to market leader.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-3xl overflow-hidden">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="bg-white p-10 md:p-14 hover:bg-gray-50 transition-colors group flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-innova-red transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {service.description}
                </p>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, j) => (
                  <span 
                    key={j} 
                    className="text-xs font-semibold uppercase tracking-widest text-gray-400 border border-gray-200 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}