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
    <div id="join" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs text-blue-400 font-bold tracking-widest uppercase mb-4">
            // Careers
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Join Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
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
        <div className="text-center p-10 rounded-2xl border border-blue-900/30 bg-linear-to-br from-blue-950/40 to-gray-900/60">
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
            className="px-8 py-3 bg-linear-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl
            hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-900/40 transition-all duration-300 hover:scale-105 text-sm tracking-widest uppercase"
          >
            Send Open Application
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
