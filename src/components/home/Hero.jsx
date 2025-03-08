import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Art from "../../assets/art.webp";

const Hero = () => {
  const sectionRef = useRef(null);

  // Create scroll animation logic
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Transform values based on scroll position
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5], [0, -10]);

  // Animation variants for the wave-like effect
  const waveAnimation = {
    animate: {
      y: [0, -15, 0, -10, 0],
      rotate: [0, 2, 0, -2, 0],
      scale: [1, 1.02, 1, 1.01, 1],
      transition: {
        duration: 10,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="hero bg-fixed bg-no-repeat bg-cover relative flex items-center justify-center px-4 md:px-16 min-h-screen w-full pt-16"
    >
      <div className="absolute inset-0 bg-radial-[at_50%] opacity-70 from-[#1E1504]/5 to-black"></div>

      {/* Left Side Text */}
      <div className="app-max-width flex text-white md:h-[60vh] items-end justify-between relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ opacity: textOpacity, y: textY }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className=""
        >
          <div className="md:w-full md:-mr-[500px] relative z-10">
            <h1 className="text-5xl font-bold capitalize">
              We at NixxonTech are dedicated to helping businesses succeed
              online.
            </h1>
            <p className="mt-4 text-md xl:text-xl opacity-80">
              Whether you run a small business, startup or large corporation, we
              are here to support you. Our committed staff combines cutting-edge
              technology, data-driven strategies, and creativity to get the
              desired results.
            </p>
            <motion.a
              href="/contact"
              className="mt-6 inline-block px-8 py-3 border border-primary-blue rounded-full text-white text-lg transition 
               shadow-md shadow-primary-blue/50 hover:shadow-xl hover:shadow-primary-blue/80 
               hover:scale-105 duration-300"
              whileInView={{
                scale: [0.95, 1.05, 1],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
            >
              Let's Talk
            </motion.a>
          </div>
        </motion.div>
        {/* Right Side Image with Motion */}
        <motion.div
          className="hidden md:block md:relative -ml-96 w-full  z-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          style={{
            scale: imageScale,
            rotate: imageRotate,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Apply wave animation as a child motion element */}
          <motion.div animate={waveAnimation.animate} className="w-full h-full">
            <img src={Art.src} alt="3D VR Person" className="w-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
