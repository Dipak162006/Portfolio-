export const staggerContainer = (staggerDelay = 0.15, margin = "-100px") => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
    },
  },
  viewport: { once: true, margin }
});

export const fadeInUp = (duration = 0.5) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: "easeOut",
    },
  },
});

export const fadeInLeft = (duration = 0.6) => ({
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      ease: "easeOut",
    },
  },
});

export const fadeInRight = (duration = 0.6) => ({
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      ease: "easeOut",
    },
  },
});
