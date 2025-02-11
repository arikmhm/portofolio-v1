import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
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
          {/* Contact Form */}
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
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-12">
            {/* Direct Contact */}
            <div>
              <h3 className="text-sm text-gray-600 uppercase tracking-wider mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <p className="text-lg font-light">arikmhm@example.com</p>
                <p className="text-lg font-light">+1 (234) 567-8900</p>
                <p className="text-lg font-light">Jakarta, Indonesia</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm text-gray-600 uppercase tracking-wider mb-6">
                Connect
              </h3>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/arikmhm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors duration-300"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/arikmhm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors duration-300"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://twitter.com/arikmhm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors duration-300"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div>
              <h3 className="text-sm text-gray-600 uppercase tracking-wider mb-6">
                Office Hours
              </h3>
              <div className="space-y-2">
                <p className="font-light">Monday - Friday</p>
                <p className="font-light">9:00 AM - 6:00 PM UTC+7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
