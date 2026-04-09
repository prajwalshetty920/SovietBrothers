import "./App.css";

import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import CTA from "./components/Cta";
import JoinUs from "./components/Joinus";
import Blog from "./components/Blog";
import Events from "./components/Events";
import Courses from "./components/Courses";
import Services from "./components/Services";
import Navbar from "./components/Navbar";

/* ─── App ─── */
export default function App() {
  return (
    <div
      className="bg-gray-950 text-white min-h-screen relative"
      style={{
        scrollBehavior: "smooth",
        fontFamily: "'Syne', 'Space Grotesk', sans-serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Courses />
      <Events />
      <Blog />
      <Contact />
      <JoinUs />
      <CTA />
      <Footer />
    </div>
  );
}
