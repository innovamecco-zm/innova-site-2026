import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const steps = [
  {
    id: "goal",
    question: "What is your primary goal?",
    options: [
      { label: "Build a new Web Presence", value: "Web Portfolio" },
      { label: "Automate Manual Workflows", value: "Automation" },
      { label: "Launch a SaaS/Product", value: "SaaS Product" },
      { label: "Long-term Tech Partnership", value: "Partnership" }
    ]
  },
  {
    id: "industry",
    question: "Which industry do you operate in?",
    options: [
      { label: "Retail & E-commerce", value: "Retail" },
      { label: "Healthcare & Clinics", value: "Healthcare/Clinic" },
      { label: "Finance & Fintech", value: "Finance" },
      { label: "Other", value: "Other" }
    ]
  }
];

export default function DiscoveryQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleAnswer = (id, value) => {
    setAnswers({ ...answers, [id]: value });
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS IDs from environment variables
    const serviceID = import.meta.env.VITE_MAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_MAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_MAILJS_PUBLIC_KEY;

    const templateParams = {
      user_email: e.target.email.value,
      project_goal: answers.goal,
      industry: answers.industry,
      message: `New Lead from Innova: Interested in ${answers.goal} for the ${answers.industry} sector.`
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert("Roadmap request sent! Check your inbox soon.");
        setIsFinished(false); // Reset or redirect
        setCurrentStep(0);
      })
      .catch((err) => console.error("Failed to send:", err))
      .finally(() => setLoading(false));
  };

  return (
    <section className="py-24 px-6 bg-white min-h-[600px] flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <span className="text-innova-red font-bold text-xs uppercase tracking-[0.2em]">
                  Step {currentStep + 1} of {steps.length}
                </span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                  {steps[currentStep].question}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {steps[currentStep].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(steps[currentStep].id, option.value)}
                    className="p-8 text-left border-2 border-gray-100 rounded-[2rem] hover:border-innova-red hover:bg-red-50 transition-all group"
                  >
                    <span className="text-xl font-bold group-hover:text-innova-red transition-colors">
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="final"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-8 bg-gray-50 p-12 rounded-[3rem]"
            >
              <h2 className="text-5xl font-bold tracking-tighter">Ready for lift-off.</h2>
              <p className="text-xl text-gray-500 max-w-md mx-auto">
                We'll prepare a {answers.goal} strategy for your business. Where should we send it?
              </p>
              <form onSubmit={sendEmail} className="space-y-4">
                <input 
                  name="email"
                  type="email" 
                  required
                  placeholder="yourname@company.com" 
                  className="w-full p-6 rounded-2xl border-none ring-2 ring-gray-100 focus:ring-innova-red transition-all outline-none"
                />
                <button 
                  disabled={loading}
                  className="w-full bg-black text-white p-6 rounded-2xl font-bold hover:bg-innova-red transition-all disabled:bg-gray-400"
                >
                  {loading ? "Sending..." : "Get My Roadmap →"}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}