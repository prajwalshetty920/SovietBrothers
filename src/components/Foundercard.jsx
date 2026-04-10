import {
  FaLinkedinIn,
  FaGlobe,
  FaEnvelope,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaUserTie,
} from "react-icons/fa";

function FounderCard() {
  const skills = [
    "OSINT",
    "Digital Forensics",
    "Cyber Crime Analysis",
    "Ethical Hacking Mentor",
  ];

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-xs text-blue-400 font-semibold tracking-[0.2em] uppercase mb-3">
            // Leadership
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Meet the{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              Founder
            </span>
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            The mind behind our cybersecurity vision, research, and innovation.
          </p>
        </div>

        {/* Card */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 bg-blue-600/10 blur-3xl rounded-3xl" />

          <div
            className="
            relative
            flex
            flex-col
            md:flex-row
            items-center
            gap-8
            p-6 sm:p-8 md:p-10
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-2xl
            shadow-[0_20px_60px_rgba(0,0,0,0.6)]
            transition-all
            duration-300
            hover:border-blue-500/40
          "
          >
            {/* Photo */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-blue-600/20 blur-xl rounded-2xl" />

              <img
                src="/founderphoto.jpeg"
                alt="Founder"
                className="
                relative
                w-32
                h-32
                sm:w-36
                sm:h-36
                md:w-40
                md:h-40
                rounded-2xl
                object-cover
                border
                border-blue-500/40
                shadow-lg
              "
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              {/* Name */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Prajwal M M
              </h3>

              {/* Role */}
              <div
                className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold
              bg-blue-600/15 text-blue-300 border border-blue-500/30 mb-5"
              >
                Founder & Lead Researcher
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-gray-300
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-sm
                    hover:border-blue-400/40
                    hover:text-white
                    transition-all
                  "
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-7 max-w-2xl">
                Hello, I’m a passionate Ethical Hacking trainer and founder,
                dedicated to helping others understand cybersecurity from basic
                to advanced levels. With strong practical skills and real-world
                knowledge, I focus on teaching how hackers think and how to
                defend against modern cyber threats. My mission is to empower
                students with the skills needed to stay secure in today’s
                digital world.
              </p>

              {/* Social Icons */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {/* Email */}
                <a
                  href="mailto:sovietbrothers.official@gmail.com"
                  className="social-btn hover:bg-blue-600"
                >
                  <FaEnvelope />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="social-btn hover:bg-blue-700"
                >
                  <FaLinkedinIn />
                </a>

                {/* Website */}
                <a
                  href="https://topmate.io/sovietbrother"
                  target="_blank"
                  className="social-btn hover:bg-cyan-600"
                >
                  <FaUserTie />
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@SovietBrotherskannada"
                  target="_blank"
                  className="social-btn hover:bg-red-600"
                >
                  <FaYoutube />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/soviet_brothers?igsh=MW12bmR4Ym9zbHNpaQ=="
                  target="_blank"
                  className="social-btn hover:bg-pink-600"
                >
                  <FaInstagram />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://whatsapp.com/channel/0029Vb7OAhOEVccNNbc7fi1f"
                  target="_blank"
                  className="social-btn hover:bg-green-600"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderCard;
