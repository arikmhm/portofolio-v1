import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaDatabase,
} from "react-icons/fa";
import GitHubCalendar from "react-github-calendar";
import { useEffect } from "react";
import { useState } from "react";
import { SiExpress } from "react-icons/si";

const Profile = () => {
  const roles = ["Full Stack Developer"];

  const technologies = [
    { Icon: FaReact, name: "React" },
    { Icon: SiExpress, name: "Express" },
    { Icon: FaNodeJs, name: "Node.js" },
    { Icon: FaJs, name: "JavaScript" },
    { Icon: FaDatabase, name: "Database" },
    { Icon: FaHtml5, name: "HTML5" },
    { Icon: FaCss3Alt, name: "CSS3" },
  ];

  const socialLinks = [
    {
      Icon: FaGithub,
      link: "https://github.com/arikmhm",
      label: "Github",
    },
    {
      Icon: FaLinkedin,
      link: "https://linkedin.com/in/arikmhm",
      label: "LinkedIn",
    },
    {
      Icon: FaEnvelope,
      link: "mailto:arikmhm@example.com",
      label: "Email",
    },
  ];
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section className="bg-white" id="profile">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="mb-24">
          <div className="flex flex-col items-center">
            <img
              src="/img/me.png"
              alt="Profile"
              className={`w-40 h-40 object-cover rounded-full ${
                isMobile
                  ? "grayscale-50"
                  : "grayscale hover:grayscale-0 transition-all duration-300"
              } `}
            />
            <div className="mt-12 text-center">
              <h1 className="text-3xl font-light tracking-tight text-black mb-6">
                Muhammad Ariyanto
              </h1>
              <div className="flex justify-center gap-4 mb-8">
                {roles.map((role, index) => (
                  <span
                    key={index}
                    className="text-sm uppercase tracking-wider text-gray-500"
                  >
                    {role}
                    {index < roles.length - 1 && (
                      <span className="mx-2">•</span>
                    )}
                  </span>
                ))}
              </div>
              <div className="w-16 h-px bg-black mx-auto mb-8" />
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                I craft digital experiences that combine clean aesthetics with
                powerful functionality. Specializing in modern web technologies,
                I focus on creating intuitive and performant solutions that help
                businesses grow and users thrive.
              </p>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mb-24">
          <h2 className="text-sm uppercase tracking-wider text-gray-500 text-center mb-12">
            Technologies I Work With
          </h2>
          <div className="flex flex-wrap justify-center gap-12 max-w-3xl mx-auto">
            {technologies.map(({ Icon, name }) => (
              <div key={name} className="text-center">
                <Icon className="text-3xl text-black mx-auto mb-3" />
                <h3 className="text-sm font-light text-gray-600">{name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Resume Section */}
        <div className="max-w-2xl mx-auto mb-24">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            {/* Social Links */}
            {/* <div className="flex gap-8">
              {socialLinks.map(({ Icon, link, label }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors duration-300"
                >
                  <Icon className="text-2xl" />
                </a>
              ))}
            </div> */}

            {/* Download CV */}
            <a
              href="/files/muhammad-ariyanto-cv.pdf"
              download
              className="inline-flex items-center px-6 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
            >
              <FaFileDownload className="mr-2" />
              Download CV
            </a>
          </div>
        </div>

        {/* GitHub Activity */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-8 text-center">
            Github Activity
          </h2>
          <div className="bg-white border border-gray-100 p-8 rounded-lg">
            <GitHubCalendar
              username="arikmhm"
              showTitle={false}
              blockSize={12}
              blockMargin={4}
              fontSize={12}
              colorScheme="light"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
