import anime from 'animejs';
import { motionOptions } from 'hackathon-motion-library/types';

export function basic(target: HTMLElement, options: motionOptions, individualMotion: Boolean) {
  try {
    return anime
      .timeline({
        targets: target,
        autoplay: false,
        easing: options?.easing || 'easeInOutQuint',
        duration: options?.duration || 300,
      })
      .add({
        translateX: ['0px', '100px'],
      });
  } catch (e) {
    return false;
  }
}

export function basicFadeIn(
  target: HTMLElement,
  options: motionOptions,
  individualMotion: Boolean
) {
  try {
    return anime
      .timeline({
        targets: target,
        autoplay: false,
        easing: options?.easing || 'easeInOutQuint',
        duration: options?.duration || 300,
      })
      .add({
        opacity: [0, 1],
      });
  } catch (e) {
    return false;
  }
}
