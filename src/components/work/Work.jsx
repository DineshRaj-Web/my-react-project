import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { projects } from "../../data/projects";

const ProjectCard = ({ project, index }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-colors"
    >
      {/* Hover Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(255,255,255,0.1),
                            transparent 80%
                        )
                    `,
        }}
      />

      <div className="relative p-8 h-full flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${project.color} text-sm font-bold uppercase tracking-wider`}>
              {project.category}
            </span>
            <h3 className="text-3xl font-bold text-white mt-2 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
          </div>
          <motion.a
            href={project.link}
            whileHover={{ scale: 1.1, rotate: 45 }}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 hover:bg-cyan-500 hover:border-cyan-500 transition-colors shrink-0 ml-4"
          >
            ↗
          </motion.a>
        </div>

        <div className="space-y-6 flex-grow">
          <div>
            <h4 className="text-gray-500 text-xs uppercase font-bold mb-2">Challenge</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-gray-500 text-xs uppercase font-bold mb-2">Solution</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{project.solution}</p>
          </div>
          <div>
            <h4 className="text-green-500/80 text-xs uppercase font-bold mb-2">Impact</h4>
            <p className="text-white font-medium text-sm border-l-2 border-green-500/50 pl-3">
              {project.outcome}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-8 mt-auto border-t border-white/10">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/5 text-gray-400 text-xs font-mono rounded-full border border-white/10 hover:border-white/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Work = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-20">
          <h2 className="text-cyan-500 font-bold tracking-widest uppercase mb-4">Selected Work</h2>
          <h1 className="text-4xl md:text-7xl font-bold mb-8">
            Proven <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Results.
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            I don't just write code; I build digital products that perform.
            Here are a few projects where I solved complex problems and delivered measurable value.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
