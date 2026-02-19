import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

export default function CallToActionSection() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const ref = useRef(null);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) * 0.15;
        const y = (clientY - (top + height / 2)) * 0.15;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <section className="py-32 bg-black relative overflow-hidden flex items-center justify-center">
            {/* Grid Decor - Matching site-wide pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

            {/* High-Vibrancy Cinematic Glows */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 text-center max-w-5xl mx-auto px-6">

                {/* HUD Header Prompt */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-12"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-8 h-px bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                        <h2 className="font-mono text-[0.6rem] tracking-widest lowercase flex items-center gap-2">
                            <span className="text-purple-400">await</span>
                            <span className="text-blue-400">sys</span>
                            <span className="text-white/40">.</span>
                            <span className="text-cyan-400">init_deployment</span>
                            <span className="text-white/40">(</span>
                            <span className="text-emerald-400">"READY"</span>
                            <span className="text-white/40">)</span>
                        </h2>
                        <span className="w-8 h-px bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                    </div>

                    <h2 className="text-[2.75rem] md:text-9xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
                        Ready to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500">
                            DEPLOY?
                        </span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed font-light tracking-tight">
                        The future is architected by those who dare to <span className="text-white font-medium italic underline decoration-cyan-500/50">execute its logic</span>. Let's collaborate to build scalable, high-fidelity digital solutions.
                    </p>
                </motion.div>

                <Link to="/contact" className="inline-block group cursor-pointer pt-4">
                    <motion.button
                        ref={ref}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        animate={{ x: position.x, y: position.y }}
                        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative px-14 py-7 bg-white text-black font-black text-xs uppercase tracking-[0.4em] rounded-full overflow-hidden transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] cursor-pointer"
                    >
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-3">
                            <span className="group-hover:translate-x-1 transition-transform">{">"}</span>
                            EXECUTE_DEPLOYMENT_REQUEST
                        </span>

                        {/* Shimmer Effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"
                        />
                        <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                    </motion.button>
                </Link>

                {/* Technical Footnote */}
                <div className="mt-16 flex flex-col items-center gap-2 opacity-30">
                    <span className="text-[0.5rem] font-mono tracking-[0.3em] uppercase">SYSTEM_CORE: ACTIVE</span>
                    <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
                </div>
            </div>
        </section>
    );
}
