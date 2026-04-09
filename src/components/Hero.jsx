import { useState, useEffect, useRef } from "react";

function MatrixCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ";
    let cols = Math.floor(canvas.width / 20);
    let drops = Array(cols).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(5,11,24,0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = "13px monospace";
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const alpha = 0.08 + Math.random() * 0.28;
        ctx.fillStyle = `rgba(0,${140 + Math.floor(Math.random() * 110)},255,${alpha})`;
        ctx.fillText(char, i * 20, y * 20);
        if (y * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      resize();
      cols = Math.floor(canvas.width / 20);
      drops = Array(cols).fill(1);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.18,
        pointerEvents: "none",
        zIndex: 0,
      }}
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
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), 1800);
          } else {
            setCharIdx((c) => c + 1);
          }
        } else {
          setDisplayed(current.slice(0, charIdx - 1));
          if (charIdx === 0) {
            setDeleting(false);
            setIdx((i) => (i + 1) % texts.length);
          } else {
            setCharIdx((c) => c - 1);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, texts, speed]);

  return displayed;
}

export default function Hero() {
  const typed = useTypewriter([
    "Protect Your Assets.",
    "Prevent Breaches.",
    "Secure Your Future.",
    "We Care Your Protection.",
  ]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Rajdhani:wght@600;700&display=swap');

        .hero-section {
          position: relative;
          min-height: 100vh;
          background: #050b18;
          overflow: hidden;
          font-family: 'Rajdhani', sans-serif;
          display: flex;
          flex-direction: column;
        }

        .hero-grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,150,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,150,255,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
          z-index: 1;
          pointer-events: none;
        }

        .hero-radial-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 80% at 50% 50%, rgba(0,80,220,0.1), transparent);
          z-index: 1;
          pointer-events: none;
        }

        .hero-orb-top {
          position: absolute;
          right: -10%;
          top: -15%;
          width: min(700px, 65vw);
          aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(circle at 40% 40%, rgba(0,150,255,0.09), transparent 65%);
          animation: heroFloatA 7s ease-in-out infinite;
          z-index: 1;
          pointer-events: none;
        }

        .hero-orb-ring {
          position: absolute;
          right: 10%;
          top: 5%;
          width: min(400px, 38vw);
          aspect-ratio: 1;
          border-radius: 50%;
          border: 1px solid rgba(0,150,255,0.1);
          animation: heroFloatB 9s ease-in-out infinite;
          z-index: 1;
          pointer-events: none;
        }

        .hero-shield-wrap {
          position: absolute;
          right: clamp(-40px, -2vw, 30px);
          top: 50%;
          transform: translateY(-50%);
          width: min(480px, 38vw);
          z-index: 1;
          pointer-events: none;
          animation: heroFloatB 9s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .hero-shield-wrap { display: none; }
        }

        @keyframes heroFloatA {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }

        @keyframes heroFloatB {
          0%, 100% { transform: translateY(-50%) translateX(0px); }
          50% { transform: translateY(-50%) translateX(10px); }
        }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        @keyframes heroPulseDot {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.25; }
        }

        @keyframes heroBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
        }

        .hero-main {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(80px, 10vw, 120px) clamp(20px, 5vw, 60px) 2rem;
          position: relative;
          z-index: 10;
          text-align: center;
        }

        .hero-inner {
          max-width: 700px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(0,150,255,0.08);
          border: 1px solid rgba(0,150,255,0.22);
          border-radius: 999px;
          padding: 7px 18px;
          margin-bottom: 2rem;
          animation: heroFadeUp 0.5s ease both;
        }

        .hero-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22f098;
          animation: heroPulseDot 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        .hero-badge-text {
          font-family: 'Share Tech Mono', monospace;
          font-size: 10px;
          color: #00aaff;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        .hero-eyebrow {
          font-family: 'Share Tech Mono', monospace;
          font-size: 11px;
          color: #4a6a8a;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 10px;
          animation: heroFadeUp 0.5s ease 0.06s both;
        }

        .hero-headline {
          line-height: 0.9;
          letter-spacing: -1px;
          margin-bottom: 0;
          animation: heroFadeUp 0.5s ease 0.12s both;
        }

        .hero-headline-white {
          display: block;
          font-size: clamp(52px, 8vw, 108px);
          font-weight: 700;
          color: #e8eaf0;
        }

        .hero-headline-blue {
          display: block;
          font-size: clamp(52px, 8vw, 108px);
          font-weight: 700;
          color: #00aaff;
          text-shadow: 0 0 60px rgba(0,170,255,0.5);
        }

        .hero-headline-sub {
          display: block;
          font-family: 'Share Tech Mono', monospace;
          font-weight: 400;
          font-size: clamp(12px, 1.4vw, 17px);
          color: #4a6a8a;
          letter-spacing: 7px;
          text-transform: uppercase;
          margin-top: 12px;
        }

        .hero-tagline {
          font-family: 'Share Tech Mono', monospace;
          font-size: clamp(12px, 1.6vw, 16px);
          color: #5a8ab0;
          letter-spacing: 5px;
          text-transform: uppercase;
          margin: 24px 0 16px;
          animation: heroFadeUp 0.5s ease 0.18s both;
        }

        .hero-tagline-sep {
          color: #00aaff;
          opacity: 0.45;
          margin: 0 10px;
        }

        .hero-typewriter-row {
          min-height: 36px;
          margin-bottom: 18px;
          animation: heroFadeUp 0.5s ease 0.22s both;
        }

        .hero-typewriter-text {
          font-family: 'Share Tech Mono', monospace;
          font-size: clamp(14px, 1.8vw, 18px);
          color: #9ab8d4;
        }

        .hero-cursor {
          color: #00aaff;
          animation: heroPulseDot 0.8s step-end infinite;
        }

        .hero-description {
          font-family: system-ui, sans-serif;
          font-size: clamp(13px, 1.2vw, 15px);
          color: #5a7a94;
          line-height: 1.8;
          max-width: 500px;
          margin-bottom: 2.4rem;
          animation: heroFadeUp 0.5s ease 0.26s both;
          font-weight: 400;
        }

        .hero-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 3rem;
          justify-content: center;
          animation: heroFadeUp 0.5s ease 0.3s both;
        }

        .hero-btn-primary {
          padding: 14px 30px;
          background: linear-gradient(135deg, #0066cc, #00aaff);
          color: #ffffff;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 30px rgba(0,150,255,0.3);
        }

        .hero-btn-primary:hover {
          background: linear-gradient(135deg, #0077ee, #22ccff);
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 8px 40px rgba(0,150,255,0.5);
        }

        .hero-btn-ghost {
          padding: 13px 30px;
          background: transparent;
          color: #00aaff;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          border: 1px solid rgba(0,150,255,0.35);
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .hero-btn-ghost:hover {
          background: rgba(0,150,255,0.08);
          border-color: rgba(0,150,255,0.6);
          transform: translateY(-1px) scale(1.02);
        }

        .hero-stats-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0;
          animation: heroFadeUp 0.5s ease 0.36s both;
        }

        .hero-stat-item {
          padding: 0 24px;
          border-right: 1px solid rgba(0,150,255,0.12);
          text-align: center;
        }

        .hero-stat-item:last-child { border-right: none; }

        @media (max-width: 480px) {
          .hero-stat-item { padding: 0 14px; }
        }

        .hero-stat-num {
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(26px, 3vw, 36px);
          font-weight: 700;
          color: #c8ddef;
          line-height: 1;
        }

        .hero-stat-accent { color: #00aaff; }

        .hero-stat-label {
          font-family: 'Share Tech Mono', monospace;
          font-size: 9px;
          color: #3a5a72;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-top: 5px;
        }

        .hero-scroll-hint {
          position: absolute;
          bottom: 90px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          z-index: 10;
          opacity: 0.4;
        }

        @media (max-width: 480px) { .hero-scroll-hint { display: none; } }

        .hero-scroll-label {
          font-family: 'Share Tech Mono', monospace;
          font-size: 9px;
          color: #3a5572;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .hero-scroll-mouse {
          width: 18px;
          height: 30px;
          border: 1px solid #1a3050;
          border-radius: 9px;
          display: flex;
          justify-content: center;
          padding-top: 5px;
        }

        .hero-scroll-ball {
          width: 3px;
          height: 7px;
          background: #00aaff;
          border-radius: 2px;
          animation: heroBounce 1.6s ease-in-out infinite;
        }

        .hero-bottom-bar {
          position: relative;
          z-index: 10;
          border-top: 1px solid rgba(0,150,255,0.1);
          padding: 14px clamp(20px, 5vw, 60px);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .hero-bottom-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Share Tech Mono', monospace;
          font-size: 10px;
          color: #3a5a72;
          letter-spacing: 1.5px;
        }

        .hero-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22f098;
          animation: heroPulseDot 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        .hero-bottom-certs {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        @media (max-width: 640px) { .hero-bottom-certs { display: none; } }

        .hero-cert-tag {
          font-family: 'Share Tech Mono', monospace;
          font-size: 9px;
          color: #3a5572;
          letter-spacing: 1.5px;
        }
      `}</style>

      <section id="home" className="hero-section">
        <MatrixCanvas />
        <div className="hero-grid-overlay" />
        <div className="hero-radial-glow" />
        <div className="hero-orb-top" />
        <div className="hero-orb-ring" />

        {/* Shield SVG */}
        <div className="hero-shield-wrap">
          <svg
            viewBox="0 0 500 580"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0.1, width: "100%" }}
          >
            <path
              d="M250 20L60 100V280C60 420 150 530 250 560C350 530 440 420 440 280V100L250 20Z"
              stroke="#00aaff"
              strokeWidth="2"
              fill="rgba(0,150,255,0.05)"
            />
            <path
              d="M250 70L110 140V280C110 390 180 480 250 508C320 480 390 390 390 280V140L250 70Z"
              stroke="#00aaff"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              fill="none"
            />
            <path
              d="M250 120L160 175V280C160 360 205 435 250 460C295 435 340 360 340 280V175L250 120Z"
              stroke="#00aaff"
              strokeWidth="1"
              fill="rgba(0,150,255,0.04)"
            />
            <circle
              cx="250"
              cy="280"
              r="60"
              stroke="#00aaff"
              strokeWidth="1.5"
              fill="rgba(0,150,255,0.07)"
            />
            <circle cx="250" cy="280" r="30" fill="rgba(0,150,255,0.14)" />
            <path
              d="M235 270 L245 284 L270 256"
              stroke="#00aaff"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              opacity="0.75"
            />
          </svg>
        </div>

        {/* Main Content */}
        <div className="hero-main">
          <div className="hero-inner">
            {/* Badge */}
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span className="hero-badge-text">
                System Online — All Systems Secured
              </span>
            </div>

            {/* Eyebrow */}
            <div className="hero-eyebrow">Elite Cybersecurity Defense</div>

            {/* Headline */}
            <h1 className="hero-headline">
              <span className="hero-headline-white">Soviet</span>
              <span className="hero-headline-blue">Brothers</span>
              <span className="hero-headline-sub">CyberSecurity</span>
            </h1>

            {/* Tagline */}
            <p className="hero-tagline">
              Protect<span className="hero-tagline-sep">·</span>
              Prevent<span className="hero-tagline-sep">·</span>
              Secure
            </p>

            {/* Typewriter */}
            <div className="hero-typewriter-row">
              <span className="hero-typewriter-text">{typed}</span>
              <span className="hero-cursor">|</span>
            </div>

            {/* Description */}
            <p className="hero-description">
              Enterprise-grade cyber defense trusted by organizations worldwide.
              We eliminate threats before they become breaches — so your
              business never stops.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-row">
              <button
                className="hero-btn-primary"
                onClick={() => scrollTo("contact")}
              >
                Get Started →
              </button>
              <button
                className="hero-btn-ghost"
                onClick={() => scrollTo("about")}
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="hero-stats-row">
              {[
                { n: "500", s: "+", l: "Clients Protected" },
                { n: "99", s: ".9%", l: "Uptime SLA" },
                { n: "24", s: "/7", l: "Monitoring" },
                { n: "ISO", s: "✓", l: "Certified" },
              ].map((stat) => (
                <div key={stat.l} className="hero-stat-item">
                  <div className="hero-stat-num">
                    {stat.n}
                    <em
                      className="hero-stat-accent"
                      style={{ fontStyle: "normal" }}
                    >
                      {stat.s}
                    </em>
                  </div>
                  <div className="hero-stat-label">{stat.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="hero-scroll-hint">
          <span className="hero-scroll-label">Scroll</span>
          <div className="hero-scroll-mouse">
            <div className="hero-scroll-ball" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="hero-bottom-bar">
          <div className="hero-bottom-status">
            <span className="hero-status-dot" />
            All systems operational — Zero active threats
          </div>
          <div className="hero-bottom-certs">
            {[
              "★ ISO 27001 CERTIFIED",
              "SOC 2 TYPE II",
              "CERT-IN EMPANELLED",
            ].map((b) => (
              <span key={b} className="hero-cert-tag">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
