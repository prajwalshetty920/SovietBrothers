import Section from "./Section";

function Blog() {
  const posts = [
    {
      title:
        "Modern Cyber Security: Trends, Techniques, and Skills Every Student Must Learn",
      cat: "Threat Intel",
      date: "Jan 7, 2026",
      read: "8 min",
      gradient: "from-blue-900 to-indigo-950",
      link: "https://medium.com/@rajchandark/modern-cyber-security-trends-techniques-and-skills-every-student-must-learn-89360b95a292",
      image: "/b1.jpg",
    },
    {
      title: "AI Enhanced Zero Trust Cybersecurity",
      cat: "Research",
      date: "Jan 5, 2026",
      read: "12 min",
      gradient: "from-indigo-900 to-blue-950",
      link: "https://medium.com/@datasciencemeetscybersecurity/ai-enhanced-zero-trust-cybersecurity-a4bb3954d0b4",
      image: "/b2.jpg",
    },
    {
      title:
        "AI in Cybersecurity 2025: How Artificial Intelligence Is Defending and Attacking",
      cat: "Guide",
      date: "Jan 3, 2026",
      read: "10 min",
      gradient: "from-cyan-900 to-blue-950",
      link: "https://gafowler.medium.com/ai-in-cybersecurity-2025-how-artificial-intelligence-is-defending-and-attacking-the-digital-ef9ac161ff48",
      image: "/b3.jpg",
    },
    {
      title:
        "Why Traditional Perimeter Security Fails and How Zero Trust Saves the Day",
      cat: "Analysis",
      date: "Jan 2, 2026",
      read: "9 min",
      gradient: "from-blue-950 to-purple-950",
      link: "https://medium.com/@svgavankar/why-traditional-perimeter-security-fails-and-how-zero-trust-saves-the-day-c5401a105426",
      image: "/b4.jpg",
    },
    {
      title: "7 Emerging Trends Redefining Cybersecurity in the AI Era",
      cat: "Best Practices",
      date: "Jan 1, 2026",
      read: "7 min",
      gradient: "from-sky-900 to-blue-950",
      link: "https://medium.com/@bharatkumar.m/7-emerging-trends-redefining-cybersecurity-in-the-ai-era-28cc1c53ee01",
      image: "/b5.jpg",
    },
    {
      title:
        "Cybersecurity in the Age of AI: Protect Systems from AI-Powered Threats",
      cat: "Strategy",
      date: "Dec 30, 2025",
      read: "11 min",
      gradient: "from-blue-900 to-teal-950",
      link: "https://medium.com/@anant3104/cybersecurity-in-the-age-of-ai-how-to-protect-systems-from-ai-powered-threats-b620ac7c1c0f",
      image: "/b6.jpg",
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
    <Section id="blog" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <div className="text-center mb-20">
          <div className="text-xs text-blue-400 font-bold tracking-[0.3em] uppercase mb-5">
            // Insights & Research
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Security{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              Intelligence
            </span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Stay ahead of threats with expert analysis, research, and practical
            security guidance from our team.
          </p>
        </div>

        {/* Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                flex
                flex-col
                rounded-2xl
                overflow-hidden
                border
                border-blue-900/40
                bg-gray-900/60
                backdrop-blur-xl
                transition-all
                duration-300
                ease-out
                hover:-translate-y-2
                hover:border-blue-500/60
                hover:shadow-xl
                hover:shadow-blue-950/40
                cursor-pointer
                will-change-transform
              "
            >
              {/* Hover Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                  bg-linear-to-br
                  from-blue-500/10
                  via-transparent
                  to-cyan-500/10
                  z-0
                "
              />

              {/* Image */}

              <div
                className={`
                  h-36
                  bg-linear-to-br
                  ${p.gradient}
                  relative
                  overflow-hidden
                  z-10
                `}
              >
                <div
                  className="
                    absolute
                    inset-0
                    bg-[linear-gradient(rgba(0,100,255,0.08)_1px,transparent_1px),
                    linear-gradient(90deg,rgba(0,100,255,0.08)_1px,transparent_1px)]
                    bg-size-[22px_22px]
                  "
                />

                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="200"
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105
  "
                />
              </div>

              {/* Content */}

              <div className="p-6 flex flex-col flex-1 relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`text-xs font-bold tracking-wide ${catColor[p.cat]}`}
                  >
                    {p.cat}
                  </span>

                  <span className="text-gray-700">•</span>

                  <span className="text-xs text-gray-600">{p.read} read</span>
                </div>

                <h3
                  className="
                  font-bold
                  text-white
                  text-base
                  leading-snug
                  flex-1
                  mb-6
                  transition-colors
                  duration-200
                  group-hover:text-blue-300
                "
                >
                  {p.title}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-mono">
                    {p.date}
                  </span>

                  <span
                    className="
                    text-xs
                    text-blue-500
                    font-semibold
                    transition-all
                    duration-200
                    group-hover:text-blue-300
                    group-hover:translate-x-1
                  "
                  >
                    Read More →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Blog;
