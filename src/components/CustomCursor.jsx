import { useEffect, useRef } from "react";

const COLORS = {
  idle: {
    dot: "#00aaff",
    r1: "#00aaffcc",
    r2: "#00aaff66",
    r3: "#00aaff33",
    trail: "#00aaff",
  },

  hover: {
    dot: "#00c8ff",
    r1: "#00c8ffcc",
    r2: "#00c8ff66",
    r3: "#00c8ff33",
    trail: "#00c8ff",
  },

  click: {
    dot: "#0095dd",
    r1: "#0095ddcc",
    r2: "#0095dd66",
    r3: "#0095dd33",
    trail: "#0095dd",
  },
};

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ring1 = useRef(null);
  const ring2 = useRef(null);
  const ring3 = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const vel = useRef({ x: 0, y: 0 });

  const rings = useRef([
    { x: 0, y: 0, ease: 0.18 },
    { x: 0, y: 0, ease: 0.1 },
    { x: 0, y: 0, ease: 0.06 },
  ]);

  const hovering = useRef(false);
  const clicking = useRef(false);
  const trailCount = useRef(0);

  const trailColor = useRef(COLORS.idle.trail);

  function applyColor(state) {
    const c = COLORS[state];

    const els = [ring1.current, ring2.current, ring3.current];

    const colors = [c.r1, c.r2, c.r3];

    if (dotRef.current) {
      dotRef.current.style.background = c.dot;
      dotRef.current.style.boxShadow = `0 0 10px ${c.dot},
     0 0 20px ${c.dot}66,
     0 0 35px ${c.dot}33`;
    }

    els.forEach((el, i) => {
      if (el) el.style.borderColor = colors[i];
    });

    return c.trail;
  }

  function setHover(v) {
    hovering.current = v;

    if (clicking.current) return;

    trailColor.current = applyColor(v ? "hover" : "idle");

    if (ring1.current) {
      ring1.current.style.width = v ? "40px" : "28px";

      ring1.current.style.height = v ? "40px" : "28px";

      ring1.current.style.marginLeft = v ? "-20px" : "-14px";

      ring1.current.style.marginTop = v ? "-20px" : "-14px";

      ring1.current.style.borderWidth = v ? "2px" : "1.5px";
    }

    if (dotRef.current) {
      dotRef.current.style.width = v ? "12px" : "8px";

      dotRef.current.style.height = v ? "12px" : "8px";

      dotRef.current.style.marginLeft = v ? "-6px" : "-4px";

      dotRef.current.style.marginTop = v ? "-6px" : "-4px";
    }
  }

  function setClick(v) {
    clicking.current = v;

    if (v) {
      trailColor.current = applyColor("click");

      if (dotRef.current) {
        dotRef.current.style.width = "6px";
        dotRef.current.style.height = "6px";
        dotRef.current.style.marginLeft = "-3px";
        dotRef.current.style.marginTop = "-3px";
      }

      if (ring1.current) {
        ring1.current.style.width = "20px";
        ring1.current.style.height = "20px";
        ring1.current.style.marginLeft = "-10px";
        ring1.current.style.marginTop = "-10px";
      }
    } else {
      setHover(hovering.current);
    }
  }

  function spawnTrail(x, y) {
    const speed = Math.sqrt(vel.current.x ** 2 + vel.current.y ** 2);

    if (speed < 3 || trailCount.current >= 12) return;

    trailCount.current++;

    const d = document.createElement("div");

    const size = Math.min(6, 2 + speed * 0.15);

    Object.assign(d.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: `${size}px`,
      height: `${size}px`,
      marginLeft: `-${size / 2}px`,
      marginTop: `-${size / 2}px`,
      borderRadius: "50%",
      background: trailColor.current,
      pointerEvents: "none",
      zIndex: "9998",
      transform: `translate3d(${x}px,${y}px,0)`,
      opacity: "0.7",
      transition: "opacity 0.6s ease, transform 0.6s ease",
    });

    document.body.appendChild(d);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        d.style.opacity = "0";

        d.style.transform = `translate3d(${x + vel.current.x * 2}px,${
          y + vel.current.y * 2
        }px,0) scale(0)`;

        setTimeout(() => {
          d.remove();
          trailCount.current--;
        }, 650);
      });
    });
  }

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    trailColor.current = applyColor("idle");

    const ringEls = [ring1.current, ring2.current, ring3.current];

    const onMove = (e) => {
      vel.current.x = e.clientX - mouse.current.x;

      vel.current.y = e.clientY - mouse.current.y;

      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`;
      }

      spawnTrail(e.clientX, e.clientY);
    };

    const onDown = () => setClick(true);

    const onUp = () => setClick(false);

    const addHover = () => setHover(true);

    const removeHover = () => setHover(false);

    document.addEventListener("mousemove", onMove);

    document.addEventListener("mousedown", onDown);

    document.addEventListener("mouseup", onUp);

    const interactive = document.querySelectorAll(
      "a, button, input, textarea, select",
    );

    interactive.forEach((el) => {
      el.addEventListener("mouseenter", addHover);

      el.addEventListener("mouseleave", removeHover);
    });

    let raf;

    function animate() {
      const speed = Math.sqrt(vel.current.x ** 2 + vel.current.y ** 2);

      const angle = (Math.atan2(vel.current.y, vel.current.x) * 180) / Math.PI;

      rings.current.forEach((r, i) => {
        r.x += (mouse.current.x - r.x) * r.ease;

        r.y += (mouse.current.y - r.y) * r.ease;

        const lag = Math.max(0, speed - i * 2) * 0.008;

        const sx = 1 + lag;
        const sy = 1 / sx;

        if (ringEls[i]) {
          ringEls[i].style.transform = `translate3d(${r.x}px,${r.y}px,0)
               rotate(${angle}deg)
               scaleX(${sx})
               scaleY(${sy})`;
        }
      });

      vel.current.x *= 0.8;
      vel.current.y *= 0.8;

      raf = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(raf);

      document.removeEventListener("mousemove", onMove);

      document.removeEventListener("mousedown", onDown);

      document.removeEventListener("mouseup", onUp);

      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);

        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  const baseRingStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    pointerEvents: "none",
    zIndex: 9999,
    borderRadius: "50%",
    willChange: "transform",
    backdropFilter: "blur(2px)",
    transition: "border-color 0.2s, width 0.2s, height 0.2s, border-width 0.2s",
  };

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          marginLeft: "-4px",
          marginTop: "-4px",
          borderRadius: "50%",
          background: "#00aaff",
          boxShadow: "0 0 10px #00aaff, 0 0 20px #00aaff55",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
          transition:
            "width 0.15s, height 0.15s, background 0.2s, box-shadow 0.2s",
        }}
      />

      <div
        ref={ring1}
        style={{
          ...baseRingStyle,
          width: "28px",
          height: "28px",
          marginLeft: "-14px",
          marginTop: "-14px",
          border: "1.5px solid #00aaffcc",
        }}
      />

      <div
        ref={ring2}
        style={{
          ...baseRingStyle,
          width: "50px",
          height: "50px",
          marginLeft: "-25px",
          marginTop: "-25px",
          border: "1px solid #00aaff66",
        }}
      />

      <div
        ref={ring3}
        style={{
          ...baseRingStyle,
          width: "74px",
          height: "74px",
          marginLeft: "-37px",
          marginTop: "-37px",
          border: "0.5px solid #00aaff33",
        }}
      />
    </>
  );
}
