export default function About() {
  const values = [
    { label: "01", title: "Innovation", desc: "Pushing boundaries with the latest tech stacks." },
    { label: "02", title: "Precision", desc: "Pixel-perfect designs that function flawlessly." },
    { label: "03", title: "Impact", desc: "Building tools that drive real growth for startups." },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Mission Statement */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              We are a collective of designers and developers dedicated to <span className="text-innova-red">shaping the future.</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Innova was born out of a desire to simplify the digital landscape. 
              We don't just build websites; we create digital ecosystems that 
              help startups scale at the speed of thought.
            </p>
          </div>

          {/* Right Side: Core Values List */}
          <div className="space-y-12">
            {values.map((v, i) => (
              <div key={i} className="flex gap-8 border-b border-gray-100 pb-8 last:border-0">
                <span className="text-sm font-mono text-innova-red font-bold uppercase tracking-widest">
                  {v.label}
                </span>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold">{v.title}</h4>
                  <p className="text-gray-500">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}