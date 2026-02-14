import { motion } from "framer-motion";
import { useState } from "react";

const HireMePopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitMessage("Thank you for your interest! I'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        company: '',
        project: '',
        message: ''
      });
    } catch {
      setSubmitMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 5000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Popup Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative bg-black/90 border border-white/20 rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Hire Me
          </h2>
          <p className="text-gray-400">
            Let's discuss your project. Fill out the form below and I'll get back to you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-black/60 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-all duration-300 text-sm"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-black/60 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-all duration-300 text-sm"
                placeholder="sample@gmail.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-black/60 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-all duration-300 text-sm"
              placeholder="Acme Corp"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1">Service</label>
            <select
              name="project"
              value={formData.project}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-black/60 border border-white/20 rounded-lg text-white focus:border-cyan-500/50 focus:outline-none transition-all duration-300 text-sm"
            >
              <option value="">Select a service</option>
              <option value="website">Website Development</option>
              <option value="webapp">Web Application</option>
              <option value="mobile">Mobile App</option>
              <option value="uiux">UI/UX Design</option>
              <option value="consulting">Consulting</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 bg-black/60 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-all duration-300 resize-none text-sm"
              placeholder="Tell me about your project..."
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Project Request"}
          </motion.button>

          {submitMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg text-center ${submitMessage.includes("Thank you")
                ? "bg-green-500/20 border border-green-500/50 text-green-400"
                : "bg-red-500/20 border border-red-500/50 text-red-400"
                }`}
            >
              {submitMessage}
            </motion.div>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default HireMePopup;
