import { useEffect, useState } from "react";

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
                bg-linear-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500
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

export default Navbar;
