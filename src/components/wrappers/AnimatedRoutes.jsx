import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../home/Home";
import About from "../about/About";
import Work from "../work/Work";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";
import PageWrapper from "./PageWrapper"; // Updated import since they are in the same folder now

export default function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <PageWrapper>
                            <Home />
                        </PageWrapper>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <PageWrapper>
                            <About />
                        </PageWrapper>
                    }
                />
                <Route
                    path="/work"
                    element={
                        <PageWrapper>
                            <Work />
                        </PageWrapper>
                    }
                />
                <Route
                    path="/skills"
                    element={
                        <PageWrapper>
                            <Skills />
                        </PageWrapper>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <PageWrapper>
                            <Contact />
                        </PageWrapper>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
}
