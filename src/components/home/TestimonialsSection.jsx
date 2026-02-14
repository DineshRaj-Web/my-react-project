import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "Dinesh is one of those rare developers who understands both the technical and business sides of a product.",
        author: "Sarah Jenkins",
        role: "CTO, StartUp Flow"
    },
    {
        quote: "The attention to detail in the animations and responsiveness was incredible. A true professional.",
        author: "Mike Chen",
        role: "Founder, DevScale"
    },
    {
        quote: "He delivered our platform ahead of schedule with zero bugs. Highly recommended.",
        author: "Alex Rivera",
        role: "Product Manager, TechCorp"
    },
    {
        quote: "Cleanest code I've seen in a long time. Very easy to maintain and scale.",
        author: "David Kim",
        role: "Lead Engineer, SpaceX (ex)"
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-32 bg-black overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 pointer-events-none" />

            <div className="mb-20 text-center relative z-20">
                <h2 className="text-cyan-500 font-bold tracking-[0.2em] uppercase mb-4 text-sm">Testimonials</h2>
                <h3 className="text-4xl md:text-6xl font-bold text-white">Trusted By Builders.</h3>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <motion.div
                    className="flex gap-8 animate-scroll" // We'll implement this animation in css or using framer's animate
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                    style={{ display: "flex", width: "max-content" }}
                >
                    {[...testimonials, ...testimonials, ...testimonials].map((item, i) => (
                        <div
                            key={i}
                            className="w-[400px] p-8 rounded-2xl bg-white/5 border border-white/10 flex-shrink-0 backdrop-blur-sm hover:bg-white/10 transition-colors"
                        >
                            <div className="text-3xl text-purple-500 mb-6 font-serif">"</div>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light">
                                {item.quote}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full" />
                                <div>
                                    <h4 className="font-bold text-white text-sm">{item.author}</h4>
                                    <p className="text-xs text-xs text-gray-500 uppercase tracking-wider">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
