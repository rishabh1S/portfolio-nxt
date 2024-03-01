import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
  const transitionElement = document.getElementById("transition-element");

  if (transitionElement) {
    const tl = gsap.timeline();

    tl.set(transitionElement, {
      yPercent: 0,
    })
      .to(transitionElement, {
        yPercent: 100,
        duration: 0.6,
      })
      .to(
        transitionElement,
        {
          borderTopLeftRadius: "10vh",
          borderTopRightRadius: "10vh",
          duration: 0.4,
        },
        "<"
      );
  }
};

export const animatePageOut = (
  href: string,
  router: AppRouterInstance,
  additional?: () => void
) => {
  const animationWrapper = document.getElementById("transition-element");

  if (animationWrapper) {
    const tl = gsap.timeline();

    tl.set(animationWrapper, {
      yPercent: -100,
      borderTopRightRadius: "10vh",
      borderBottomRightRadius: "0",
      borderTopLeftRadius: "10vh",
      borderBottomLeftRadius: "0",
    })
      .to(animationWrapper, {
        yPercent: 0,
        duration: 0.6,
        onComplete: () => {
          if (additional) {
            additional();
          }
          router.push(href);
        },
      })
      .to(
        animationWrapper,
        {
          borderTopRightRadius: "0",
          borderTopLeftRadius: "0",
          duration: 0.4,
        },
        "<"
      );
  }
};
