import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      // Scroll to first error
      const firstError = Object.keys(errors)[0]; // Note: validate() updates state, but here we need immediate check. 
      // Actually state update is async, so we should check the result of validate logic or re-calculate.
      // Better approach: validate() returns isValid. We can re-run logic or trust state if we move validate inside or use immediate result.

      // Let's modify validate to return the errors object for checking
      const tempErrors = {};
      if (!formData.name.trim()) tempErrors.name = "Name is required";
      if (!formData.email.trim()) {
        tempErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        tempErrors.email = "Email is invalid";
      }
      if (!formData.message.trim()) tempErrors.message = "Message is required";

      if (Object.keys(tempErrors).length > 0) {
        const firstErrorKey = Object.keys(tempErrors)[0];
        const element = document.getElementById(firstErrorKey);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitMessage("Message received. I'll be in touch within 24 hours.");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", phone: "", category: "", message: "" });
      setErrors({});
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1500);
  };

  // Reusable Form Component to avoid duplication logic
  const ContactForm = ({ isMobile = false }) => (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label className="block text-gray-400 text-sm font-bold mb-2 uppercase">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full bg-black/40 border rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors ${errors.name ? 'border-red-500' : 'border-white/10'}`}
          placeholder="Enter Your Name"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>
      <div>
        <label className="block text-gray-400 text-sm font-bold mb-2 uppercase">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full bg-black/40 border rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors ${errors.email ? 'border-red-500' : 'border-white/10'}`}
          placeholder="your@email.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      <div>
        <label className="block text-gray-400 text-sm font-bold mb-2 uppercase">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors"
          placeholder="+91 98765 43210"
        />
      </div>
      <div>
        <label className="block text-gray-400 text-sm font-bold mb-2 uppercase">Project Type</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors appearance-none"
        >
          <option value="">Select a category</option>
          <option value="frontend">Frontend Development</option>
          <option value="fullstack">Full Stack Application</option>
          <option value="freelance">Freelance Project</option>
          <option value="career">Career Opportunity</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-400 text-sm font-bold mb-2 uppercase">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`w-full bg-black/40 border rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-white/10'}`}
          placeholder="Tell me about your project or opportunity..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {submitMessage && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-400 text-center font-medium mt-4"
        >
          {submitMessage}
        </motion.div>
      )}
    </form>
  );

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-grow px-6 md:px-16 py-20 flex items-center justify-center">
        <div className="max-w-7xl w-full">

          {/* ==================== MOBILE VIEW (md:hidden) ==================== */}
          {/* Vertical Stack: Text -> Form -> Custom Links */}
          <div className="md:hidden flex flex-col gap-12 max-w-4xl mx-auto">

            {/* 1. Hero Text Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6"
            >
              <h1 className="text-4xl font-bold leading-tight">
                Let's Build Something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Extraordinary.</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                I'm currently accepting new projects and opportunities. Whether you have a clear roadmap or just a spark of an idea, let's discuss how we can bring it to life with precision and creativity.
              </p>
            </motion.div>

            {/* 2. Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 p-6 rounded-3xl border border-white/10"
            >
              <ContactForm isMobile={true} />
            </motion.div>

            {/* 3. Contact Links - Mobile Specific Layout */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4 pb-4"
            >
              {/* Row 1: LinkedIn (Left) --- Phone (Right) */}
              <div className="flex justify-between items-center mb-8">
                {/* LinkedIn Left */}
                <a
                  href="https://linkedin.com/in/dinesh-r-24209520b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-xl group-hover:bg-cyan-500/20 transition-colors">
                    🌐
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">LinkedIn</p>
                    <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">Dinesh Raj</p>
                  </div>
                </a>

                {/* Phone Right */}
                {/* Phone Right */}
                <a
                  href="tel:+919080192044"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-xl group-hover:bg-purple-500/20 transition-colors">
                    📱
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Phone</p>
                    <p className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors">+91 90801-92044</p>
                  </div>
                </a>
              </div>

              {/* Row 2: Email (Center) */}
              <div className="flex justify-center">
                <a
                  href="mailto:dinesh.apply.in@gmail.com"
                  className="flex flex-col items-center gap-3 group text-center"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-2xl group-hover:bg-green-500/20 transition-colors">
                    ✉️
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Email Me</p>
                    <p className="text-lg font-medium text-white group-hover:text-green-400 transition-colors">dinesh.apply.in@gmail.com</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

          {/* ==================== DESKTOP VIEW (hidden md:grid) ==================== */}
          {/* Original Side-by-Side Grid Layout */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

            {/* Value Prop Side (Left) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-cyan-500 font-bold tracking-widest uppercase mb-4">Contact Me</h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Let's Build Something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Extraordinary.</span>
              </h1>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                I'm currently accepting new projects and opportunities.
                Whether you have a clear roadmap or just a spark of an idea, let's discuss how we can bring it to life with precision and creativity.
              </p>

              <div className="space-y-8">
                <div className="flex items-start md:items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-2xl border border-white/10 flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-bold uppercase">Email</p>
                    <a href="mailto:dinesh.apply.in@gmail.com" className="text-xl font-medium hover:text-cyan-400 transition-colors">dinesh.apply.in@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start md:items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-2xl border border-white/10 flex-shrink-0">
                    🌐
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-bold uppercase">LinkedIn</p>
                    <a href="https://linkedin.com/in/dinesh-r-24209520b/" target="_blank" rel="noopener noreferrer" className="text-xl font-medium hover:text-cyan-400 transition-colors">Dinesh Raj</a>
                  </div>
                </div>
                <div className="flex items-start md:items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-2xl border border-white/10 flex-shrink-0">
                    📱
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-bold uppercase">Phone</p>
                    <a href="tel:+919080192044" className="text-xl font-medium hover:text-cyan-400 transition-colors">+91 90801-92044</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Side (Right) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 p-6 md:p-12 rounded-3xl border border-white/10"
            >
              <ContactForm />
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
