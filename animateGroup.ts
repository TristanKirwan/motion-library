import { basic, basicFadeIn } from './animationTypes/basic';
import { createIntersectionObserver } from './helpers';
import { motion } from './types';

const animationMapping = {
  basic: basic,
  basicFadeIn: basicFadeIn,
};

export function animateGroup({ targets, options, callbacks }: motion) {
  if (!targets) return;

  if (!options?.type) {
    console.log(`Animation with type ${options.type} does not exist.`);
    return null;
  }
  const animationTimeline = animationMapping[options?.type]({ targets, options, callbacks });
  if (!animationTimeline) {
    console.log('Something went wrong trying to make an animation timeline.');
    return;
  }

  //Get the first target which will be observed
  createIntersectionObserver(targets[0] as HTMLElement, () => {
    animationTimeline.play();
  });
}
