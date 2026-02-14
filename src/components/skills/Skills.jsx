import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      desc: "Building immersive, responsive, and accessible user interfaces.",
      skills: [
        { name: "React", level: 90, icon: "⚛️", desc: "Component architecture & Hooks" },
        { name: "TypeScript", level: 85, icon: "📘", desc: "Type-safe robust code" },
        { name: "Tailwind CSS", level: 95, icon: "🎨", desc: "Rapid UI development" },
        { name: "Framer Motion", level: 85, icon: "🎬", desc: "Complex animations" },
        { name: "Next.js", level: 80, icon: "▲", desc: "SSR & Performance" }
      ]
    },
    {
      title: "Backend & Cloud",
      desc: "Architecting scalable server-side solutions and databases.",
      skills: [
        { name: "Node.js", level: 80, icon: "🟢", desc: "Event-driven APIs" },
        { name: "PostgreSQL", level: 75, icon: "🐘", desc: "Relational data modeling" },
        { name: "AWS", level: 65, icon: "☁️", desc: "Cloud infrastructure" },
        { name: "Docker", level: 70, icon: "🐳", desc: "Containerization" },
        { name: "GraphQL", level: 70, icon: "◈", desc: "Efficient data querying" }
      ]
    },
    {
      title: "Tools & Workflow",
      desc: "Streamlining development with modern tooling.",
      skills: [
        { name: "Git", level: 90, icon: "📦", desc: "Version control" },
        { name: "Figma", level: 75, icon: "🎨", desc: "Design to code" },
        { name: "Vite", level: 85, icon: "⚡", desc: "Build tooling" },
        { name: "Jest", level: 70, icon: "🃏", desc: "Unit testing" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-16">
          <h2 className="text-cyan-500 font-bold tracking-widest uppercase mb-4">Technical Arsenal</h2>
          <h1 className="text-4xl md:text-7xl font-bold mb-6">
            Skills & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Expertise.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            I don't just know tools; I know how to use them to build better products.
            My stack is chosen for performance, scalability, and developer experience.
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                {category.title}
              </h3>
              <p className="text-gray-500 mb-8">{category.desc}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl pt-1">{skill.icon}</span>
                        <div>
                          <span className="text-white font-bold block">{skill.name}</span>
                          <span className="text-xs text-gray-500">{skill.desc}</span>
                        </div>
                      </div>
                      <span className="text-cyan-500/50 font-bold text-sm">{skill.level}%</span>
                    </div>

                    <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
