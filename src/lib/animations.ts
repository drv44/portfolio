export const sectionVariants = {
    hidden: { opacity: 0, y: 120 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }
  
  export const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }
  
  export const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i = 1) => ({
      // Accept custom index for stagger
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.1, // Stagger delay
        ease: "easeOut",
      },
    }),
  }
  
  export const skillPillVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i = 1) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: i * 0.05,
      },
    }),
  }
  
  export const heroTextVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      },
    },
  })
  