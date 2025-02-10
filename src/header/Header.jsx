import { motion, useScroll, useTransform } from "motion/react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

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

  // Calculate scale based on scroll position
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [2.2, 0.4], {
    clamp: true,
  });

  // Calculate opacity based on scroll position
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [0.8, 1], {
    clamp: true,
  });

  const contentY = useTransform(scrollYProgress, [0, 0.5], ["100vh", "32vh"], {
    clamp: true,
  });
  const imageScaleMobileWidth = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["150%", "100%"],
    {
      clamp: true,
    }
  );
  const imageScaleMobileHeight = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["150%", "60%"],
    {
      clamp: true,
    }
  );

  return (
    <>
      <section ref={ref} className="w-full h-[300vh] ">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.img
            src="/img/hero.jpg"
            alt="Hero Image"
            style={
              isMobile
                ? {
                    // scale: imageScale,
                    opacity: imageOpacity,
                    transformOrigin: "center center",
                    width: imageScaleMobileWidth,
                    height: imageScaleMobileHeight,
                    objectFit: "cover",
                  }
                : {
                    scale: imageScale,
                    opacity: imageOpacity,
                    transformOrigin: "center center",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }
            }
            className="absolute top-0 left-0"
          />
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
            style={{
              y: contentY,
            }}
          >
            <h1 className="text-4xl font-bold mb-4">
              Let&apos;s Build Something Awesome for the Web!
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              I craft fast, scalable, and stunning websites. Let&apos;s make
              something great together!
            </p>
            <div className="flex flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="bg-gray-900 px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300 text-white shadow-md"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="text-gray-900 border border-solid border-gray-900 px-6 py-2 rounded-md hover:bg-gray-900 hover:text-white transition-colors duration-300"
              >
                See Projects
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Header;
