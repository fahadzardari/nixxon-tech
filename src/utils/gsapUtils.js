import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins once
gsap.registerPlugin(ScrollTrigger);

// Export configured instance
export { gsap, ScrollTrigger };

// // Utility function to create fade-up animations
// export const createFadeUpAnimation = (elements, options = {}) => {
//   const defaultOptions = {
//     y: 50,
//     opacity: 0,
//     duration: 0.8,
//     ease: "power2.out",
//     stagger: 0.15,
//     scrollTrigger: {
//       trigger: elements[0].parentElement || elements[0],
//       start: "top 80%",
//     }
//   };

//   return gsap.from(elements, {...defaultOptions, ...options});
// };
