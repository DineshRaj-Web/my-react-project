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
    {
      name: "GitHub",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
      url: "https://github.com"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      url: "https://linkedin.com/in/dinesh-r-24209520b/"
    },
    {
      name: "X",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.134l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: "https://twitter.com"
    },
    {
      name: "Email",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
        </svg>
      ),
      url: "mailto:dinesh.apply.in@gmail.com"
    }
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
    <footer className="relative bg-black pt-20 pb-10 overflow-hidden">
      {/* Premium Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4 text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Dinesh Raj
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Professional Software Engineer specializing in building exceptional digital experiences with modern web technologies.
            </p>
            <div className="hidden md:flex gap-4 justify-center md:justify-start">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-lg hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links & Services Wrapper */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8 md:gap-12">
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
                    <Link
                      to={link.url}
                      onClick={() => {
                        if (link.url === "/") {
                          openHireMePopup();
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-cyan-400 rounded-full" />
                      {link.name}
                    </Link>
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
                {services.map((service) => (
                  <motion.li
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    <Link
                      to={service.url}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 cursor-pointer"
                    >
                      <span className="w-1 h-1 bg-purple-400 rounded-full" />
                      {service.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Icons (Mobile Only) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:hidden flex gap-4 justify-center py-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-black/50 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                {link.icon}
              </motion.a>
            ))}
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
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all duration-300 backdrop-blur-sm"
                required
                disabled={isSubscribing}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubscribing}
                className="w-full px-4 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold rounded-xl shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-white/10"
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
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
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

