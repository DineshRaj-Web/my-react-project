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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitMessage("Message received. I'll be in touch within 24 hours.");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", phone: "", category: "", message: "" });
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-grow px-6 md:px-16 py-20 flex items-center justify-center">
        <div className="max-w-7xl w-full">
          {/* ... (existing grid content) ... */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Value Prop Side */}
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
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-2xl border border-white/10">
                    📧
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-bold uppercase">Email</p>
                    <a href="mailto:dinesh.rmrf@gmail.com" className="text-xl font-medium hover:text-cyan-400 transition-colors">dinesh.rmrf@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-2xl border border-white/10">
                    🌐
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-bold uppercase">LinkedIn</p>
                    <a href="https://linkedin.com/in/dinesh-r-24209520b/" target="_blank" rel="noopener noreferrer" className="text-xl font-medium hover:text-cyan-400 transition-colors">Dinesh Raj</a>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-2xl border border-white/10">
                    📱
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-bold uppercase">Phone</p>
                    <a href="tel:+919080192044" className="text-xl font-medium hover:text-cyan-400 transition-colors">+91 90801-92044</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-400 text-sm font-bold mb-2 uppercase"> Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-bold mb-2 uppercase">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="your@email.com"
                  />
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
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
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
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
