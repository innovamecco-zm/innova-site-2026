import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
        
        {/* Left Side: Text */}
        <div className="space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Ready to <br /> <span className="text-innova-red">innovate?</span></h2>
          <p className="text-xl text-gray-500 leading-relaxed max-w-md">
            Have a project in mind or just want to chat about the future of tech? 
            Drop us a message and we'll get back to you within 24 hours.
          </p>
          <div className="space-y-4 pt-4">
            <p className="font-bold text-gray-900">General Inquiries</p>
            <p className="text-innova-red text-lg font-medium underline">hello@innova-tech.com</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <motion.form 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Name</label>
              <input type="text" className="w-full bg-white border border-gray-100 rounded-2xl p-4 focus:ring-2 focus:ring-innova-red outline-none transition-all" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Email</label>
              <input type="email" className="w-full bg-white border border-gray-100 rounded-2xl p-4 focus:ring-2 focus:ring-innova-red outline-none transition-all" placeholder="john@company.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Message</label>
            <textarea rows="4" className="w-full bg-white border border-gray-100 rounded-2xl p-4 focus:ring-2 focus:ring-innova-red outline-none transition-all" placeholder="Tell us about your project..."></textarea>
          </div>
          <button className="w-full bg-black text-white py-5 rounded-2xl font-bold hover:bg-innova-red transition-colors duration-300">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}