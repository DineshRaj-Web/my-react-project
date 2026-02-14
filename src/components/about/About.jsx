import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const professionalJourney = [
    {
      year: "2024 - Present",
      title: "Full Stack Engineer",
      company: "QuartrDesign",
      description: "Leading frontend architecture and optimizing backend performance. Reduced load times by 40% and implemented a scalable design system.",
      skills: ["React", "Node.js", "AWS", "System Design"]
    },
    {
      year: "2023",
      title: "Freelance Developer",
      company: "Self-Employed",
      description: "Delivered custom web solutions for 5+ clients. Specialized in high-performance landing pages and interactive dashboards.",
      skills: ["Next.js", "Tailwind", "Freelancing", "Client Management"]
    },
    {
      year: "2022",
      title: "Frontend Intern",
      company: "TechStartup Inc.",
      description: "Collaborated with senior devs to build core UI components. Mastered modern React patterns and state management.",
      skills: ["React", "Redux", "Figma", "Git"]
    }
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-32 overflow-hidden bg-black text-white"
    >
      {/* Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50" />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-16">

        {/* Narrative Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24 md:text-center max-w-4xl mx-auto"
        >
          <h2 className="text-sm font-bold tracking-widest text-cyan-500 mb-4 uppercase">About Me</h2>
          <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-8">
            More Than Just <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Syntax & Semantics.
            </span>
          </h1>
          <p className="text-base md:text-xl text-gray-400 leading-relaxed">
            I'm a developer who bridges the gap between <span className="text-white">creative design</span> and <span className="text-white">technical engineering</span>.
            My journey isn't just about learning languages; it's about solving real-world problems with elegant, scalable code.
            I build software that works as beautifully as it looks.
          </p>
        </motion.div>

        {/* Philosophy Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { title: "Clean Code", desc: "I write code that is readable, maintainable, and scalable. Future-proof development is my standard." },
            { title: "User Centric", desc: "Performance and accessibility aren't afterthoughts. They are the foundation of every user experience I build." },
            { title: "Rapid Iteration", desc: "I ship fast without breaking things. CI/CD pipelines and automated testing ensure stability at speed." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold mb-4 text-cyan-400">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Journey Timeline */}
        <div className="relative">
          <h2 className="text-3xl font-bold mb-12 text-center">My Journey</h2>
          <div className="space-y-12 relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 to-purple-500/50 hidden md:block" />

            {professionalJourney.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                <div className="flex-1 w-full md:w-auto p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <span className="text-sm text-cyan-400 font-mono bg-cyan-900/20 px-2 py-1 rounded">{item.year}</span>
                  </div>
                  <p className="text-purple-400 font-medium mb-4">{item.company}</p>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] z-10 hidden md:block" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
