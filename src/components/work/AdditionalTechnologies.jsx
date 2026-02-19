import { motion } from "framer-motion";

const techGroups = [
    {
        label: "Interface & Foundations",
        items: ["HTML", "CSS", "Sass", "JavaScript", "Bootstrap", "jQuery", "Vite", "Motion (animations)"]
    },
    {
        label: "Frameworks & Commerce",
        items: ["React JS", "React Router 7", "Remix", "Shopify Polaris"]
    },
    {
        label: "Server Architecture",
        items: ["Node.js", "Python", "Django", "Flask", "Java", "Spring Boot", "Servlet", "Strapi"]
    },
    {
        label: "Data & Integration",
        items: ["REST API Development", "Shopify Admin API", "GraphQL", "MySQL", "PostgreSQL", "MongoDB", "Prisma"]
    },
    {
        label: "Ecosystem & Deployment",
        items: ["Git", "GitHub", "Vercel", "Netlify"]
    }
];

const AdditionalTechnologies = () => {
    return (
        <div className="relative mt-24">
            {/* Structured Additional Technologies Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative bg-white/[0.01] border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-14 backdrop-blur-sm overflow-hidden group hover:border-white/10 transition-all duration-1000"
            >
                {/* Header Area */}
                <div className="mb-10 md:mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-[1px] bg-cyan-500/50" />
                        <span className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-cyan-500/70">Resource Registry</span>
                    </div>
                    <h3 className="text-2xl md:text-5xl font-light text-white tracking-tight">
                        Additional <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Technologies</span>
                    </h3>
                </div>

                <div className="space-y-8 md:space-y-12">
                    {techGroups.map((group, groupIndex) => (
                        <div key={group.label} className="relative">
                            <h4 className="text-[0.55rem] font-black uppercase tracking-[0.3em] text-gray-500 mb-4 md:mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full border border-white/20" />
                                {group.label}
                            </h4>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {group.items.map((tech, index) => (
                                    <motion.div
                                        key={tech}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: groupIndex * 0.1 + index * 0.02 }}
                                        whileHover={{ y: -3 }}
                                        className="group/chip relative px-4 py-2 md:px-5 md:py-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl transition-all duration-500 cursor-default hover:bg-white/[0.05] hover:border-cyan-500/30"
                                    >
                                        <span className="text-gray-400 text-xs md:text-sm font-light tracking-wide group-hover/chip:text-white transition-colors">
                                            {tech}
                                        </span>
                                        <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-cyan-500 opacity-0 group-hover/chip:opacity-100 transition-opacity duration-500 shadow-[0_0_8px_rgba(6,182,212,1)]" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default AdditionalTechnologies;
