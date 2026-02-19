import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutPreview() {
    return (
        <section className="py-24 bg-black text-white relative overflow-hidden">
            {/* Grid Decor - Matching site-wide pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            {/* Cinematic Glows */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative">

                {/* HUD Header Prompts */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-12 h-px bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                        <h2 className="font-mono text-[0.6rem] tracking-widest lowercase flex items-center gap-2">
                            <span className="text-purple-400">await</span>
                            <span className="text-blue-400">sys</span>
                            <span className="text-white/40">.</span>
                            <span className="text-cyan-400">fetch_identity</span>
                            <span className="text-white/40">(</span>
                            <span className="text-emerald-400">"0xABOUT"</span>
                            <span className="text-white/40">)</span>
                        </h2>
                    </div>

                    <h1 className="text-[2.75rem] md:text-9xl font-black mb-8 tracking-tighter uppercase italic text-white leading-none">
                        System <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/40 to-transparent">IDENTITY.</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center"
                >
                    {/* Technical Philosophy Card */}
                    <div className="relative group p-1 shadow-2xl">
                        {/* Animated Glow Border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                        <motion.div
                            whileTap={{ scale: 0.98 }}
                            className="relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-10 md:p-14 overflow-hidden"
                        >
                            {/* HUD Brackets */}
                            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-white/20 rounded-tl-[2.5rem] group-hover:border-cyan-500/50 transition-colors" />
                            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-white/20 rounded-br-[2.5rem] group-hover:border-purple-500/50 transition-colors" />

                            {/* Metadata */}
                            <div className="flex justify-between items-center mb-10">
                                <span className="text-[0.6rem] font-mono text-cyan-400 tracking-[0.2em] font-bold">:: CORE_PHILOSOPHY</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[0.5rem] font-mono text-white/40 tracking-widest uppercase">Status: Active</span>
                                </div>
                            </div>

                            <h3 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter leading-[0.9] mb-8 group-hover:tracking-tight transition-all duration-1000">
                                Beyond <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Logics.</span>
                            </h3>

                            <p className="text-gray-100 text-lg md:text-xl leading-relaxed tracking-tight font-light max-w-sm">
                                Engineering isn't just syntax. It's the art of <span className="text-white font-medium italic underline decoration-cyan-500/50">structuring chaos</span> into elegant, scalable digital experiences.
                            </p>

                            {/* Interaction Bar */}
                            <div className="mt-12 w-full h-px bg-white/5 relative overflow-hidden">
                                <motion.div
                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-40"
                                    animate={{ left: ['-100%', '100%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Logic Side */}
                    <div className="space-y-10 md:pl-6">
                        <div className="space-y-6">
                            <h4 className="text-cyan-400 font-black text-[0.7rem] tracking-[0.4em] uppercase">:: System Architecture</h4>
                            <h2 className="text-[2.5rem] md:text-6xl font-black leading-[1.1] text-white tracking-tighter uppercase italic">
                                Architecting <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">Elite Parity.</span>
                            </h2>
                        </div>

                        <p className="text-gray-100 text-lg md:text-xl leading-relaxed font-light max-w-xl">
                            I specialize in deconstructing complex problems into modular, user-centric systems. From precision scaling to high-vibrancy design, I believe in development that performs as flawlessly as it looks.
                        </p>

                        <div className="flex flex-wrap gap-8 pt-4">
                            <div className="space-y-1">
                                <div className="text-2xl font-black text-white">99.9%</div>
                                <div className="text-[0.55rem] font-mono text-white/40 tracking-widest uppercase italic">// Build_Integrity</div>
                            </div>
                            <div className="h-10 w-px bg-white/10" />
                            <div className="space-y-1">
                                <div className="text-2xl font-black text-white">0.01ms</div>
                                <div className="text-[0.55rem] font-mono text-white/40 tracking-widest uppercase italic">// Exec_Latency</div>
                            </div>
                        </div>

                        <Link to="/about" className="inline-block group cursor-pointer pt-6">
                            <motion.button
                                whileHover={{ x: 10 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-4 text-white font-black text-xl tracking-tighter uppercase italic cursor-pointer"
                            >
                                <span className="text-cyan-500 group-hover:translate-x-1 transition-transform">{">"}</span>
                                Read My Story
                                <span className="text-3xl text-white group-hover:text-cyan-400 transition-colors duration-300">→</span>
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
