/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = [
    {
      title: "Task Prioritization Decision Support System",
      description:
        "A simple Decision Support System (DSS) that utilizes the Simple Additive Weighting (SAW) method to objectively prioritize tasks based on multiple criteria, enhancing productivity and decision-making efficiency.",
      tech: ["React", "Tailwind", "Node.js"],
      image: "/img/spk-prioritas-tugas.png",
      github: "https://github.com/username/project",
      live: "https://spk-prioritas-tugas.vercel.app",
      featured: true,
    },
    {
      title: "Sewa by Mazana ",
      description:
        "A static website designed to showcase a catalog of kebaya rental options, providing essential information and facilitating easy access for customers seeking elegant traditional attire for special occasions.",
      tech: ["React", "Tailwind"],
      image: "/img/sewa-by-mazana.png",
      github: "https://github.com/username/project",
      live: "https://sewa-by-mazana.vercel.app",
      featured: true,
    },
    {
      title: "SENSASI 2024",
      description:
        "A static website dedicated to the national seminar on information systems 2024, featuring detailed profiles of speakers, comprehensive event information, and a user-friendly registration button, all focused on the latest discussions surrounding tech winter topics.",
      tech: ["Python", "TensorFlow", "FastAPI"],
      image: "/img/sensasi-2024.png",
      github: "https://github.com/username/project",
      live: "https://sensasi2024.hmsisfoudinus.org/",
      featured: true,
    },
  ];

  const archiveProjects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with React and Tailwind",
      tech: ["React", "Tailwind", "Framer Motion"],
      year: "2024",
      github: "https://github.com/username/portfolio",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather monitoring dashboard",
      tech: ["Vue.js", "OpenWeather API"],
      year: "2023",
      github: "https://github.com/username/weather",
    },
    // Add more archived projects as needed
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

  const ProjectCard = ({ project }) => (
    <div className="group bg-white border border-gray-100 hover:border-black transition-colors duration-300">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover ${
            isMobile
              ? "grayscale-50"
              : "grayscale group-hover:grayscale-0 transition-all duration-300"
          } `}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300">
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                <FaGithub className="text-lg" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                <FaExternalLinkAlt className="text-lg" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-medium text-black mb-2">{project.title}</h3>
        <p className="text-sm text-gray-600 mb-4 font-light leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 text-xs text-gray-600 border border-gray-200 uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-white py-24" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        {/* Featured Projects */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light tracking-tight text-black mb-4">
              Selected Works
            </h2>
            <div className="w-16 h-px bg-black mx-auto mb-4" />
            <p className="text-gray-600 font-light">
              A collection of projects showcasing my expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
            >
              View More Projects
              <FaArrowRight className="text-sm" />
            </button>
          </div>
        </div>

        {/* Project Archive */}
        <div
          className={`transition-all duration-500 ${
            showAll ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light tracking-tight text-black mb-4">
              Archive
            </h2>
            <div className="w-16 h-px bg-black mx-auto mb-4" />
            <p className="text-gray-600 font-light">
              Other noteworthy projects I&apos;ve worked on
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {archiveProjects.map((project, index) => (
                <div
                  key={index}
                  className="group border border-gray-100 hover:border-black p-6 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-black mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 font-light">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs text-gray-600 border border-gray-200 uppercase tracking-wider"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-400">
                        {project.year}
                      </span>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-black transition-colors duration-300"
                        >
                          <FaGithub className="text-xl" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
