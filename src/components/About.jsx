import Section from "./Section";
import { FaShieldAlt, FaBolt, FaBuilding, FaGlobe } from "react-icons/fa";

function About() {
  const highlights = [
    {
      icon: <FaShieldAlt className="text-blue-400" size={28} />,
      title: "Certified Experts",
      desc: "CISSP, CEH, OSCP certified professionals",
    },
    {
      icon: <FaBolt className="text-cyan-400" size={28} />,
      title: "24/7 Monitoring",
      desc: "Round-the-clock threat detection and response",
    },
    {
      icon: <FaBuilding className="text-indigo-400" size={28} />,
      title: "Enterprise Grade",
      desc: "Scalable solutions for all business sizes",
    },
    {
      icon: <FaGlobe className="text-green-400" size={28} />,
      title: "500+ Clients",
      desc: "Trusted by companies across 30+ countries",
    },
  ];

  return (
    <Section id="about" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* LEFT CONTENT */}

          <div>
            <div className="text-xs text-blue-400 font-bold tracking-[0.3em] uppercase mb-5">
              // About Us
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Your Trusted
              <br />
              <span
                className="
                text-transparent
                bg-clip-text
                bg-linear-to-r
                from-blue-400
                to-cyan-400
              "
              >
                Cyber Guardian
              </span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6 text-base">
              SovietBrothersCyberSecurity is a premier cybersecurity firm
              founded by elite security professionals with decades of combined
              experience in government, military, and enterprise environments.
            </p>

            <p className="text-gray-400 leading-relaxed mb-10 text-base">
              Our mission is to make world-class cybersecurity accessible to
              every organization—from startups to Fortune 500 enterprises—with
              proactive defense strategies that evolve with the ever-changing
              threat landscape.
            </p>

            {/* Mission + Vision */}

            <div className="flex gap-5">
              <div
                className="
                flex-1
                p-5
                rounded-2xl
                border
                border-blue-900/40
                bg-blue-950/20
                backdrop-blur
                hover:border-blue-500/50
                hover:shadow-lg
                hover:shadow-blue-950/30
                transition-all
                duration-300
              "
              >
                <div className="text-xl font-black text-blue-400 mb-2">
                  Mission
                </div>

                <p className="text-sm text-gray-500 leading-relaxed">
                  Empowering organizations with cutting-edge security solutions
                  that protect, detect, and respond.
                </p>
              </div>

              <div
                className="
                flex-1
                p-5
                rounded-2xl
                border
                border-cyan-900/40
                bg-cyan-950/20
                backdrop-blur
                hover:border-cyan-500/50
                hover:shadow-lg
                hover:shadow-cyan-950/30
                transition-all
                duration-300
              "
              >
                <div className="text-xl font-black text-cyan-400 mb-2">
                  Vision
                </div>

                <p className="text-sm text-gray-500 leading-relaxed">
                  A world where every business can operate securely in the
                  digital age without compromise.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT HIGHLIGHTS */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="
                  group
                  relative
                  p-6
                  rounded-2xl
                  border
                  border-blue-900/30
                  bg-gray-900/60
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-500/60
                  hover:shadow-xl
                  hover:shadow-blue-950/40
                  overflow-hidden
                "
              >
                {/* Hover Glow */}

                <div
                  className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-300
                  bg-linear-to-br
                  from-blue-500/10
                  via-transparent
                  to-cyan-500/10
                "
                />

                {/* Icon */}

                <div
                  className="
                  mb-4
                  w-12
                  h-12
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-950/60
                  border
                  border-blue-900/40
                  group-hover:border-blue-500/60
                  transition-all
                "
                >
                  {h.icon}
                </div>

                {/* Title */}

                <h3
                  className="
                  font-bold
                  text-white
                  mb-2
                  group-hover:text-blue-300
                  transition-colors
                "
                >
                  {h.title}
                </h3>

                {/* Description */}

                <p
                  className="
                  text-sm
                  text-gray-500
                  leading-relaxed
                "
                >
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
