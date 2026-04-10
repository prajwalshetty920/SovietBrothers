// import Section from "./Section";

// function Courses() {
//   const courses = [
//     {
//       title: "Ethical Hacking",
//       level: "Advanced",
//       duration: "12 Weeks",
//       desc: "Master penetration testing methodologies, tools, and real-world attack techniques used by security professionals.",
//       color: "from-blue-600 to-blue-800",
//     },
//     {
//       title: "Cyber Security Fundamentals",
//       level: "Beginner",
//       duration: "8 Weeks",
//       desc: "Build a solid foundation in cybersecurity concepts, threat landscape, and defensive strategies.",
//       color: "from-cyan-600 to-blue-700",
//     },
//     {
//       title: "Network Security Training",
//       level: "Intermediate",
//       duration: "10 Weeks",
//       desc: "Deep dive into network protocols, firewall configuration, VPNs, and advanced network defense techniques.",
//       color: "from-indigo-600 to-blue-700",
//     },
//     {
//       title: "Penetration Testing Course",
//       level: "Advanced",
//       duration: "14 Weeks",
//       desc: "Comprehensive course covering web, mobile, and network penetration testing with hands-on labs.",
//       color: "from-blue-700 to-cyan-700",
//     },
//     {
//       title: "SOC Analyst Training",
//       level: "Intermediate",
//       duration: "10 Weeks",
//       desc: "Train to become a Security Operations Center analyst—threat hunting, SIEM, incident response.",
//       color: "from-sky-600 to-blue-700",
//     },
//   ];
//   const levelColor = {
//     Beginner: "bg-green-950/60 text-green-400 border-green-900/40",
//     Intermediate: "bg-yellow-950/60 text-yellow-400 border-yellow-900/40",
//     Advanced: "bg-red-950/60 text-red-400 border-red-900/40",
//   };
//   return (
//     <Section id="courses" className="py-24 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <div className="text-xs text-blue-400 font-bold tracking-widest uppercase mb-4">
//             // Training & Courses
//           </div>
//           <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
//             Level Up Your{" "}
//             <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
//               Skills
//             </span>
//           </h2>
//           <p className="text-gray-500 max-w-2xl mx-auto">
//             Industry-recognized training programs designed by practitioners, for
//             practitioners.
//           </p>
//         </div>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses.map((c) => (
//             <div
//               key={c.title}
//               className="group flex flex-col rounded-2xl overflow-hidden border border-blue-900/30 bg-gray-900/60
//                 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-950/30"
//             >
//               <div className={`h-2 bg-linear-to-r ${c.color}`} />
//               <div className="p-6 flex flex-col flex-1">
//                 <div className="flex items-start justify-between mb-3">
//                   <h3 className="font-bold text-white group-hover:text-blue-300 transition-colors text-sm leading-tight flex-1 mr-2">
//                     {c.title}
//                   </h3>
//                   <span
//                     className={`px-2 py-0.5 rounded-md text-xs font-semibold border ${levelColor[c.level]} whitespace-nowrap`}
//                   >
//                     {c.level}
//                   </span>
//                 </div>
//                 <div className="text-xs text-gray-600 mb-3 font-mono">
//                   ⏱ {c.duration}
//                 </div>
//                 <p className="text-sm text-gray-500 leading-relaxed flex-1">
//                   {c.desc}
//                 </p>
//                 <button
//                   className="mt-6 w-full py-2.5 rounded-xl border border-blue-600/40 text-blue-400 text-xs font-bold uppercase tracking-widest
//                   hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/40"
//                 >
//                   Enroll Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// }

// export default Courses;

import Section from "./Section";

import {
  FaClock,
  FaArrowRight,
  FaShieldAlt,
  FaUserGraduate,
} from "react-icons/fa";

function Courses() {
  const courses = [
    {
      title: "Ethical Hacking Basics ",
      level: "Beginner",
      duration: "4 Weeks",
      desc: "Learn cybersecurity basics, online safety, cyber attack awareness, and digital protection skills for beginners and families.",
      color: "from-blue-600 to-blue-800",
      link: "https://topmate.io/sovietbrother/2041233?utm_source=public_profile&utm_campaign=sovietbrother",
    },
    {
      title: "Network Security",
      level: "Beginner",
      duration: "4 Weeks",
      desc: "Learn network security fundamentals, common attacks, and practical methods to protect networks, Wi-Fi, and connected devices.",
      color: "from-cyan-600 to-blue-700",
      link: "https://topmate.io/sovietbrother/2041256?utm_source=public_profile&utm_campaign=sovietbrother",
    },
    {
      title: "Advanced Cybersecurity",
      level: "Advanced",
      duration: "10 Weeks",
      desc: "Master ethical hacking, penetration testing, threat detection, and cyber defense with real-world advanced cybersecurity skills.",
      color: "from-indigo-600 to-blue-700",
      link: "https://topmate.io/sovietbrother/2041268?utm_source=public_profile&utm_campaign=sovietbrother",
    },
  ];

  const levelColor = {
    Beginner: "bg-green-950/60 text-green-400 border-green-900/40",
    Intermediate: "bg-yellow-950/60 text-yellow-400 border-yellow-900/40",
    Advanced: "bg-red-950/60 text-red-400 border-red-900/40",
  };

  return (
    <Section id="courses" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <div className="text-center mb-24">
          <div className="text-xs text-blue-400 font-bold tracking-[0.35em] uppercase mb-6">
            // Training & Courses
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Level Up Your{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              Cyber Skills
            </span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-base">
            Industry-recognized cybersecurity training programs designed by
            practitioners, for practitioners.
          </p>
        </div>

        {/* Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {courses.map((c) => (
            <div
              key={c.title}
              className="
                group
                relative
                flex
                flex-col
                rounded-2xl
                overflow-hidden
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

              {/* Header */}

              <div
                className={`
                  relative
                  h-20
                  bg-linear-to-r
                  ${c.color}
                  flex
                  items-center
                  justify-between
                  px-6
                `}
              >
                <div className="flex items-center gap-3 text-white font-semibold">
                  <FaShieldAlt size={16} />
                  Cyber Training
                </div>

                <span
                  className={`
                    px-3
                    py-1
                    rounded-lg
                    text-xs
                    font-semibold
                    border
                    ${levelColor[c.level]}
                  `}
                >
                  {c.level}
                </span>
              </div>

              {/* Content */}

              <div className="p-5 sm:p-6 lg:p-7 flex flex-col flex-1">
                <h3
                  className="
                    font-bold
                    text-white
                    text-lg
                    mb-3
                    group-hover:text-blue-300
                    transition-colors
                  "
                >
                  {c.title}
                </h3>

                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                  <FaClock />
                  {c.duration}
                </div>

                <p
                  className="
                    text-sm
                    text-gray-500
                    leading-relaxed
                    flex-1
                  "
                >
                  {c.desc}
                </p>

                {/* Footer */}

                <div className="mt-7 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <FaUserGraduate />
                    Certification Included
                  </div>

                  <button
                    onClick={() => window.open(c.link, "_blank")}
                    className="
                      px-5
                      py-2.5
                      rounded-xl
                      border
                      border-blue-600/40
                      text-blue-400
                      text-xs
                      font-bold
                      uppercase
                      tracking-widest
                      transition-all
                      duration-300
                      hover:bg-blue-600
                      hover:text-white
                      hover:border-blue-600
                      hover:shadow-lg
                      hover:shadow-blue-900/40
                      flex
                      items-center
                      gap-2
                    "
                  >
                    Enroll
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*  */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() =>
              window.open("https://topmate.io/sovietbrother", "_blank")
            }
            className="
      group
      relative
      px-9
      py-3.5
      rounded-xl
      font-bold
      text-sm
      uppercase
      tracking-widest
      text-white
      bg-gradient-to-r
      from-blue-600
      via-cyan-500
      to-blue-600
      shadow-lg
      shadow-blue-900/40
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-xl
      hover:shadow-cyan-900/50
      flex
      items-center
      gap-3
      overflow-hidden
    "
          >
            {/* Glow layer */}
            <span
              className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-300
        bg-gradient-to-r
        from-blue-500/20
        via-cyan-400/20
        to-blue-500/20
      "
            />

            {/* Text */}
            <span className="relative">Visit Our Store</span>

            {/* Arrow */}
            <FaArrowRight
              className="
        relative
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
            />
          </button>
        </div>
        {/*  */}
      </div>
    </Section>
  );
}

export default Courses;
