function Footer() {
  const links = {
    Services: [
      "Network Security",
      "Pen Testing",
      "Vulnerability Assessment",
      "Risk Management",
      "Web App Security",
      "Cyber Risk Management",
    ],
    Courses: ["Ethical Hacking", "Network Security", "Advanced Cybersecurity"],
    Company: ["About Us", "Blog", "Events", "Careers"],
  };
  const socials = [
    {
      key: "in",
      link: "https://www.linkedin.com/in/prajwal-mm-79345a402/",
    },
    {
      key: "gh",
      link: "https://github.com/prajwalshetty920",
    },

    {
      key: "yt",
      link: "https://www.youtube.com/@SovietBrotherskannada",
    },
    {
      key: "wa",
      link: "https://whatsapp.com/channel/0029Vb7OAhOEVccNNbc7fi1f",
    },
  ];
  return (
    <footer className="border-t border-blue-900/20 bg-gray-950 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.jpeg"
                alt="Logo"
                className="h-14 rounded-2xl w-auto object-contain"
              />
              <div>
                <div className="font-black text-white">SovietBrothers</div>
                <div className="text-xs text-gray-600 tracking-widest uppercase">
                  CyberSecurity
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-xs">
              Protecting organizations worldwide with elite cybersecurity
              solutions since 2019.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <button
                  key={s.key}
                  onClick={() => window.open(s.link, "_blank")}
                  className="
      w-9
      h-9
      rounded-lg
      border
      border-blue-900/40
      text-gray-600
      hover:text-blue-400
      hover:border-blue-500/50
      transition-all
      font-mono
      text-xs
      font-bold
      hover:bg-blue-950/30
    "
                >
                  {s.key}
                </button>
              ))}
            </div>
          </div>
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <h4 className="font-bold text-white mb-4 text-xs uppercase tracking-widest">
                {cat}
              </h4>
              <ul className="space-y-2">
                {items.map((i) => (
                  <li key={i}>
                    <button className="text-sm text-gray-600 hover:text-blue-400 transition-colors">
                      {i}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-blue-900/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-700 font-mono">
            © 2025 SovietBrothersCyberSecurity. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-gray-700 font-mono">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
