import Section from "./Section";

function Events() {
  // example for showing the events data entry
  // const events = [
  //   {
  //     name: "Cyber Security Workshop",
  //     date: "May 15, 2025",
  //     type: "Workshop",
  //     desc: "Hands-on workshop covering the latest threat intelligence, defensive tools, and incident response playbooks.",
  //     location: "New Delhi + Online",
  //   },
  //   {
  //     name: "Ethical Hacking Webinar",
  //     date: "May 28, 2025",
  //     type: "Webinar",
  //     desc: "Live demonstration of advanced penetration testing techniques with Q&A session by OSCP-certified experts.",
  //     location: "Online",
  //   },
  // ];
  const events = [];

  const typeColor = {
    Workshop: "text-purple-400 border-purple-900/40 bg-purple-950/40",
    Webinar: "text-cyan-400 border-cyan-900/40 bg-cyan-950/40",
    Seminar: "text-amber-400 border-amber-900/40 bg-amber-950/40",
    Bootcamp: "text-red-400 border-red-900/40 bg-red-950/40",
  };

  return (
    <Section id="events" className="py-28 px-6 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <div className="text-center mb-20">
          <div className="text-xs text-blue-400 font-bold tracking-[0.3em] uppercase mb-5">
            // Events
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Upcoming{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              Events
            </span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Join thousands of security professionals at our world-class training
            events and conferences.
          </p>
        </div>

        {/* Condition: No Events */}

        {events.length === 0 ? (
          <div
            className="
    relative
    flex
    flex-col
    items-center
    justify-center
    text-center
    border
    border-blue-900/30
    bg-gray-900/60
    backdrop-blur-xl
    rounded-2xl
    p-16
    overflow-hidden
  "
          >
            {/* Glow Background */}

            <div
              className="
      absolute
      inset-0
      opacity-20
      bg-linear-to-br
      from-blue-500/10
      via-transparent
      to-cyan-500/10
    "
            />

            {/* Icon */}

            <div
              className="
      text-5xl
      mb-6
      bg-blue-950/40
      border
      border-blue-900/40
      rounded-full
      w-20
      h-20
      flex
      items-center
      justify-center
      shadow-lg
      shadow-blue-950/40
    "
            >
              📅
            </div>

            {/* Title */}

            <h3
              className="
      text-xl
      font-bold
      text-white
      mb-2
    "
            >
              No Upcoming Events
            </h3>

            {/* Description */}

            <p
              className="
      text-gray-400
      text-sm
      max-w-md
      mb-6
      leading-relaxed
    "
            >
              We don't have any scheduled events at the moment. Stay tuned — new
              cybersecurity workshops and webinars will be announced soon.
            </p>

            {/* Optional Button */}

            <button
              className="
      px-6
      py-2
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
      hover:shadow-lg
      hover:shadow-blue-900/40
    "
            >
              Check Back Later
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-8">
            {events.map((e) => (
              <div
                key={e.name}
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
                  hover:border-blue-500/50
                  hover:shadow-2xl
                  hover:shadow-blue-950/40
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
                  rounded-2xl
                "
                />

                <div className="flex items-start justify-between mb-5 relative z-10">
                  <div>
                    <span
                      className={`
                        px-3
                        py-1
                        rounded-md
                        text-xs
                        font-bold
                        border
                        tracking-wide
                        ${typeColor[e.type]}
                      `}
                    >
                      {e.type}
                    </span>

                    <h3
                      className="
                      font-bold
                      text-white
                      mt-3
                      text-lg
                      group-hover:text-blue-300
                      transition-colors
                    "
                    >
                      {e.name}
                    </h3>
                  </div>

                  <div className="text-right shrink-0 ml-4">
                    <div className="text-sm text-blue-400 font-mono font-bold">
                      {e.date}
                    </div>

                    <div className="text-xs text-gray-500 mt-1">
                      📍 {e.location}
                    </div>
                  </div>
                </div>

                <p
                  className="
                  text-sm
                  text-gray-500
                  leading-relaxed
                  mb-6
                  relative
                  z-10
                "
                >
                  {e.desc}
                </p>

                <button
                  className="
                    px-5
                    py-2
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
                    hover:shadow-lg
                    hover:shadow-blue-900/40
                    relative
                    z-10
                  "
                >
                  Register →
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

export default Events;
