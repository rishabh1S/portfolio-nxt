const fadeInAnimationVariantsXl = {
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

const fadeInAnimationVariantsXr = {
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

const fadeInAnimationVariantsY = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: () => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  }),
};

const fadeInAnimationChat = {
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

const fadeInAnimationVariantsSkill = {
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

export {
  fadeInAnimationVariantsXl,
  fadeInAnimationVariantsXr,
  fadeInAnimationVariantsY,
  fadeInAnimationChat,
  fadeInAnimationVariantsSkill,
};
