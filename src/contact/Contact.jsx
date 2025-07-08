import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000); // Notifikasi akan hilang setelah 5 detik

      return () => clearTimeout(timer); // Cleanup jika ada perubahan sebelum waktu habis
    }
  }, [notification]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const SERVICE_ID = "service_7ad18hc";
  const TEMPLATE_ID = "template_7njvz9c";
  const PUBLIC_KEY = "JTR75g33l7RcTM9vj";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setNotification(null);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      reply_to: formData.email,
      to_name: "Arikmhm. | Portfolio",
      date: new Date().toLocaleString(),
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setNotification({
          type: "success",
          message: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setNotification({
          type: "error",
          message: "Failed to send message. Please try again later.",
        });
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section className="bg-white py-24" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-light tracking-tight text-black mb-4">
            Let&apos;s Talk
          </h2>
          <div className="w-16 h-px bg-black mx-auto mb-4" />
          <p className="text-gray-600 font-light max-w-xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Send me a
            message and let&apos;s create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-600 uppercase tracking-wider mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="off"
                  className="w-full px-4 py-3 border border-gray-200 focus:border-black outline-none transition-colors duration-300"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-600 uppercase tracking-wider mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="off"
                  className="w-full px-4 py-3 border border-gray-200 focus:border-black outline-none transition-colors duration-300"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-600 uppercase tracking-wider mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-200 focus:border-black outline-none transition-colors duration-300 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-black text-white text-sm uppercase tracking-wider hover:bg-gray-900 transition-colors duration-300"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {/* Notification Message */}
              {notification && (
                <div
                  className={`mt-4 p-3 rounded text-center transition-opacity duration-500 ${
                    notification.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {notification.message}
                </div>
              )}
            </form>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-sm text-gray-600 uppercase tracking-wider mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <p className="text-lg font-light">mhm.ariyanto@gmail.com</p>
                <p className="text-lg font-light">+628123456789</p>
                <p className="text-lg font-light">Semarang, Indonesia</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm text-gray-600 uppercase tracking-wider mb-6">
                Connect
              </h3>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/arikmhm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-600 hover:text-black transition-colors duration-300"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/arikmhm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-600 hover:text-black transition-colors duration-300"
                >
                  <FaLinkedin size={24} />
                </a>
                {/* <a
                  href="https://twitter.com/arikmhm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-gray-600 hover:text-black transition-colors duration-300"
                >
                  <FaTwitter size={24} />
                </a> */}
              </div>
            </div>

            <div>
              <h3 className="text-sm text-gray-600 uppercase tracking-wider mb-6">
                Availability
              </h3>
              <p className="font-light">
                Available 24/7 – Feel free to reach out anytime!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
