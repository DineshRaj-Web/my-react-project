import { motion } from "framer-motion";

const JourneyTimeline = ({ isInView }) => {
  const professionalJourney = [
    {
      year: "2026 - Present",
      title: "Full Stack Engineer",
      company: "QuartrDesign",
      description: "Leading frontend architecture and optimizing backend performance. Reduced load times by 40% and implemented a scalable design system.",
      skills: ["React JS", "Node.js", "MySQL", "Strapi", "Prisma"]
    },
    {
      year: "2026",
      title: "Frontend Intern",
      company: "QuartrDesign",
      description: "Collaborated with senior devs to build core UI components. Mastered modern React patterns and state management.",
      skills: ["HTML", "CSS", "JavaScript", "React JS","MySQL"]
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mb-32"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:25px_25px]" />

        {/* Timeline Glow Effects */}
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/20 via-purple-500/20 to-transparent blur-sm hidden md:block"
        />

        {/* Ambient Glows */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.04, 0.08, 0.04]
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/8 to-blue-500/6 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tr from-purple-500/6 to-pink-500/4 rounded-full blur-3xl"
        />
      </div>

      {/* Enhanced Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
          My Journey
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"
        />
      </motion.div>

      {/* Enhanced Timeline */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-8">
        {/* Central Timeline Line - Mobile: simplified vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:w-px bg-gradient-to-b from-cyan-500/30 md:from-cyan-500/50 via-purple-500/30 md:via-purple-500/50 to-transparent hidden md:block transform md:-translate-x-1/2" />

        {/* Mobile Timeline Line - Visible on mobile */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/20 via-transparent to-purple-500/20 md:hidden" />

        {/* Timeline Items */}
        <div className="space-y-12 md:space-y-16 relative">
          {professionalJourney.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.8, ease: "easeOut" }}
              className={`relative flex gap-6 md:gap-8 items-start ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Node - Mobile: left-aligned dots */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.4, type: "spring" }}
                className="absolute left-0 md:left-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 border-2 md:border-4 border-black shadow-[0_0_15px_rgba(6,182,212,0.6)] md:shadow-[0_0_20px_rgba(6,182,212,0.8)] z-20 transform md:-translate-x-1/2 mt-8 md:mt-0 flex items-center justify-center flex-shrink-0"
              >
                <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-white" />
              </motion.div>

              {/* Mobile: Spacer for timeline node */}
              <div className="w-8 flex-shrink-0 md:hidden" />

              {/* Connecting Line - Mobile: hidden, Desktop: visible */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                className={`hidden md:block absolute top-8 left-1/2 w-8 h-px bg-gradient-to-r ${
                  index % 2 === 0 ? "from-cyan-400/50" : "from-purple-400/50"
                } transform -translate-x-1/2 -translate-y-1/2 origin-center`}
              />

              {/* Content Card */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className={`flex-1 w-full group`}
              >
                <div className="relative p-6 md:p-8 bg-gradient-to-br from-white/8 via-white/4 to-transparent border border-white/10 rounded-2xl backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-gradient-to-br group-hover:from-cyan-500/5 group-hover:via-blue-500/3 group-hover:to-purple-500/5">

                  {/* Card Border Corners */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/40 rounded-tl-2xl transition-all duration-300 group-hover:border-cyan-400/80" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400/40 rounded-tr-2xl transition-all duration-300 group-hover:border-cyan-400/80" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400/40 rounded-bl-2xl transition-all duration-300 group-hover:border-cyan-400/80" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400/40 rounded-br-2xl transition-all duration-300 group-hover:border-cyan-400/80" />

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 via-transparent to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-300" />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                      <motion.h3
                        className="text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors duration-300"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                      >
                        {item.title}
                      </motion.h3>
                      <motion.span
                        className="text-sm text-cyan-400 font-mono bg-gradient-to-r from-cyan-900/20 to-purple-900/20 px-3 py-1 rounded-full border border-cyan-400/20 group-hover:border-cyan-400/40 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6 + index * 0.2, duration: 0.4 }}
                      >
                        {item.year}
                      </motion.span>
                    </div>

                    <motion.p
                      className="text-purple-300 font-medium mb-4 group-hover:text-purple-200 transition-colors duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
                    >
                      {item.company}
                    </motion.p>

                    <motion.p
                      className="text-gray-300 text-sm mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                    >
                      {item.description}
                    </motion.p>

                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.9 + index * 0.2, duration: 0.5 }}
                    >
                      {item.skills.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 1.0 + index * 0.2 + techIndex * 0.1, duration: 0.3 }}
                          className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-white/10 to-white/5 text-gray-200 border border-white/10 hover:border-cyan-400/30 hover:text-cyan-200 transition-all duration-200 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Inner Glow */}
                  <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-transparent via-cyan-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Spacer for desktop */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default JourneyTimeline;
