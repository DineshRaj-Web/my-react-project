import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AboutHeader from "./AboutHeader";
import PhilosophyGrid from "./PhilosophyGrid";
import JourneyTimeline from "./JourneyTimeline";
import BackgroundElements from "./BackgroundElements";

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-32 overflow-hidden bg-black text-white"
    >
      {/* Background Elements */}
      <BackgroundElements y={y} />

      <div className="relative w-full px-6 md:px-16">
        {/* Narrative Intro */}
        <AboutHeader isInView={isInView} />

        {/* Philosophy Grid */}
        <PhilosophyGrid isInView={isInView} />

        {/* Journey Timeline */}
        <JourneyTimeline isInView={isInView} />
      </div>
    </section>
  );
}
