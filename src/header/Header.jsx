import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState, useRef } from "react";

const Header = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
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

  // Refined animations
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.8, 0.5], {
    clamp: true,
  });
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [0.7, 1], {
    clamp: true,
  });
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["100vh", "25%"], {
    clamp: true,
  });
  const contentYMobile = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["100vh", "18%"]
  );
  const imageScaleMobileWidth = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["140%", "100%"],
    {
      clamp: true,
    }
  );
  const imageScaleMobileHeight = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["100%", "65%"],
    {
      clamp: true,
    }
  );

  // Text opacity animations
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const buttonOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  /*  const [borderAngle, setBorderAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBorderAngle((prevAngle) => (prevAngle + 1) % 360); // Animasi rotasi border
    }, 16); // Rotasi sekitar 60fps
    return () => clearInterval(interval);
  }, []);

  const boxStyle = {
    cursor: "pointer",
    animation: "rotate-border 3s linear infinite",
    background: `conic-gradient(from ${borderAngle}deg, black 80%, white 90%, black 100%)`,
    transition: "background 1s ease-out",
    filter: "grayscale(100%)",
  }; */

  return (
    <section ref={ref} className="relative w-full h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-black"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.5], [0.4, 0.6]),
          }}
        />
        <motion.div
          style={
            isMobile
              ? {
                  opacity: imageOpacity,
                  transformOrigin: "center center",
                  width: imageScaleMobileWidth,
                  height: imageScaleMobileHeight,
                  padding: "1px",

                  // ...boxStyle,
                }
              : {
                  scale: imageScale,
                  opacity: imageOpacity,
                  transformOrigin: "center center",
                  width: "100%",
                  height: "100%",
                  padding: "2px",

                  // ...boxStyle,
                }
          }
          className="absolute top-0 left-0 bg-red-500 border-amber-50 border-rotate cursor-pointer  bg-conic/[from_var(--border-angle)] from-black from-80% via-white via-90% to-black to-100% p-px duration-1000 ease-out grayscale-100"
        >
          <motion.video
            src="/img/hero.mp4"
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          ></motion.video>
        </motion.div>

        {/* Content */}
        <motion.div
          className="relative flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto"
          style={{
            y: isMobile ? contentYMobile : contentY,
          }}
        >
          {/* Divider Line */}
          <motion.div
            className="w-16 h-px bg-white mb-8"
            style={{ opacity: textOpacity }}
          />

          {/* Title */}
          <motion.h1
            className="text-5xl font-light tracking-tight text-white mb-8"
            style={{ opacity: textOpacity }}
          >
            Creating Digital
            <br />
            Experiences
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-300 font-light leading-relaxed mb-12 max-w-2xl"
            style={{ opacity: textOpacity }}
          >
            Crafting minimalist, elegant websites with attention to detail and
            performance. Let&apos;s collaborate to bring your vision to life.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-row items-center justify-center gap-8"
            style={{ opacity: buttonOpacity }}
          >
            <a
              href="#contact"
              className="px-8 py-3 border border-white text-white text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-white text-black text-sm uppercase tracking-wider hover:bg-transparent hover:text-white border border-white transition-colors duration-300"
            >
              View Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
