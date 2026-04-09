function CTA() {
  return (
    <div className="py-24 px-6 bg-gray-950/50">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="relative p-12 rounded-3xl overflow-hidden border border-blue-700/30
          bg-linear-to-br from-blue-950/80 to-gray-950/80 backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,100,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,100,255,0.05)_1px,transparent_1px)] bg-size-[30px_30px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <img
              src="/logo.jpeg"
              alt="Logo"
              className="h-14 rounded-2xl w-auto object-contain"
            />
            <h2 className="text-4xl md:text-5xl font-black text-white mt-6 mb-4 leading-tight">
              Secure Your Business
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
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
                className="px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl
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
    </div>
  );
}

export default CTA;
