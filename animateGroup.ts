import anime from "animejs";
import BasicAnimation from "./animationTypes/basic";
import { motion } from "./types";

const animationMapping = {
  basic: BasicAnimation,
};

function createIntersectionObserver(
  target: HTMLElement,
  timeline: anime.AnimeTimelineInstance
) {
  if ("IntersectionObserver" in window) {
    const observer: IntersectionObserver = new IntersectionObserver(function (
      entries: IntersectionObserverEntry[]
    ) {
      entries.forEach(function (entry: IntersectionObserverEntry): void {
        if (entry.isIntersecting) {
          timeline.play();
          observer.unobserve(target);
        }
      });
    });

    observer.observe(target);
  }
}

export function animateGroup(
  { target, options }: motion,
  individualMotion: boolean = false
) {
  if (!options?.type) {
    console.log(`Animation with type ${options.type} does not exist.`);
    return null;
  }
  const animationTimeline = animationMapping[options?.type](
    target,
    individualMotion
  );
  if (!animationTimeline) {
    console.log("Something went wrong trying to make an animation timeline.");
    return;
  }

  if (!individualMotion) {
    createIntersectionObserver(target, animationTimeline);
  }

  return;
}
