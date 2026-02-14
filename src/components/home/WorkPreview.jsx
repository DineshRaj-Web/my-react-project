import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

// Reusing a simplified version of the card or just mapping slightly differently for preview
// For consistency, let's show the top 2 projects with a "View All" CTA

export default function WorkPreview() {
    // Take only the first 2 projects for the preview
    const featuredProjects = projects.slice(0, 2);

    return (
        <section className="py-24 px-6 md:px-16 bg-black text-white relative border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-cyan-500 font-bold tracking-widest uppercase mb-4">Selected Work</h2>
                        <h3 className="text-3xl md:text-5xl font-bold">
                            Featured <span className="text-gray-500">Case Studies</span>
                        </h3>
                    </div>
                    <Link to="/work">
                        <motion.button
                            whileHover={{ x: 10 }}
                            className="text-white border-b border-white pb-1 hover:text-cyan-400 hover:border-cyan-400 transition-colors text-lg"
                        >
                            View All Projects →
                        </motion.button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors"
                        >
                            <div className="p-8 h-full flex flex-col">
                                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${project.color} text-xs font-bold uppercase tracking-wider mb-2`}>
                                    {project.category}
                                </span>
                                <h4 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                                <p className="text-gray-400 mb-8 line-clamp-3">{project.problem}</p>

                                <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center">
                                    <div className="flex -space-x-2">
                                        {/* Simplified tech stack bubbles or icons could go here, staying text for now */}
                                        <span className="text-xs text-gray-500 font-mono">
                                            {project.tech.slice(0, 3).join(" • ")}
                                        </span>
                                    </div>
                                    <span className="text-white group-hover:translate-x-2 transition-transform duration-300">
                                        Read Case Study →
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
