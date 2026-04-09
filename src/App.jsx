import "./App.css";

import { useState, useEffect, useRef } from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
// import Navbar from "./components/NavBar";

/* ─── Animated Background Canvas ─── */
// function MatrixCanvas() {
//   const canvasRef = useRef(null);
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     const cols = Math.floor(canvas.width / 20);
//     const drops = Array(cols).fill(1);
//     const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ";
//     const draw = () => {
//       ctx.fillStyle = "rgba(0,0,0,0.05)";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//       ctx.fillStyle = "#00aaff22";
//       ctx.font = "14px monospace";
//       drops.forEach((y, i) => {
//         const char = chars[Math.floor(Math.random() * chars.length)];
//         ctx.fillStyle = `rgba(0,${150 + Math.floor(Math.random() * 100)},255,${0.1 + Math.random() * 0.3})`;
//         ctx.fillText(char, i * 20, y * 20);
//         if (y * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
//         drops[i]++;
//       });
//     };
//     const interval = setInterval(draw, 50);
//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     window.addEventListener("resize", resize);
//     return () => {
//       clearInterval(interval);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);
//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 pointer-events-none z-0 opacity-20"
//     />
//   );
// }

/* ─── Typewriter Hook ─── */
// function useTypewriter(texts, speed = 80) {
//   const [displayed, setDisplayed] = useState("");
//   const [idx, setIdx] = useState(0);
//   const [charIdx, setCharIdx] = useState(0);
//   const [deleting, setDeleting] = useState(false);
//   useEffect(() => {
//     const current = texts[idx];
//     const timeout = setTimeout(
//       () => {
//         if (!deleting) {
//           setDisplayed(current.slice(0, charIdx + 1));
//           if (charIdx + 1 === current.length)
//             setTimeout(() => setDeleting(true), 1800);
//           else setCharIdx((c) => c + 1);
//         } else {
//           setDisplayed(current.slice(0, charIdx - 1));
//           if (charIdx === 0) {
//             setDeleting(false);
//             setIdx((i) => (i + 1) % texts.length);
//           } else setCharIdx((c) => c - 1);
//         }
//       },
//       deleting ? speed / 2 : speed,
//     );
//     return () => clearTimeout(timeout);
//   }, [charIdx, deleting, idx, texts, speed]);
//   return displayed;
// }

/* ─── Intersection Observer Hook ─── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ─── Section Wrapper ─── */
function Section({ id, children, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
    >
      {children}
    </section>
  );
}

/* ─── Shield SVG ─── */
function ShieldIcon({ size = 40, glow = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={glow ? "drop-shadow-[0_0_12px_rgba(0,150,255,0.8)]" : ""}
    >
      <path
        d="M20 3L5 9v10c0 9.4 6.4 18.2 15 20.7 8.6-2.5 15-11.3 15-20.7V9L20 3z"
        fill="rgba(0,100,255,0.15)"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <path
        d="M14 20l4 4 8-8"
        stroke="#60a5fa"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Service Icons ─── */
const serviceIcons = {
  "Network Security": (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="12" stroke="#3b82f6" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="6" stroke="#3b82f6" strokeWidth="1.5" />
      <line x1="14" y1="2" x2="14" y2="26" stroke="#3b82f6" strokeWidth="1" />
      <line x1="2" y1="14" x2="26" y2="14" stroke="#3b82f6" strokeWidth="1" />
      <path
        d="M4 8.5 Q14 14 24 8.5"
        stroke="#3b82f6"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M4 19.5 Q14 14 24 19.5"
        stroke="#3b82f6"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  ),
  "Penetration Testing": (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path
        d="M14 3l3 8h9l-7 5 3 8-8-6-8 6 3-8-7-5h9z"
        stroke="#3b82f6"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "Vulnerability Assessment": (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="13" cy="13" r="9" stroke="#3b82f6" strokeWidth="1.5" />
      <line
        x1="20"
        y1="20"
        x2="25"
        y2="25"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="13"
        y1="9"
        x2="13"
        y2="17"
        stroke="#3b82f6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="13" cy="19" r="1" fill="#3b82f6" />
    </svg>
  ),
  "Cloud Security": (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path
        d="M22 18a5 5 0 10-9.8-1A4 4 0 106 18"
        stroke="#3b82f6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect
        x="11"
        y="18"
        width="6"
        height="5"
        rx="1"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <line x1="14" y1="20" x2="14" y2="23" stroke="#3b82f6" strokeWidth="1" />
    </svg>
  ),
  "Web App Security": (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect
        x="3"
        y="5"
        width="22"
        height="18"
        rx="2"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <line x1="3" y1="10" x2="25" y2="10" stroke="#3b82f6" strokeWidth="1" />
      <circle cx="6.5" cy="7.5" r="1" fill="#3b82f6" />
      <circle cx="9.5" cy="7.5" r="1" fill="#3b82f6" />
      <line
        x1="8"
        y1="16"
        x2="13"
        y2="16"
        stroke="#3b82f6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="8"
        y1="19"
        x2="20"
        y2="19"
        stroke="#3b82f6"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  ),
  "Cyber Risk Management": (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path
        d="M14 3L5 7v8c0 6.3 3.9 12.1 9 14 5.1-1.9 9-7.7 9-14V7L14 3z"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <path
        d="M9 14l3 3 7-7"
        stroke="#3b82f6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

/* ─── Navbar ─── */
function Navbar() {
  // function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const links = [
    "home",
    "about",
    "services",
    "courses",
    "events",
    "blog",
    "contact",
    "join",
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = links.map((l) => document.getElementById(l));
      const current = sections.find(
        (s) => s && s.getBoundingClientRect().top < 120,
      );
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/95 backdrop-blur-md border-b border-blue-900/30 shadow-lg shadow-blue-950/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollTo("home")}
          >
            {/* <ShieldIcon size={36} glow /> */}
            <img
              src="/logo.jpeg"
              alt="Logo"
              className="h-14 rounded-2xl w-auto object-contain"
            />
            <span className="font-black text-white text-sm lg:text-base tracking-tight leading-tight">
              Soviet<span className="text-blue-400">Brothers</span>
              <br />
              <span className="text-xs font-medium text-gray-400 tracking-widest uppercase">
                CyberSecurity
              </span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className={`px-3 py-1.5 text-xs font-medium uppercase tracking-widest rounded transition-all duration-200
                  ${
                    active === l
                      ? "text-blue-400 bg-blue-950/60"
                      : "text-gray-400 hover:text-blue-300 hover:bg-blue-950/30"
                  }`}
              >
                {l === "join" ? "Join Us" : l}
              </button>
            ))}
          </div>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-3">
            {/* <button
              onClick={() => setDark((d) => !d)}
              className="p-2 rounded-lg border border-blue-900/40 text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-all"
            >
              {dark ? "☀" : "🌙"}
            </button> */}
            <button
              onClick={() => scrollTo("contact")}
              className="px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-lg
                bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500
                shadow-lg shadow-blue-900/40 hover:shadow-blue-700/50 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile */}
          <button
            className="lg:hidden text-gray-400 hover:text-white p-2"
            onClick={() => setOpen((o) => !o)}
          >
            <div
              className={`w-5 h-0.5 bg-current mb-1 transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <div
              className={`w-5 h-0.5 bg-current mb-1 transition-all ${open ? "opacity-0" : ""}`}
            />
            <div
              className={`w-5 h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-96" : "max-h-0"}`}
      >
        <div className="bg-gray-950/98 border-t border-blue-900/20 px-4 py-3 space-y-1">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-blue-400 hover:bg-blue-950/30 rounded transition-all uppercase tracking-widest"
            >
              {l === "join" ? "Join Us" : l}
            </button>
          ))}
          <div className="flex gap-2 pt-2">
            {/* <button
              onClick={() => setDark((d) => !d)}
              className="flex-1 py-2 border border-blue-900/40 rounded text-gray-400 text-sm"
            >
              {dark ? "Light" : "Dark"}
            </button> */}
            <button
              onClick={() => scrollTo("contact")}
              className="flex-1 py-2 bg-blue-600 rounded text-white text-sm font-bold"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */
// function Hero() {
//   const typed = useTypewriter([
//     "Protect Your Assets.",
//     "Prevent Breaches.",
//     "Secure Your Future.",
//   ]);
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//     >
//       <MatrixCanvas />
//       {/* Grid overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(0,100,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,100,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
//       {/* Radial glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(0,50,200,0.12),transparent)]" />
//       <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-700/5 rounded-full blur-3xl" />

//       <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
//         {/* Badge */}
//         <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-950/40 backdrop-blur-sm">
//           <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
//           <span className="text-xs text-blue-300 font-medium tracking-widest uppercase">
//             System Online — All Systems Secured
//           </span>
//         </div>

//         {/* Main heading */}
//         <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-6 tracking-tight">
//           Soviet
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
//             Brothers
//           </span>
//           <br />
//           <span className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-300 tracking-widest">
//             CyberSecurity
//           </span>
//         </h1>

//         {/* Tagline */}
//         <p className="text-xl sm:text-2xl text-blue-300 font-light mb-4 tracking-widest uppercase">
//           Protect. Prevent. Secure.
//         </p>

//         {/* Typewriter */}
//         <div className="h-10 mb-10">
//           <span className="text-lg text-gray-300 font-mono">
//             {typed}
//             <span className="animate-pulse text-blue-400">|</span>
//           </span>
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
//           <a
//             href="#contact"
//             onClick={(e) => {
//               e.preventDefault();
//               document
//                 .getElementById("contact")
//                 ?.scrollIntoView({ behavior: "smooth" });
//             }}
//             className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl
//               hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-900/50 hover:shadow-blue-700/60
//               transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 text-sm tracking-widest uppercase"
//           >
//             Get Started →
//           </a>
//           <a
//             href="#about"
//             onClick={(e) => {
//               e.preventDefault();
//               document
//                 .getElementById("about")
//                 ?.scrollIntoView({ behavior: "smooth" });
//             }}
//             className="px-8 py-4 border border-blue-500/40 text-blue-300 font-semibold rounded-xl
//               hover:bg-blue-950/50 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 text-sm tracking-widest uppercase backdrop-blur-sm"
//           >
//             Learn More
//           </a>
//         </div>

//         {/* Stats */}
//         <div className="flex flex-wrap justify-center gap-8 mb-16">
//           {[
//             ["500+", "Clients Protected"],
//             ["99.9%", "Uptime SLA"],
//             ["24/7", "Monitoring"],
//             ["ISO", "Certified"],
//           ].map(([val, label]) => (
//             <div key={label} className="text-center">
//               <div className="text-2xl font-black text-blue-400">{val}</div>
//               <div className="text-xs text-gray-500 tracking-widest uppercase mt-1">
//                 {label}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Scroll indicator */}
//         <div className="flex flex-col items-center gap-2 animate-bounce">
//           <span className="text-xs text-gray-600 tracking-widest uppercase">
//             Scroll
//           </span>
//           <div className="w-5 h-8 border border-gray-700 rounded-full flex items-start justify-center p-1">
//             <div className="w-1 h-2 bg-blue-400 rounded-full animate-bounce" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
<Hero />;

/* ─── About ─── */
// function About() {
//   const highlights = [
//     {
//       icon: "🛡️",
//       title: "Certified Experts",
//       desc: "CISSP, CEH, OSCP certified professionals",
//     },
//     {
//       icon: "⚡",
//       title: "24/7 Monitoring",
//       desc: "Round-the-clock threat detection and response",
//     },
//     {
//       icon: "🏢",
//       title: "Enterprise Grade",
//       desc: "Scalable solutions for all business sizes",
//     },
//     {
//       icon: "🌍",
//       title: "500+ Clients",
//       desc: "Trusted by companies across 30+ countries",
//     },
//   ];
//   return (
//     <Section id="about" className="py-24 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div>
//             <div className="text-xs text-blue-400 font-bold tracking-widest uppercase mb-4">
//               // About Us
//             </div>
//             <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
//               Your Trusted
//               <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
//                 Cyber Guardian
//               </span>
//             </h2>
//             <p className="text-gray-400 leading-relaxed mb-6">
//               SovietBrothersCyberSecurity is a premier cybersecurity firm
//               founded by elite security professionals with decades of combined
//               experience in government, military, and enterprise environments.
//             </p>
//             <p className="text-gray-400 leading-relaxed mb-8">
//               Our mission is to make world-class cybersecurity accessible to
//               every organization— from startups to Fortune 500 enterprises—with
//               proactive defense strategies that evolve with the ever-changing
//               threat landscape.
//             </p>
//             <div className="flex gap-4">
//               <div className="flex-1 p-4 rounded-xl border border-blue-900/40 bg-blue-950/20">
//                 <div className="text-2xl font-black text-blue-400 mb-1">
//                   Mission
//                 </div>
//                 <p className="text-xs text-gray-500">
//                   Empowering organizations with cutting-edge security solutions
//                   that protect, detect, and respond.
//                 </p>
//               </div>
//               <div className="flex-1 p-4 rounded-xl border border-cyan-900/40 bg-cyan-950/20">
//                 <div className="text-2xl font-black text-cyan-400 mb-1">
//                   Vision
//                 </div>
//                 <p className="text-xs text-gray-500">
//                   A world where every business can operate securely in the
//                   digital age without compromise.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             {highlights.map((h) => (
//               <div
//                 key={h.title}
//                 className="p-6 rounded-2xl border border-blue-900/30 bg-gray-900/50 backdrop-blur-sm
//                   hover:border-blue-500/50 hover:bg-blue-950/30 transition-all duration-300 hover:-translate-y-1 group"
//               >
//                 <div className="text-3xl mb-3">{h.icon}</div>
//                 <h3 className="font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
//                   {h.title}
//                 </h3>
//                 <p className="text-xs text-gray-500 leading-relaxed">
//                   {h.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// }
<About />;

/* ─── Services ─── */
function Services() {
  const services = [
    {
      name: "Network Security",
      desc: "Comprehensive network architecture review, firewall management, and intrusion detection systems to protect your infrastructure.",
    },
    {
      name: "Penetration Testing",
      desc: "Ethical hacking assessments that identify vulnerabilities before malicious actors can exploit them in your systems.",
    },
    {
      name: "Vulnerability Assessment",
      desc: "Continuous scanning and assessment of your attack surface to prioritize and remediate security weaknesses.",
    },
    {
      name: "Cloud Security",
      desc: "End-to-end cloud security architecture for AWS, Azure, and GCP environments with compliance frameworks.",
    },
    {
      name: "Web App Security",
      desc: "OWASP-aligned application security testing, code reviews, and runtime protection for web applications.",
    },
    {
      name: "Cyber Risk Management",
      desc: "Strategic risk assessment, compliance management, and security governance frameworks tailored to your business.",
    },
  ];
  return (
    <Section id="services" className="py-24 px-6 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs text-blue-400 font-bold tracking-widest uppercase mb-4">
            // Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Security
            </span>{" "}
            Solutions
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            End-to-end cybersecurity services designed to protect your digital
            assets, reputation, and business continuity.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.name}
              className="group p-6 rounded-2xl border border-blue-900/30 bg-gray-900/60 backdrop-blur-sm
                hover:border-blue-500/50 hover:bg-blue-950/20 transition-all duration-300 hover:-translate-y-2
                hover:shadow-xl hover:shadow-blue-950/40 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-blue-950/60 border border-blue-900/40 group-hover:border-blue-500/50 transition-all">
                  {serviceIcons[s.name] || <ShieldIcon size={28} />}
                </div>
                <div className="w-6 h-0.5 bg-gradient-to-r from-blue-500 to-transparent group-hover:w-12 transition-all duration-300" />
              </div>
              <h3 className="font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {s.name}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              <div className="mt-4 text-xs text-blue-500 font-semibold group-hover:text-blue-300 transition-colors">
                Learn More →
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── Courses ─── */
function Courses() {
  const courses = [
    {
      title: "Ethical Hacking",
      level: "Advanced",
      duration: "12 Weeks",
      desc: "Master penetration testing methodologies, tools, and real-world attack techniques used by security professionals.",
      color: "from-blue-600 to-blue-800",
    },
    {
      title: "Cyber Security Fundamentals",
      level: "Beginner",
      duration: "8 Weeks",
      desc: "Build a solid foundation in cybersecurity concepts, threat landscape, and defensive strategies.",
      color: "from-cyan-600 to-blue-700",
    },
    {
      title: "Network Security Training",
      level: "Intermediate",
      duration: "10 Weeks",
      desc: "Deep dive into network protocols, firewall configuration, VPNs, and advanced network defense techniques.",
      color: "from-indigo-600 to-blue-700",
    },
    {
      title: "Penetration Testing Course",
      level: "Advanced",
      duration: "14 Weeks",
      desc: "Comprehensive course covering web, mobile, and network penetration testing with hands-on labs.",
      color: "from-blue-700 to-cyan-700",
    },
    {
      title: "SOC Analyst Training",
      level: "Intermediate",
      duration: "10 Weeks",
      desc: "Train to become a Security Operations Center analyst—threat hunting, SIEM, incident response.",
      color: "from-sky-600 to-blue-700",
    },
  ];
  const levelColor = {
    Beginner: "bg-green-950/60 text-green-400 border-green-900/40",
    Intermediate: "bg-yellow-950/60 text-yellow-400 border-yellow-900/40",
    Advanced: "bg-red-950/60 text-red-400 border-red-900/40",
  };
  return (
    <Section id="courses" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs text-blue-400 font-bold tracking-widest uppercase mb-4">
            // Training & Courses
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Level Up Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Skills
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Industry-recognized training programs designed by practitioners, for
            practitioners.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <div
              key={c.title}
              className="group flex flex-col rounded-2xl overflow-hidden border border-blue-900/30 bg-gray-900/60
                hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-950/30"
            >
              <div className={`h-2 bg-gradient-to-r ${c.color}`} />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-white group-hover:text-blue-300 transition-colors text-sm leading-tight flex-1 mr-2">
                    {c.title}
                  </h3>
                  <span
                    className={`px-2 py-0.5 rounded-md text-xs font-semibold border ${levelColor[c.level]} whitespace-nowrap`}
                  >
                    {c.level}
                  </span>
                </div>
                <div className="text-xs text-gray-600 mb-3 font-mono">
                  ⏱ {c.duration}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {c.desc}
                </p>
                <button
                  className="mt-6 w-full py-2.5 rounded-xl border border-blue-600/40 text-blue-400 text-xs font-bold uppercase tracking-widest
                  hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/40"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── Events ─── */
function Events() {
  const events = [
    {
      name: "Cyber Security Workshop",
      date: "May 15, 2025",
      type: "Workshop",
      desc: "Hands-on workshop covering the latest threat intelligence, defensive tools, and incident response playbooks.",
      location: "New Delhi + Online",
    },
    {
      name: "Ethical Hacking Webinar",
      date: "May 28, 2025",
      type: "Webinar",
      desc: "Live demonstration of advanced penetration testing techniques with Q&A session by OSCP-certified experts.",
      location: "Online",
    },
    {
      name: "Security Awareness Seminar",
      date: "Jun 10, 2025",
      type: "Seminar",
      desc: "Executive-level seminar on building a security-first culture and reducing human-factor vulnerabilities.",
      location: "Mumbai",
    },
    {
      name: "Cyber Defense Bootcamp",
      date: "Jun 22–26, 2025",
      type: "Bootcamp",
      desc: "Intensive 5-day bootcamp with real-world attack simulation, blue team exercises, and certification prep.",
      location: "Bangalore",
    },
  ];
  const typeColor = {
    Workshop: "text-purple-400 border-purple-900/40 bg-purple-950/40",
    Webinar: "text-cyan-400 border-cyan-900/40 bg-cyan-950/40",
    Seminar: "text-amber-400 border-amber-900/40 bg-amber-950/40",
    Bootcamp: "text-red-400 border-red-900/40 bg-red-950/40",
  };
  return (
    <Section id="events" className="py-24 px-6 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs text-blue-400 font-bold tracking-widest uppercase mb-4">
            // Events
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Upcoming{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Events
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Join thousands of security professionals at our world-class training
            events and conferences.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {events.map((e) => (
            <div
              key={e.name}
              className="group p-6 rounded-2xl border border-blue-900/30 bg-gray-900/60 hover:border-blue-500/40
                transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/30"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span
                    className={`px-2 py-0.5 rounded-md text-xs font-bold border ${typeColor[e.type]}`}
                  >
                    {e.type}
                  </span>
                  <h3 className="font-bold text-white mt-2 group-hover:text-blue-300 transition-colors">
                    {e.name}
                  </h3>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <div className="text-xs text-blue-400 font-mono font-bold">
                    {e.date}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    📍 {e.location}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {e.desc}
              </p>
              <button
                className="px-5 py-2 rounded-xl border border-blue-600/40 text-blue-400 text-xs font-bold uppercase tracking-widest
                hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Register →
              </button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── Blog ─── */
function Blog() {
  const posts = [
    {
      title:
        "Zero-Day Vulnerabilities: What They Are and How to Protect Against Them",
      cat: "Threat Intel",
      date: "Apr 2, 2025",
      read: "8 min",
      gradient: "from-blue-900 to-indigo-950",
    },
    {
      title:
        "Ransomware in 2025: New Tactics, Techniques, and Procedures Revealed",
      cat: "Research",
      date: "Mar 28, 2025",
      read: "12 min",
      gradient: "from-indigo-900 to-blue-950",
    },
    {
      title:
        "Building a Zero Trust Architecture: A Complete Implementation Guide",
      cat: "Guide",
      date: "Mar 20, 2025",
      read: "15 min",
      gradient: "from-cyan-900 to-blue-950",
    },
    {
      title:
        "AI-Powered Attacks: How Threat Actors Are Leveraging Machine Learning",
      cat: "Analysis",
      date: "Mar 15, 2025",
      read: "10 min",
      gradient: "from-blue-950 to-purple-950",
    },
    {
      title:
        "Cloud Security Misconfigurations: The Silent Threat to Enterprises",
      cat: "Best Practices",
      date: "Mar 8, 2025",
      read: "7 min",
      gradient: "from-sky-900 to-blue-950",
    },
    {
      title: "SOC Maturity Model: Evolving Your Security Operations Center",
      cat: "Strategy",
      date: "Mar 1, 2025",
      read: "11 min",
      gradient: "from-blue-900 to-teal-950",
    },
  ];
  const catColor = {
    "Threat Intel": "text-red-400",
    Research: "text-purple-400",
    Guide: "text-green-400",
    Analysis: "text-amber-400",
    "Best Practices": "text-cyan-400",
    Strategy: "text-blue-400",
  };
  return (
    <Section id="blog" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs text-blue-400 font-bold tracking-widest uppercase mb-4">
            // Insights & Research
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Security{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Intelligence
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Stay ahead of threats with expert analysis, research, and practical
            security guidance from our team.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <div
              key={p.title}
              className="group flex flex-col rounded-2xl overflow-hidden border border-blue-900/30 bg-gray-900/60
                hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-950/30 cursor-pointer"
            >
              <div
                className={`h-32 bg-gradient-to-br ${p.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,100,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,100,255,0.08)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <ShieldIcon size={40} glow />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-bold ${catColor[p.cat]}`}>
                    {p.cat}
                  </span>
                  <span className="text-gray-700">•</span>
                  <span className="text-xs text-gray-600">{p.read} read</span>
                </div>
                <h3 className="font-bold text-white text-sm leading-snug group-hover:text-blue-300 transition-colors flex-1 mb-4">
                  {p.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-mono">
                    {p.date}
                  </span>
                  <span className="text-xs text-blue-500 group-hover:text-blue-300 font-semibold transition-colors">
                    Read More →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── Contact ─── */
// function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const validate = () => {
//     const e = {};
//     if (!form.name.trim()) e.name = "Name is required";
//     if (!form.email.match(/^\S+@\S+\.\S+$/)) e.email = "Valid email required";
//     if (!form.message.trim()) e.message = "Message is required";
//     return e;
//   };
//   const submit = (ev) => {
//     ev.preventDefault();
//     const e = validate();
//     setErrors(e);
//     if (Object.keys(e).length === 0) setSubmitted(true);
//   };
//   const inputClass = (
//     field,
//   ) => `w-full px-4 py-3 bg-gray-900/80 border rounded-xl text-white placeholder-gray-600 text-sm
//     focus:outline-none focus:border-blue-500 transition-all duration-200 font-mono
//     ${errors[field] ? "border-red-500/60" : "border-blue-900/40 hover:border-blue-700/40"}`;
//   return (
//     <Section id="contact" className="py-24 px-6 bg-gray-950/50">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <div className="text-xs text-blue-400 font-bold tracking-widest uppercase mb-4">
//             // Contact
//           </div>
//           <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
//             Get In{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
//               Touch
//             </span>
//           </h2>
//         </div>
//         <div className="grid lg:grid-cols-2 gap-12">
//           <div>
//             <p className="text-gray-400 mb-8 leading-relaxed">
//               Ready to secure your organization? Our team of experts is
//               available 24/7 to discuss your security needs and provide tailored
//               solutions.
//             </p>
//             <div className="space-y-4">
//               {[
//                 {
//                   icon: "📧",
//                   label: "Email",
//                   val: "contact@sovietbrothers.sec",
//                 },
//                 { icon: "📞", label: "Phone", val: "+91 98765 43210" },
//                 {
//                   icon: "📍",
//                   label: "Address",
//                   val: "Cyber Tower, Bangalore, India 560001",
//                 },
//                 { icon: "🔒", label: "SOC Hotline", val: "+91 1800-SECURE-24" },
//               ].map((i) => (
//                 <div
//                   key={i.label}
//                   className="flex items-center gap-4 p-4 rounded-xl border border-blue-900/30 bg-gray-900/40 hover:border-blue-700/40 transition-all"
//                 >
//                   <span className="text-xl">{i.icon}</span>
//                   <div>
//                     <div className="text-xs text-gray-600 uppercase tracking-widest">
//                       {i.label}
//                     </div>
//                     <div className="text-sm text-white font-medium">
//                       {i.val}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="p-8 rounded-2xl border border-blue-900/30 bg-gray-900/50 backdrop-blur-sm">
//             {submitted ? (
//               <div className="flex flex-col items-center justify-center h-full text-center py-12">
//                 <ShieldIcon size={64} glow />
//                 <h3 className="text-2xl font-black text-white mt-6 mb-2">
//                   Message Secured
//                 </h3>
//                 <p className="text-gray-500">
//                   Your message has been encrypted and delivered. Our team will
//                   respond within 24 hours.
//                 </p>
//                 <button
//                   onClick={() => {
//                     setSubmitted(false);
//                     setForm({ name: "", email: "", phone: "", message: "" });
//                   }}
//                   className="mt-6 px-6 py-2 border border-blue-600/40 text-blue-400 rounded-xl text-sm hover:bg-blue-600 hover:text-white transition-all"
//                 >
//                   Send Another
//                 </button>
//               </div>
//             ) : (
//               <form onSubmit={submit} className="space-y-4">
//                 <div>
//                   <input
//                     className={inputClass("name")}
//                     placeholder="Full Name *"
//                     value={form.name}
//                     onChange={(e) =>
//                       setForm((f) => ({ ...f, name: e.target.value }))
//                     }
//                   />
//                   {errors.name && (
//                     <p className="text-red-400 text-xs mt-1">{errors.name}</p>
//                   )}
//                 </div>
//                 <div>
//                   <input
//                     className={inputClass("email")}
//                     placeholder="Email Address *"
//                     value={form.email}
//                     onChange={(e) =>
//                       setForm((f) => ({ ...f, email: e.target.value }))
//                     }
//                   />
//                   {errors.email && (
//                     <p className="text-red-400 text-xs mt-1">{errors.email}</p>
//                   )}
//                 </div>
//                 <input
//                   className={inputClass("phone")}
//                   placeholder="Phone Number (Optional)"
//                   value={form.phone}
//                   onChange={(e) =>
//                     setForm((f) => ({ ...f, phone: e.target.value }))
//                   }
//                 />
//                 <div>
//                   <textarea
//                     className={`${inputClass("message")} resize-none`}
//                     rows={5}
//                     placeholder="Your Message *"
//                     value={form.message}
//                     onChange={(e) =>
//                       setForm((f) => ({ ...f, message: e.target.value }))
//                     }
//                   />
//                   {errors.message && (
//                     <p className="text-red-400 text-xs mt-1">
//                       {errors.message}
//                     </p>
//                   )}
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl
//                     hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-900/40 hover:shadow-blue-700/50
//                     transition-all duration-300 hover:scale-[1.01] text-sm tracking-widest uppercase"
//                 >
//                   Send Secure Message 🔒
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// }
<Contact />;

/* ─── Join Us ─── */
function JoinUs() {
  const roles = [
    {
      title: "Senior Penetration Tester",
      dept: "Red Team",
      type: "Full-time",
      loc: "Bangalore / Remote",
    },
    {
      title: "SOC Analyst (L2/L3)",
      dept: "Blue Team",
      type: "Full-time",
      loc: "Delhi / Hybrid",
    },
    {
      title: "Cloud Security Engineer",
      dept: "Engineering",
      type: "Full-time",
      loc: "Remote",
    },
    {
      title: "Security Trainer",
      dept: "Education",
      type: "Contract",
      loc: "Multiple Locations",
    },
  ];
  return (
    <Section id="join" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs text-blue-400 font-bold tracking-widest uppercase mb-4">
            // Careers
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Join Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Team
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Work alongside elite security professionals. Build the future of
            cybersecurity with us.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {roles.map((r) => (
            <div
              key={r.title}
              className="group flex items-center justify-between p-5 rounded-2xl border border-blue-900/30 bg-gray-900/60
                hover:border-blue-500/40 transition-all duration-300 hover:bg-blue-950/20"
            >
              <div>
                <div className="font-bold text-white group-hover:text-blue-300 transition-colors mb-1">
                  {r.title}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-600">{r.dept}</span>
                  <span className="text-gray-700">•</span>
                  <span className="text-xs text-blue-500">{r.type}</span>
                  <span className="text-gray-700">•</span>
                  <span className="text-xs text-gray-600">📍 {r.loc}</span>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="ml-4 px-4 py-2 border border-blue-600/40 text-blue-400 rounded-xl text-xs font-bold
                hover:bg-blue-600 hover:text-white transition-all duration-300 whitespace-nowrap"
              >
                Apply →
              </button>
            </div>
          ))}
        </div>
        <div className="text-center p-10 rounded-2xl border border-blue-900/30 bg-gradient-to-br from-blue-950/40 to-gray-900/60">
          <h3 className="text-2xl font-black text-white mb-3">
            Don't see your role?
          </h3>
          <p className="text-gray-500 mb-6 max-w-lg mx-auto">
            We're always looking for talented security professionals. Send us
            your resume and we'll reach out when there's a match.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl
            hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-900/40 transition-all duration-300 hover:scale-105 text-sm tracking-widest uppercase"
          >
            Send Open Application
          </button>
        </div>
      </div>
    </Section>
  );
}

/* ─── CTA ─── */
function CTA() {
  return (
    <Section className="py-24 px-6 bg-gray-950/50">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="relative p-12 rounded-3xl overflow-hidden border border-blue-700/30
          bg-gradient-to-br from-blue-950/80 to-gray-950/80 backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,100,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,100,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <ShieldIcon size={56} glow />
            <h2 className="text-4xl md:text-5xl font-black text-white mt-6 mb-4 leading-tight">
              Secure Your Business
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Today
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Every second without proper security is a window of opportunity
              for attackers. Get a free security assessment and discover your
              vulnerabilities before they do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl
                  hover:from-blue-500 hover:to-cyan-500 shadow-xl shadow-blue-900/50 hover:shadow-blue-700/60
                  transition-all duration-300 hover:scale-105 text-sm tracking-widest uppercase"
              >
                Free Security Assessment
              </a>
              <a
                href="tel:+919844556958"
                className="px-8 py-4 border border-blue-500/40 text-blue-300 font-semibold rounded-xl
                hover:bg-blue-950/60 transition-all duration-300 text-sm tracking-widest uppercase"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── Footer ─── */
// function Footer() {
//   const links = {
//     Services: [
//       "Network Security",
//       "Pen Testing",
//       "Cloud Security",
//       "Risk Management",
//     ],
//     Courses: [
//       "Ethical Hacking",
//       "SOC Training",
//       "Pen Testing Course",
//       "Security Fundamentals",
//     ],
//     Company: ["About Us", "Blog", "Events", "Careers"],
//   };
//   return (
//     <footer className="border-t border-blue-900/20 bg-gray-950 py-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
//           <div className="lg:col-span-2">
//             <div className="flex items-center gap-3 mb-4">
//               <ShieldIcon size={36} glow />
//               <div>
//                 <div className="font-black text-white">SovietBrothers</div>
//                 <div className="text-xs text-gray-600 tracking-widest uppercase">
//                   CyberSecurity
//                 </div>
//               </div>
//             </div>
//             <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-xs">
//               Protecting organizations worldwide with elite cybersecurity
//               solutions since 2019.
//             </p>
//             <div className="flex gap-3">
//               {["in", "gh", "tw", "yt"].map((s) => (
//                 <button
//                   key={s}
//                   className="w-9 h-9 rounded-lg border border-blue-900/40 text-gray-600 hover:text-blue-400 hover:border-blue-500/50
//                   transition-all font-mono text-xs font-bold hover:bg-blue-950/30"
//                 >
//                   {s}
//                 </button>
//               ))}
//             </div>
//           </div>
//           {Object.entries(links).map(([cat, items]) => (
//             <div key={cat}>
//               <h4 className="font-bold text-white mb-4 text-xs uppercase tracking-widest">
//                 {cat}
//               </h4>
//               <ul className="space-y-2">
//                 {items.map((i) => (
//                   <li key={i}>
//                     <button className="text-sm text-gray-600 hover:text-blue-400 transition-colors">
//                       {i}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//         <div className="border-t border-blue-900/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
//           <p className="text-xs text-gray-700 font-mono">
//             © 2025 SovietBrothersCyberSecurity. All rights reserved.
//           </p>
//           <div className="flex items-center gap-2">
//             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//             <span className="text-xs text-gray-700 font-mono">
//               All systems operational
//             </span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
<Footer />;

/* ─── App ─── */
export default function App() {
  const [dark, setDark] = useState(true);
  // useEffect(() => {
  //   document.documentElement.classList.toggle("dark", dark);
  //   localStorage.setItem("theme", dark ? "dark" : "light");
  // }, [dark]);
  // useEffect(() => {
  //   const saved = localStorage.getItem("theme");
  //   if (saved) setDark(saved === "dark");
  // }, []);

  return (
    <div
      className={`${dark ? "dark" : ""} bg-gray-950 text-white min-h-screen`}
      style={{
        scrollBehavior: "smooth",
        fontFamily: "'Syne', 'Space Grotesk', sans-serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <Navbar dark={dark} setDark={setDark} />
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
