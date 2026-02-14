import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHireMe } from "../../context/HireMeContext";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState("");
  const { openHireMePopup } = useHireMe();

  const socialLinks = [
    { name: "GitHub", icon: "🐙", url: "https://github.com" },
    { name: "LinkedIn", icon: "💼", url: "https://linkedin.com" },
    { name: "Twitter", icon: "🐦", url: "https://twitter.com" },
    { name: "Email", icon: "✉️", url: "mailto:dinesh.rmrf@gmail.com" }
  ];

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Work", url: "/work" },
    { name: "Skills", url: "/skills" },
    { name: "Contact", url: "/contact" }
  ];

  const services = [
    { name: "Frontend Development", url: "/contact?service=frontend" },
    { name: "Full Stack Applications", url: "/contact?service=fullstack" },
    { name: "UI/UX Design", url: "/contact?service=uiux" },
    { name: "API Development", url: "/contact?service=api" },
    { name: "Performance Optimization", url: "/contact?service=optimization" }
  ];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);
    setSubscribeMessage("");

    try {
      // Send email notification using EmailJS or similar service
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'YOUR_SERVICE_ID',
          template_id: 'YOUR_TEMPLATE_ID',
          user_id: 'YOUR_USER_ID',
          template_params: {
            to_email: 'dinesh@example.com',
            from_email: email,
            subject: 'New Newsletter Subscription',
            message: `New subscriber: ${email}`
          }
        })
      });

      if (response.ok) {
        setSubscribeMessage("Thank you for subscribing! Check your email for confirmation.");
        setEmail("");
      } else {
        // Fallback: Send to your backend API
        const fallbackResponse = await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email })
        });

        if (fallbackResponse.ok) {
          setSubscribeMessage("Successfully subscribed! You'll receive updates soon.");
          setEmail("");
        } else {
          setSubscribeMessage("Subscription failed. Please try again.");
        }
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setSubscribeMessage("Subscription failed. Please try again later.");
    } finally {
      setIsSubscribing(false);

      // Clear message after 5 seconds
      setTimeout(() => setSubscribeMessage(""), 5000);
    }
  };

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-purple-900/10 to-transparent" />
        <div className="absolute inset-0 opacity-5">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-cyan-500/20"
              style={{
                left: `${(i % 5) * 25}%`,
                top: `${Math.floor(i / 5) * 50}%`,
                width: '80px',
                height: '80px'
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Dinesh Raj
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Professional Software Engineer specializing in building exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-black/40 border border-white/20 rounded-lg flex items-center justify-center text-lg hover:border-cyan-500/50 transition-all duration-300"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.05, ease: "easeOut" }}
                >
                  <a
                    href={link.url}
                    onClick={(e) => {
                      if (link.url === "/") {
                        e.preventDefault();
                        openHireMePopup();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-cyan-400 rounded-full" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.05, ease: "easeOut" }}
                >
                  <a
                    href={service.url}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 cursor-pointer"
                  >
                    <span className="w-1 h-1 bg-purple-400 rounded-full" />
                    {service.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Stay Connected</h4>
            <p className="text-gray-400 text-sm">
              Subscribe to get updates on new projects and tech insights.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-2 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-all duration-300"
                required
                disabled={isSubscribing}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: isSubscribing ? 1 : 1.02 }}
                whileTap={{ scale: isSubscribing ? 1 : 0.98 }}
                disabled={isSubscribing}
                className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubscribing ? "Subscribing..." : "Subscribe"}
              </motion.button>

              {/* Success/Error Message */}
              {subscribeMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-3 rounded-lg text-sm ${subscribeMessage.includes("Thank you") || subscribeMessage.includes("Successfully")
                    ? "bg-green-500/20 border border-green-500/50 text-green-400"
                    : "bg-red-500/20 border border-red-500/50 text-red-400"
                    }`}
                >
                  {subscribeMessage}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} Dinesh Raj. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <span>Designed & Engineered by</span>
            <span className="text-white">Dinesh Raj</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

