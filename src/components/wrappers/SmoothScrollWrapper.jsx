import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function SmoothScrollWrapper({ children }) {
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    // 1. Get native scroll position
    const { scrollY } = useScroll();

    // 2. Smooth it out with spring physics
    // Mass/Stiffness/Damping controls the "weight" of the scroll
    const smoothY = useSpring(scrollY, {
        mass: 0.1,
        stiffness: 75,
        damping: 15
    });

    // 3. Transform the spring value to a negative Y translation
    const y = useTransform(smoothY, (value) => -value);

    // 4. Measure content height to "fake" the body height
    useEffect(() => {
        if (!contentRef.current) return;

        // ResizeObserver to handle dynamic height changes (like images loading)
        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setContentHeight(entry.contentRect.height);
            }
        });

        resizeObserver.observe(contentRef.current);
        return () => resizeObserver.disconnect();
    }, [children]);

    return (
        <>
            {/* 
        This div sits fixed and moves smoothly. 
        We use 'will-change-transform' for performance.
      */}
            <motion.div
                ref={contentRef}
                style={{ y }}
                className="fixed top-0 left-0 w-full will-change-transform z-10"
            >
                {children}
            </motion.div>

            {/* 
        This is the "Ghost" div that forces the page to be scrollable.
        It sits behind everything and just takes up space.
      */}
            <div style={{ height: contentHeight }} />
        </>
    );
}
