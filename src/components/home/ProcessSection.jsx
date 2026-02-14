import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        id: "01",
        title: "Discovery & Strategy",
        desc: "We start by breaking down the problem. I ask the hard questions to understand your business goals, target audience, and technical constraints.",
        color: "border-cyan-500 text-cyan-500"
    },
    {
        id: "02",
        title: "Architecture & Design",
        desc: "Before a single line of code is written, I map out the system architecture and design system. This ensures scalability and consistency.",
        color: "border-purple-500 text-purple-500"
    },
    {
        id: "03",
        title: "Development & Iteration",
        desc: "I build in sprints, with regular check-ins. You see progress every week, not just at the deadline. CI/CD pipelines ensure code quality.",
        color: "border-pink-500 text-pink-500"
    },
    {
        id: "04",
        title: "Launch & Optimization",
        desc: "Deployment is just the beginning. I monitor performance, fix bugs, and optimize for real-world usage to ensure a smooth takeoff.",
        color: "border-green-500 text-green-500"
    },
];

function ProcessCard({ step, index }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-24 last:mb-0 ${isEven ? 'text-right' : 'text-left md:text-left'}`}
        >
            {/* Content Side */}
            <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
                <div className={`text-6xl md:text-8xl font-black opacity-10 mb-4 ${step.color.split(" ")[1]}`}>
                    {step.id}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{step.desc}</p>
            </div>

            {/* Decorative Side */}
            <div className={`hidden md:flex items-center justify-center ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                <div className={`w-32 h-32 rounded-full border-2 ${step.color.split(" ")[0]} flex items-center justify-center bg-black/50 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] z-10`}>
                    <div className="w-4 h-4 rounded-full bg-white animate-pulse" />
                </div>
            </div>
        </motion.div>
    );
}

export default function ProcessSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const pathLength = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

    return (
        <section ref={ref} className="py-32 bg-black relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 relative">

                {/* Central Neon Line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block">
                    <motion.div
                        style={{ height: useTransform(pathLength, val => `${val * 100}%`) }}
                        className="w-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-32 relative z-10"
                >
                    <h2 className="text-cyan-500 font-bold tracking-[0.2em] uppercase mb-4 text-sm">The Workflow</h2>
                    <h3 className="text-5xl md:text-7xl font-bold text-white">
                        Chaos into <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Clarity.</span>
                    </h3>
                </motion.div>

                <div>
                    {steps.map((step, index) => (
                        <ProcessCard key={step.id} step={step} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
}
