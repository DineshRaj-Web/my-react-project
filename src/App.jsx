import "./index.css";
import "./styles/themes.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AnimatedRoutes from "./components/wrappers/AnimatedRoutes";
import { ToastProvider } from "./context/ToastContext";
import "./App.css";

import { HireMeProvider } from "./context/HireMeContext";
import SmoothScrollWrapper from "./components/wrappers/SmoothScrollWrapper";

import ScrollToTop from "./components/wrappers/ScrollToTop";

function App() {
  return (
    <ToastProvider>
      <HireMeProvider>
        <Router>
          <ScrollToTop />
          <Navbar />
          <SmoothScrollWrapper>
            <AnimatedRoutes />
          </SmoothScrollWrapper>
          <Footer />
        </Router>
      </HireMeProvider>
    </ToastProvider>
  );
}

export default App;
