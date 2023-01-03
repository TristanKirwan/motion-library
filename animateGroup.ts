import { basic, basicFadeIn } from './animationTypes/basic';
import { createIntersectionObserver } from './helpers';
import { motion } from './types';

const animationMapping = {
  basic: basic,
  basicFadeIn: basicFadeIn,
};

export function animateGroup({ target, options, callbacks }: motion) {
  if (!options?.type) {
    console.log(`Animation with type ${options.type} does not exist.`);
    return null;
  }
  const animationTimeline = animationMapping[options?.type]({ target, options, callbacks });
  if (!animationTimeline) {
    console.log('Something went wrong trying to make an animation timeline.');
    return;
  }

  createIntersectionObserver(target, () => {
    animationTimeline.play();
  });
}
