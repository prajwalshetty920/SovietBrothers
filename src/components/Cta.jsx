function CTA() {
  return (
    <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gray-950/50">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="
          relative
          p-6 sm:p-10 md:p-12
          rounded-3xl
          overflow-hidden
          border
          border-blue-700/30
          bg-linear-to-br
          from-blue-950/80
          to-gray-950/80
          backdrop-blur-sm
        "
        >
          {/* Grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,100,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,100,255,0.05)_1px,transparent_1px)] bg-size-[30px_30px]" />

          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-60 sm:w-80 h-32 sm:h-40 bg-blue-600/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Logo */}
            <img
              src="/logo.jpeg"
              alt="Logo"
              className="
                h-10
                sm:h-12
                md:h-14
                mx-auto
                rounded-2xl
                object-contain
              "
            />

            {/* Heading */}
            <h2
              className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-black
              text-white
              mt-5
              mb-4
              leading-tight
              wrap-break-word
            "
            >
              Secure Your Business
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                Today
              </span>
            </h2>

            {/* Description */}
            <p
              className="
              text-sm
              sm:text-base
              text-gray-400
              max-w-xl
              mx-auto
              mb-6 sm:mb-8
              leading-relaxed
              px-1
            "
            >
              Every second without proper security is a window of opportunity
              for attackers. Get a free security assessment and discover your
              vulnerabilities before they do.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="
                w-full sm:w-auto
                px-6 sm:px-8
                py-3 sm:py-4
                bg-linear-to-r
                from-blue-600
                to-cyan-600
                text-white
                font-bold
                rounded-xl
                hover:from-blue-500
                hover:to-cyan-500
                shadow-xl
                shadow-blue-900/50
                hover:shadow-blue-700/60
                transition-all
                duration-300
                hover:scale-105
                text-xs sm:text-sm
                tracking-widest
                uppercase
              "
              >
                Free Security Assessment
              </a>

              <a
                href="tel:+919844556958"
                className="
                w-full sm:w-auto
                px-6 sm:px-8
                py-3 sm:py-4
                border
                border-blue-500/40
                text-blue-300
                font-semibold
                rounded-xl
                hover:bg-blue-950/60
                transition-all
                duration-300
                text-xs sm:text-sm
                tracking-widest
                uppercase
              "
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
