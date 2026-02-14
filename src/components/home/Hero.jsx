import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const { scrollY } = useScroll();

  // Mouse move handler replaced with static clean logic if needed, 
  // currently we just want to remove the unused listener logic if it's not being used for parity.
  // Actually, keeping useHovered for the text effect.

  // Parallax effect for background elements
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -50]);

  return (
    <section className="relative min-h-screen px-6 md:px-16 pt-32 pb-16 flex flex-col md:flex-row items-center justify-center overflow-hidden bg-[var(--bg)] text-[var(--text)]">

      {/* Interactive 3D Background with Parallax */}
      <div className="absolute inset-0 md:hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 bg-gradient-to-br from-purple-600/30 via-blue-600/20 to-cyan-600/30 rounded-2xl backdrop-blur-md border border-white/20 shadow-2xl"
            animate={{
              y: [0, -30, 0, 30, 0],
              rotate: [0, 5, -5, 0, 5],
              scale: [1, 1.1, 1.05, 1.1, 1],
              opacity: [0.4, 0.6, 0.8, 1, 0.8],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
            style={{
              left: `${5 + i * 12}%`,
              top: `${15 + (i % 2) * 30}%`,
              y: backgroundY,
            }}
            whileHover={{
              scale: 1.2,
              rotate: 10,
              transition: { duration: 0.3 }
            }}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex-1 text-center md:text-left flex flex-col items-center md:items-start">

        {/* Interactive Heading with Magnetic Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 p-4 md:p-0"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-cyan-400 font-bold text-sm md:text-xl mb-4 tracking-[0.2em] uppercase"
          >
            HELLO, I'M DINESH
          </motion.h2>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter text-white mb-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              textShadow: isHovered ? "0 0 30px rgba(34, 211, 238, 0.3)" : "none"
            }}
          >
            I Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Digital Experiences
            </span>
            <br />
            That Matter.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed px-4 md:px-0"
          >
            A <span className="text-white font-medium">Full Stack Developer</span> focused on crafting scalable, high-performance applications. I turn complex problems into elegant, user-centric solutions.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center md:justify-start mb-12"
        >
          <Link to="/work">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              View My Work
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-all"
            >
              Let's Talk
            </motion.button>
          </Link>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-3 justify-center md:justify-start"
        >
          {["React", "Next.js", "Node.js", "TypeScript", "Tailwind"].map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 backdrop-blur-sm"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Visual Element (Desktop) */}
      <motion.div
        className="hidden md:block w-1/2 relative h-[600px]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        {/* Abstract 3D-like shapes or Code Window simulation could go here */}
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-80 h-96 bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-6 hover:rotate-0 transition-all duration-500">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="space-y-3 font-mono text-sm">
              <div className="text-purple-400">const <span className="text-yellow-400">developer</span> = <span className="text-cyan-400">{"{"}</span></div>
              <div className="pl-4 text-gray-300">name: <span className="text-green-400">'Dinesh'</span>,</div>
              <div className="pl-4 text-gray-300">role: <span className="text-green-400">'Full Stack Architect'</span>,</div>
              <div className="pl-4 text-gray-300">skills: <span className="text-cyan-400">['React', 'Node', 'System Design']</span>,</div>
              <div className="pl-4 text-gray-300">hardWorker: <span className="text-blue-400">true</span></div>
              <div className="text-cyan-400">{"}"}</div>
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
