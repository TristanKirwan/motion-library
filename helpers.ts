import anime, { AnimeCallBack, AnimeInstance, AnimeParams } from 'animejs';
import { motionOptions } from './types';

export function createIntersectionObserver(target: HTMLElement, isIntersectingHandler: Function) {
  if ('IntersectionObserver' in window) {
    const observer: IntersectionObserver = new IntersectionObserver(function (
      entries: IntersectionObserverEntry[]
    ) {
      entries.forEach(function (entry: IntersectionObserverEntry): void {
        if (entry.isIntersecting) {
          isIntersectingHandler();
          observer.unobserve(target);
        }
      });
    });

    observer.observe(target);
  }
}

type AnimeCallbackFunction = (anim: anime.AnimeInstance) => void;

export function addCallbacksToTimeline(timeline: AnimeInstance, callbacks: AnimeCallBack) {
  //Mapping over all the provided callback functions and add them to the timeline
  Object.keys(callbacks).map((callback) => {
    if (callbacks?.[callback]) {
      timeline[callback] = () => {
        if (callbacks[callback]) {
          callbacks[callback](timeline);
        }
      };
    }
  });
}

export function setDefaultTimelineOptions(
  options: motionOptions,
  target: HTMLElement | HTMLElement[]
): AnimeParams {
  //Set the default options that will be used on most of our animations
  const defaultOptions: AnimeParams = {
    targets: target,
    autoplay: false,
    easing: options?.easing || 'easeInOutQuint',
    duration: options?.duration || 600,
    delay: options?.delay || 0,
  };

  return defaultOptions;
}

export function setReverse(timeline, reverse = false, duration = 600) {
  if (reverse) {
    timeline.reverse();
    timeline.seek(duration);
  }
}
