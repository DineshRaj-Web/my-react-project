import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

function ServiceCard({ title, description, icon, colSpan }) {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`group relative border border-white/10 bg-gray-900/50 overflow-hidden rounded-xl ${colSpan}`}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative h-full p-8 md:p-10 flex flex-col justify-between">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-2xl text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
                <div>
                    <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
                    <p className="text-gray-400 leading-relaxed max-w-sm">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default function ServicesSection() {
    return (
        <section className="py-32 px-6 bg-black text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-cyan-500 font-bold tracking-[0.2em] uppercase mb-4 text-sm">Expertise</h2>
                    <h3 className="text-5xl md:text-7xl font-bold leading-tight">
                        Engineering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                            At Scale.
                        </span>
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ServiceCard
                        title="Frontend Architecture"
                        description="Building complex, state-heavy applications with React and Next.js. I focus on performance patterns, component reusability, and pixel-perfect implementation of design systems."
                        icon="📐"
                        colSpan="md:col-span-2 lg:col-span-2"
                    />
                    <ServiceCard
                        title="Backend Systems"
                        description="Designing robust APIs and database schemas. Whether it's a microservice in Node.js or a serverless function on AWS, I ensure data integrity and security."
                        icon="⚡"
                        colSpan="md:col-span-1"
                    />
                    <ServiceCard
                        title="Performance Audits"
                        description="Optimizing Core Web Vitals to improve SEO and user retention. I shave off milliseconds that turn into revenue."
                        icon="🚀"
                        colSpan="md:col-span-1"
                    />
                    <ServiceCard
                        title="UI/UX Engineering"
                        description="Bridging the gap between Figma and the browser. I implement complex animations and micro-interactions that delight users."
                        icon="✨"
                        colSpan="md:col-span-2"
                    />
                </div>
            </div>
        </section>
    );
}
