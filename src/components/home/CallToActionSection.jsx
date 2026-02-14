import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

export default function CallToActionSection() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const ref = useRef(null);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) * 0.2;
        const y = (clientY - (top + height / 2)) * 0.2;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <section className="py-20 px-6 bg-black relative overflow-hidden flex items-center justify-center">
            {/* Animated Background Mesh */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-[150px] animate-pulse" />
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
                    Ready to <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500 block md:inline mt-2 md:mt-0">
                        Disrupt?
                    </span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    The future is built by those who dare to code it. Let's collaborate and build extensive, scalable solutions that leave a mark.
                </p>

                <Link to="/contact">
                    <motion.button
                        ref={ref}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        animate={{ x: position.x, y: position.y }}
                        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group px-12 py-6 bg-white text-black font-black text-xl rounded-full overflow-hidden"
                    >
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                            START PROJECT →
                        </span>
                        <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                    </motion.button>
                </Link>
            </div>
        </section>
    );
}
