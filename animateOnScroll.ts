import Parallax from './animationTypes/parallax';
import { createIntersectionObserver } from './helpers';
import { motion } from './types';

const animationMapping = {
  parallax: Parallax,
};

export function animateGroup({ target, options }: motion) {
  if (!options?.type) {
    console.log(`Animation with type ${options.type} does not exist.`);
    return null;
  }
  const animationTimeline = animationMapping[options?.type](target);
  if (!animationTimeline) {
    console.log('Something went wrong trying to make an animation timeline.');
    return;
  }

  createIntersectionObserver(target, () => {
    animationTimeline.play();
  });

  return;
}
