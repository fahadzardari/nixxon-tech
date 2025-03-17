import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Mobile detection
const isMobile = () => window.innerWidth < 768;

// Global animation settings
const mobileSettings = {
  startOffset: "95%", // Higher value for mobile so elements appear earlier when scrolling
  once: true,         // Run animations only once on mobile for better performance
  duration: 0.6,      // Shorter animation duration for mobile
};

const desktopSettings = {
  startOffset: "80%",
  once: false,
  duration: 0.8,  
};

// Ensure animations don't leave elements invisible
function ensureVisibility() {
  // Find all elements with opacity 0 that might be part of animations
  document.querySelectorAll('[class*="opacity-0"]').forEach(el => {
    // Set a timeout to ensure elements eventually become visible
    setTimeout(() => {
      if (getComputedStyle(el).opacity === "0") {
        el.style.opacity = "1";
        console.log("Forced visibility for:", el);
      }
    }, 2000); // 2 seconds fallback
  });
}

// Initialize animation system
function initAnimations() {
  // Force refresh ScrollTrigger
  ScrollTrigger.refresh(true);
  
  // Setup resize handlers
  window.addEventListener("resize", () => {
    ScrollTrigger.refresh(true);
  });
  
  window.addEventListener("orientationchange", () => {
    // Wait for orientation change to complete
    setTimeout(() => ScrollTrigger.refresh(true), 200);
  });
  
  // Add visibility safeguard
  ensureVisibility();
}

export { 
  isMobile, 
  mobileSettings, 
  desktopSettings, 
  initAnimations, 
  ensureVisibility 
};