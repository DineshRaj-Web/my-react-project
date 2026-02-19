import { motion } from "framer-motion";
import { useState } from "react";

const ContactForm = ({ formData, handleChange, handleSubmit, errors, isSubmitting, submitMessage }) => (
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
        id="phone"
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
        id="category"
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

    if (Object.keys(tempErrors).length > 0) {
      // Explicitly define the order of fields to check top-to-bottom
      const fieldOrder = ["name", "email", "phone", "category", "message"];

      // Find the first field in the physical order that has an error
      const firstErrorKey = fieldOrder.find(key => tempErrors[key]);

      if (firstErrorKey) {
        const element = document.getElementById(firstErrorKey);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.focus();
        }
      }
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

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
              <ContactForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
                isSubmitting={isSubmitting}
                submitMessage={submitMessage}
              />
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
                  href="https://www.linkedin.com/in/dinesh-webdevelopment/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-xl group-hover:bg-cyan-500/20 transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
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
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
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
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
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
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-bold uppercase">Email</p>
                    <a href="mailto:dinesh.apply.in@gmail.com" className="text-xl font-medium hover:text-cyan-400 transition-colors">dinesh.apply.in@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start md:items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-2xl border border-white/10 flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-bold uppercase">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/dinesh-webdevelopment/" target="_blank" rel="noopener noreferrer" className="text-xl font-medium hover:text-cyan-400 transition-colors">Dinesh Raj</a>
                  </div>
                </div>
                <div className="flex items-start md:items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-2xl border border-white/10 flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
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
              <ContactForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
                isSubmitting={isSubmitting}
                submitMessage={submitMessage}
              />
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
