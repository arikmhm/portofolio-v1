import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Profile", href: "#profile" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { Icon: FaGithub, href: "https://github.com/arikmhm", label: "GitHub" },
    {
      Icon: FaLinkedin,
      href: "https://linkedin.com/in/arikmhm",
      label: "LinkedIn",
    },
    {
      Icon: FaInstagram,
      href: "https://instagram.com/arikmhm",
      label: "Instagram",
    },
    { Icon: FaEnvelope, href: "mailto:arikmhm@example.com", label: "Email" },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <a
                href="/"
                className="text-xl font-medium text-black hover:text-gray-600 transition-colors duration-300"
              >
                Arikmhm.
              </a>
              <p className="text-sm text-gray-600 font-light leading-relaxed max-w-xs">
                Full Stack Developer focused on creating clean, elegant
                solutions with attention to detail and performance.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-sm text-gray-600 uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-gray-600 hover:text-black transition-colors duration-300"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <h3 className="text-sm text-gray-600 uppercase tracking-wider">
                Get in Touch
              </h3>
              <p className="text-sm text-gray-600 font-light">
                Semarang, Indonesia
              </p>
              <div className="flex space-x-4">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {currentYear} Arikmhm. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="/privacy"
                className="text-sm text-gray-600 hover:text-black transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-sm text-gray-600 hover:text-black transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
