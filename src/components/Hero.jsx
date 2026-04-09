import { useState, useEffect, useRef } from "react";

function MatrixCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const cols = Math.floor(canvas.width / 20);
    const drops = Array(cols).fill(1);
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ";
    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00aaff22";
      ctx.font = "14px monospace";
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = `rgba(0,${150 + Math.floor(Math.random() * 100)},255,${0.1 + Math.random() * 0.3})`;
        ctx.fillText(char, i * 20, y * 20);
        if (y * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };
    const interval = setInterval(draw, 50);
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-20"
    />
  );
}

function useTypewriter(texts, speed = 80) {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = texts[idx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplayed(current.slice(0, charIdx + 1));
          if (charIdx + 1 === current.length)
            setTimeout(() => setDeleting(true), 1800);
          else setCharIdx((c) => c + 1);
        } else {
          setDisplayed(current.slice(0, charIdx - 1));
          if (charIdx === 0) {
            setDeleting(false);
            setIdx((i) => (i + 1) % texts.length);
          } else setCharIdx((c) => c - 1);
        }
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, texts, speed]);
  return displayed;
}

function Hero() {
  const typed = useTypewriter([
    "Protect Your Assets.",
    "Prevent Breaches.",
    "Secure Your Future.",
    "We Care Your Protection",
  ]);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <MatrixCanvas />
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,100,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,100,255,0.03)_1px,transparent_1px)] bg-size-[60px_60px]" />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(0,50,200,0.12),transparent)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-700/5 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="mt-18 inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-950/40 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-blue-300 font-medium tracking-widest uppercase">
            System Online — All Systems Secured
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-6 tracking-tight">
          Soviet
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
            Brothers
          </span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-300 tracking-widest">
            CyberSecurity
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-blue-300 font-light mb-4 tracking-widest uppercase">
          Protect. Prevent. Secure.
        </p>

        {/* Typewriter */}
        <div className="h-10 mb-4">
          <span className="text-lg text-gray-300 font-mono">
            {typed}
            <span className="animate-pulse text-blue-400">|</span>
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 ">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl
              hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-900/50 hover:shadow-blue-700/60
              transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 text-sm tracking-widest uppercase"
          >
            Get Started →
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 border border-blue-500/40 text-blue-300 font-semibold rounded-xl
              hover:bg-blue-950/50 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 text-sm tracking-widest uppercase backdrop-blur-sm"
          >
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 ">
          {[
            ["500+", "Clients Protected"],
            ["99.9%", "Uptime SLA"],
            ["24/7", "Monitoring"],
            ["ISO", "Certified"],
          ].map(([val, label]) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-black text-blue-400">{val}</div>
              <div className="text-xs text-gray-500 tracking-widest uppercase mt-1">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-gray-600 tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-5 h-8 border border-gray-700 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-blue-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
