const curve = (initialPath: string, targetPath: string) => {
  return {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
  };
};

const translate = {
  initial: {
    top: "-300px",
  },
  enter: {
    top: "-100vh",
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: {
      top: "100vh",
    },
  },
  exit: {
    top: "-300px",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
};

export { curve, translate };
