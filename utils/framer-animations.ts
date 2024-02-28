export const fadeInAnimationVariantsXl = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: () => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  }),
};

export const fadeInAnimationVariantsXr = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: () => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  }),
};

export const fadeInAnimationVariantsY = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (isUser: boolean) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: isUser ? 0 : 0.5,
      ease: "easeInOut",
    },
  }),
};

export const fadeInAnimationVariantsSkill = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      ease: "easeInOut",
    },
  }),
};
