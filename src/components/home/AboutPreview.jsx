import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutPreview() {
    return (
        <section className="min-h-[60vh] flex items-center justify-center py-20 px-6 bg-black text-white relative overflow-hidden">

            {/* Decorative background blur */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
                {/* Design Side */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl overflow-hidden aspect-square flex flex-col justify-center">
                        <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-4">
                            The <br /> Philosopy
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Coding isn't just about typing characters. It's about structuring logic, crafting experiences, and solving problems with elegance.
                        </p>
                        <motion.div
                            className="mt-8 w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500"
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>

                {/* Content Side */}
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        Beyond the <br />
                        <span className="text-cyan-400">Lines of Code.</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        I believe in clean architecture, user-centric design, and continuous evolution.
                        From my early days of hacking together scripts to architecting scalable systems, my journey has been driven by curiosity.
                    </p>
                    <Link to="/about">
                        <motion.button
                            whileHover={{ x: 10 }}
                            className="flex items-center gap-3 text-white font-bold text-lg group"
                        >
                            Read My Story
                            <span className="text-2xl group-hover:text-cyan-400 transition-colors">→</span>
                        </motion.button>
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
