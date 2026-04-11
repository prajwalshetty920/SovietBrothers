import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaShieldAlt,
  FaUser,
  FaCommentDots,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import Section from "./Section";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [file, setFile] = useState(null);

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};

    if (!form.name.trim()) {
      e.name = "Name is required";
    }

    if (!form.email.match(/^\S+@\S+\.\S+$/)) {
      e.email = "Valid email required";
    }

    if (!form.message.trim()) {
      e.message = "Message is required";
    }

    return e;
  };

  //   const submit = (ev) => {
  //     ev.preventDefault();

  //     const e = validate();
  //     setErrors(e);

  //     if (Object.keys(e).length === 0) {
  //       setLoading(true);

  //       emailjs
  //         .send(
  //           "service_12fwa6i",
  //           "template_snzl2fe",
  //           {
  //             name: form.name,
  //             email: form.email,
  //             phone: form.phone,
  //             message: form.message,
  //           },
  //           "87mMYxzKQLjf_Kqoe",
  //         )
  //         .then(() => {
  //           setSubmitted(true);

  //           setForm({
  //             name: "",
  //             email: "",
  //             phone: "",
  //             message: "",
  //           });
  //         })
  //         .catch((error) => {
  //           console.error("EmailJS error:", error);
  //           alert("Failed to send message");
  //         })
  //         .finally(() => {
  //           setLoading(false);
  //         });
  //     }
  //   };

  const submit = (ev) => {
    ev.preventDefault();

    const e = validate();
    setErrors(e);

    if (Object.keys(e).length === 0) {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("message", form.message);

      if (file) {
        formData.append("attachment", file);
      }

      emailjs
        .sendForm(
          "service_4yi7vfn",
          "template_snzl2fe",
          ev.target,
          "87mMYxzKQLjf_Kqoe",
        )
        .then(() => {
          setSubmitted(true);
          setFile(null);

          setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        })
        .catch((error) => {
          console.error(error);
          alert("Failed to send message");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 pl-10 bg-gray-900/80 border rounded-xl text-white placeholder-gray-600 text-sm
     focus:outline-none focus:border-blue-500 transition-all duration-200
     ${
       errors[field]
         ? "border-red-500/60"
         : "border-blue-900/40 hover:border-blue-700/40"
     }`;

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      val: "sovietbrothers.official@gmail.com",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      val: "+91 94811 72935",
    },
  ];

  return (
    <Section id="contact" className="py-24 px-6 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        {/* Title */}

        <div className="text-center mb-16">
          <div className="text-xs text-blue-400 font-bold tracking-widest uppercase mb-4">
            // Contact
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              Touch
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side */}

          <div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Ready to secure your organization? Our team is available 24/7 to
              discuss your security needs and provide tailored solutions.
            </p>

            <div className="space-y-4">
              {contactInfo.map((i) => (
                <div
                  key={i.label}
                  className="flex items-center gap-4 p-4 rounded-xl border border-blue-900/30 bg-gray-900/40 hover:border-blue-700/40 transition-all"
                >
                  <span className="text-blue-400 text-lg">{i.icon}</span>

                  <div>
                    <div className="text-xs text-gray-600 uppercase tracking-widest">
                      {i.label}
                    </div>

                    <div className="text-sm text-white font-medium">
                      {i.val}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Form */}

          <div className="p-6 sm:p-8 rounded-2xl border border-blue-900/30 bg-gray-900/50 backdrop-blur-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <FaShieldAlt size={64} className="text-blue-400" />

                <h3 className="text-2xl font-black text-white mt-6 mb-2">
                  Message Sent Successfully
                </h3>

                <p className="text-gray-500">
                  Our team will respond within 24 hours.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                  }}
                  className="mt-6 px-6 py-2 border border-blue-600/40 text-blue-400 rounded-xl text-sm hover:bg-blue-600 hover:text-white transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                {/* Name */}

                <div className="relative">
                  <FaUser className="absolute left-3 top-3.5 text-gray-500" />

                  <input
                    type="text"
                    className={inputClass("name")}
                    placeholder="Full Name *"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        name: e.target.value,
                      }))
                    }
                  />

                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}

                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3.5 text-gray-500" />

                  <input
                    type="email"
                    className={inputClass("email")}
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        email: e.target.value,
                      }))
                    }
                  />

                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}

                <div className="relative">
                  <FaPhone className="absolute left-3 top-3.5 text-gray-500" />

                  <input
                    type="tel"
                    className={inputClass("phone")}
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        phone: e.target.value,
                      }))
                    }
                  />
                </div>

                {/* Message */}

                <div className="relative">
                  <FaCommentDots className="absolute left-3 top-3 text-gray-500" />

                  <textarea
                    className={`${inputClass("message")} resize-none`}
                    rows={5}
                    placeholder="Your Message *"
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        message: e.target.value,
                      }))
                    }
                  />

                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-linear-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl
                  transition-all duration-300 hover:scale-[1.01]
                  text-sm tracking-widest uppercase flex items-center justify-center gap-2
                  disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <FaShieldAlt />

                  {loading ? "Sending..." : "Send Secure Message"}
                </button>
              </form>
            )}
            <div className="mt-6 space-y-3">
              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-gray-800"></div>
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  Or
                </span>
                <div className="flex-1 h-px bg-gray-800"></div>
              </div>

              {/* Helper Text */}
              <p className="text-xs text-gray-400 text-center">
                Prefer email? You can send your documents directly to our
                official email.
              </p>

              {/* Email Button */}
              <button
                onClick={() =>
                  (window.location.href =
                    "mailto:sovietbrothers.official@gmail.com?subject=Sending Documents&body=Hello, I am sending my CV/Resume and documents.")
                }
                className="
                w-full
                px-4
                py-3
                rounded-xl
                border
                border-blue-900/40
                bg-linear-to-r
                from-gray-900/80
                to-gray-800/80
                text-white
                text-sm
                font-medium
                tracking-wide
                transition-all
                duration-300
                hover:border-blue-600
                hover:bg-blue-600/10
                hover:shadow-lg
                hover:shadow-blue-900/30
                active:scale-[0.98]
                flex
                items-center
                justify-center
                gap-2
                cursor-pointer
               "
              >
                <FaEnvelope className="text-blue-400" />
                Send documents via Email (CV/Resume)
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
