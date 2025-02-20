import { motion } from "framer-motion";
import Art from "../../assets/art.webp"

const Hero = () => {
  return (
    <section className="hero bg-fixed bg-no-repeat bg-cover relative flex items-center justify-center px-16 min-h-screen w-full pt-16">
      <div className="absolute inset-0 bg-radial-[at_50%] opacity-70 from-[#1E1504]/5 to-black"></div>

      {/* Left Side Text */}
      <div className="app-max-width flex text-white items-end justify-between relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="md:w-3/4 -mr-40 relative z-10">
            <h1 className="text-5xl xl:text-7xl font-bold  capitalize">
              We at NixxonTech are dedicated to helping businesses succeed
              online.
            </h1>
            <p className="mt-4 text-md xl:text-xl opacity-80">
              Whether you run a small business, startup or large corporation, we
              are here to support you. Our committed staff combines cutting-edge
              technology, data-driven strategies, and creativity to get the
              desired results.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-block px-8 py-3 border border-primary-blue rounded-full text-white text-lg  transition"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>
        {/* Right Side Image with Motion */}
        <motion.div
          className="relative -ml-96 w-full -mt-20 z-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <img
            src={Art.src}
            alt="3D VR Person"
            className="h-[70vh] w-full drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
