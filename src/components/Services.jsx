import Section from "./Section";
import {
  FaShieldAlt,
  FaBug,
  FaSearch,
  FaGlobe,
  FaChartLine,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      name: "Network Security",
      desc: "Comprehensive network architecture review, firewall management, and intrusion detection systems to protect your infrastructure.",
    },
    {
      name: "Penetration Testing",
      desc: "Ethical hacking assessments that identify vulnerabilities before malicious actors can exploit them in your systems.",
    },
    {
      name: "Vulnerability Assessment",
      desc: "Continuous scanning and assessment of your attack surface to prioritize and remediate security weaknesses.",
    },
    {
      name: "Web App Security",
      desc: "OWASP-aligned application security testing, code reviews, and runtime protection for web applications.",
    },
    {
      name: "Cyber Risk Management",
      desc: "Strategic risk assessment, compliance management, and security governance frameworks tailored to your business.",
    },
  ];

  const serviceIcons = {
    "Network Security": (
      <FaShieldAlt className="text-blue-400 text-xl sm:text-2xl" />
    ),
    "Penetration Testing": (
      <FaBug className="text-blue-400 text-xl sm:text-2xl" />
    ),
    "Vulnerability Assessment": (
      <FaSearch className="text-blue-400 text-xl sm:text-2xl" />
    ),
    "Web App Security": (
      <FaGlobe className="text-blue-400 text-xl sm:text-2xl" />
    ),
    "Cyber Risk Management": (
      <FaChartLine className="text-blue-400 text-xl sm:text-2xl" />
    ),
  };

  return (
    <Section
      id="services"
      className="
        py-20
        sm:py-24
        md:py-28
        px-4
        sm:px-6
        bg-gray-950/50
        overflow-x-hidden
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <div className="text-center mb-14 sm:mb-16 md:mb-20">
          <div
            className="
            text-[10px]
            sm:text-xs
            text-blue-400
            font-bold
            tracking-[0.25em]
            uppercase
            mb-4
          "
          >
            // Our Services
          </div>

          <h2
            className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            font-black
            text-white
            mb-5
            leading-tight
          "
          >
            Comprehensive{" "}
            <span
              className="
              text-transparent
              bg-clip-text
              bg-linear-to-r
              from-blue-400
              to-cyan-400
            "
            >
              Security
            </span>{" "}
            Solutions
          </h2>

          <p
            className="
            text-sm
            sm:text-base
            text-gray-500
            max-w-2xl
            mx-auto
            leading-relaxed
          "
          >
            End-to-end cybersecurity services designed to protect your digital
            assets, reputation, and business continuity.
          </p>
        </div>

        {/* Grid */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5
          sm:gap-6
          md:gap-8
        "
        >
          {services.map((s) => (
            <div
              key={s.name}
              className="
                group
                relative
                flex
                flex-col
                h-full
                p-5
                sm:p-6
                md:p-7
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
              {/* Glow */}

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
                "
              />

              {/* Icon */}

              <div
                className="
                flex
                items-center
                gap-3
                sm:gap-4
                mb-4
                relative
                z-10
              "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    sm:w-12
                    sm:h-12
                    rounded-xl
                    bg-blue-950/60
                    border
                    border-blue-900/40
                    transition-all
                    duration-300
                  "
                >
                  {serviceIcons[s.name]}
                </div>

                {/* Stable line animation */}

                <div
                  className="
                    w-8
                    h-0.5
                    bg-linear-to-r
                    from-blue-500
                    to-transparent
                    transition-all
                    duration-300
                    group-hover:opacity-80
                  "
                />
              </div>

              {/* Title */}

              <h3
                className="
                font-bold
                text-white
                text-base
                sm:text-lg
                mb-2
                leading-snug
                group-hover:text-blue-300
                transition-colors
              "
              >
                {s.name}
              </h3>

              {/* Description */}

              <p
                className="
                text-sm
                text-gray-500
                leading-relaxed
                flex-1
              "
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Services;
