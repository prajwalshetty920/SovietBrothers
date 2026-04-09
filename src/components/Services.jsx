// import serviceIcons from "../../utils/serviceIcons";
// import Section from "./Section";

// function Services() {
//   const services = [
//     {
//       name: "Network Security",
//       desc: "Comprehensive network architecture review, firewall management, and intrusion detection systems to protect your infrastructure.",
//     },
//     {
//       name: "Penetration Testing",
//       desc: "Ethical hacking assessments that identify vulnerabilities before malicious actors can exploit them in your systems.",
//     },
//     {
//       name: "Vulnerability Assessment",
//       desc: "Continuous scanning and assessment of your attack surface to prioritize and remediate security weaknesses.",
//     },

//     {
//       name: "Web App Security",
//       desc: "OWASP-aligned application security testing, code reviews, and runtime protection for web applications.",
//     },
//     {
//       name: "Cyber Risk Management",
//       desc: "Strategic risk assessment, compliance management, and security governance frameworks tailored to your business.",
//     },
//   ];
//   return (
//     <Section id="services" className="py-24 px-6 bg-gray-950/50">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <div className="text-xs text-blue-400 font-bold tracking-widest uppercase mb-4">
//             // Our Services
//           </div>
//           <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
//             Comprehensive{" "}
//             <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
//               Security
//             </span>{" "}
//             Solutions
//           </h2>
//           <p className="text-gray-500 max-w-2xl mx-auto">
//             End-to-end cybersecurity services designed to protect your digital
//             assets, reputation, and business continuity.
//           </p>
//         </div>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((s) => (
//             <div
//               key={s.name}
//               className="group p-6 rounded-2xl border border-blue-900/30 bg-gray-900/60 backdrop-blur-sm
//                 hover:border-blue-500/50 hover:bg-blue-950/20 transition-all duration-300 hover:-translate-y-2
//                 hover:shadow-xl hover:shadow-blue-950/40 cursor-pointer"
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="p-2 rounded-xl bg-blue-950/60 border border-blue-900/40 group-hover:border-blue-500/50 transition-all">
//                   {serviceIcons[s.name] || <ShieldIcon size={28} />}
//                 </div>
//                 <div className="w-6 h-0.5 bg-linear-to-r from-blue-500 to-transparent group-hover:w-12 transition-all duration-300" />
//               </div>
//               <h3 className="font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
//                 {s.name}
//               </h3>
//               <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
//               <div className="mt-4 text-xs text-blue-500 font-semibold group-hover:text-blue-300 transition-colors">
//                 Learn More →
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// }

// export default Services;

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

  // React Icons mapping

  const serviceIcons = {
    "Network Security": <FaShieldAlt size={28} className="text-blue-400" />,
    "Penetration Testing": <FaBug size={28} className="text-blue-400" />,
    "Vulnerability Assessment": (
      <FaSearch size={28} className="text-blue-400" />
    ),
    "Web App Security": <FaGlobe size={28} className="text-blue-400" />,
    "Cyber Risk Management": (
      <FaChartLine size={28} className="text-blue-400" />
    ),
  };

  return (
    <Section id="services" className="py-28 px-6 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <div className="text-center mb-20">
          <div className="text-xs text-blue-400 font-bold tracking-[0.3em] uppercase mb-5">
            // Our Services
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              Security
            </span>{" "}
            Solutions
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            End-to-end cybersecurity services designed to protect your digital
            assets, reputation, and business continuity.
          </p>
        </div>

        {/* Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.name}
              className="
                group
                relative
                p-7
                rounded-2xl
                border
                border-blue-900/30
                bg-gray-900/60
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-3
                hover:border-blue-500/60
                hover:shadow-2xl
                hover:shadow-blue-950/40
                cursor-pointer
                overflow-hidden
              "
            >
              {/* Glow */}

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

              <div className="flex items-center gap-4 mb-5 relative z-10">
                <div
                  className="
                    p-3
                    rounded-xl
                    bg-blue-950/60
                    border
                    border-blue-900/40
                    group-hover:border-blue-500/60
                    transition-all
                    duration-300
                    shadow-lg
                    shadow-blue-950/30
                  "
                >
                  {serviceIcons[s.name]}
                </div>

                <div
                  className="
                    w-8
                    h-0.5
                    bg-linear-to-r
                    from-blue-500
                    to-transparent
                    group-hover:w-14
                    transition-all
                    duration-300
                  "
                />
              </div>

              {/* Title */}

              <h3 className="font-bold text-white text-lg mb-3 group-hover:text-blue-300 transition-colors">
                {s.name}
              </h3>

              {/* Description */}

              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {s.desc}
              </p>

              {/* Footer */}

              {/* <div className="flex items-center text-xs font-semibold text-blue-500 group-hover:text-blue-300 transition-all">
                Learn More
                <span className="ml-1 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Services;
