import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Most startup MVP projects take between 4 to 8 weeks from initial discovery to final launch, depending on the complexity of the features."
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes, we provide ongoing maintenance packages that include security updates, performance monitoring, and iterative feature development."
    },
    {
      question: "Can you help with branding as well as development?",
      answer: "Absolutely. We believe great code deserves a great brand. Our team handles everything from logo design to full-scale digital identity."
    },
    {
      question: "What tech stack do you use?",
      answer: "We specialize in the modern web: React, Vite, Tailwind CSS, and headless backends to ensure your site is fast, secure, and easy to scale."
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white text-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight mb-12 text-center">Common Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-100">
              <button 
                onClick={() => toggle(i)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-innova-red transition-colors"
              >
                <span className="text-xl font-semibold">{faq.question}</span>
                <span className={`text-2xl transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-48 pb-6' : 'max-h-0'}`}>
                <p className="text-gray-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}