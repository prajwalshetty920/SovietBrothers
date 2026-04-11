import Section from "./Section";

// export default JoinUs;

function JoinUs() {
  return (
    <Section id="join" className="py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-xs text-blue-400 font-bold tracking-widest uppercase mb-3">
            // Careers
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Join Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              Team
            </span>
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            We are always looking for talented cybersecurity professionals. Send
            us your CV or resume and we will contact you when a suitable
            opportunity becomes available.
          </p>
        </div>

        {/* Card */}
        <div
          className="
          relative
          p-6 sm:p-8
          rounded-2xl
          border
          border-blue-900/30
          bg-gray-900/60
          text-center
          transition-all
          duration-300
          hover:border-blue-500/40
          hover:bg-blue-950/20
        "
        >
          {/* Icon */}
          <div className="text-4xl mb-4">📄</div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Send Your CV / Resume
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm sm:text-base mb-6 max-w-md mx-auto">
            Interested in working with us? Email your CV or resume to our
            official email address and our team will review your application.
          </p>

          {/* Button */}
          <button
            onClick={() =>
              (window.location.href =
                "mailto:sovietbrothers.official@gmail.com?subject=Job Application&body=Hello, I am interested in joining your team. Please find my CV/Resume attached.")
            }
            className="
              w-full sm:w-auto
              px-8
              py-3
              bg-linear-to-r
              from-blue-600
              to-cyan-600
              text-white
              font-bold
              rounded-xl
              hover:from-blue-500
              hover:to-cyan-500
              shadow-lg
              shadow-blue-900/40
              transition-all
              duration-300
              hover:scale-105
              text-sm
              tracking-widest
              uppercase
              cursor-pointer
            "
          >
            Send CV via Email
          </button>

          {/* Small Note */}
          <p className="text-xs text-gray-500 mt-4">
            Accepted formats: PDF, DOC, DOCX
          </p>
        </div>
      </div>
    </Section>
  );
}

export default JoinUs;
