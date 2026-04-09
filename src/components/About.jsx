function About() {
  const highlights = [
    {
      icon: "🛡️",
      title: "Certified Experts",
      desc: "CISSP, CEH, OSCP certified professionals",
    },
    {
      icon: "⚡",
      title: "24/7 Monitoring",
      desc: "Round-the-clock threat detection and response",
    },
    {
      icon: "🏢",
      title: "Enterprise Grade",
      desc: "Scalable solutions for all business sizes",
    },
    {
      icon: "🌍",
      title: "500+ Clients",
      desc: "Trusted by companies across 30+ countries",
    },
  ];
  return (
    <div id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs text-blue-400 font-bold tracking-widest uppercase mb-4">
              // About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Your Trusted
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                Cyber Guardian
              </span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              SovietBrothersCyberSecurity is a premier cybersecurity firm
              founded by elite security professionals with decades of combined
              experience in government, military, and enterprise environments.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our mission is to make world-class cybersecurity accessible to
              every organization— from startups to Fortune 500 enterprises—with
              proactive defense strategies that evolve with the ever-changing
              threat landscape.
            </p>
            <div className="flex gap-4">
              <div className="flex-1 p-4 rounded-xl border border-blue-900/40 bg-blue-950/20">
                <div className="text-2xl font-black text-blue-400 mb-1">
                  Mission
                </div>
                <p className="text-xs text-gray-500">
                  Empowering organizations with cutting-edge security solutions
                  that protect, detect, and respond.
                </p>
              </div>
              <div className="flex-1 p-4 rounded-xl border border-cyan-900/40 bg-cyan-950/20">
                <div className="text-2xl font-black text-cyan-400 mb-1">
                  Vision
                </div>
                <p className="text-xs text-gray-500">
                  A world where every business can operate securely in the
                  digital age without compromise.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="p-6 rounded-2xl border border-blue-900/30 bg-gray-900/50 backdrop-blur-sm
                  hover:border-blue-500/50 hover:bg-blue-950/30 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-3xl mb-3">{h.icon}</div>
                <h3 className="font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {h.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
