import { AnimeCallBack, AnimeInstance, AnimeParams } from 'animejs';
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

export function addCallbacksToTimeline(timeline: AnimeInstance, callbacks: AnimeCallBack) {
  if (callbacks?.complete) {
    timeline.complete = callbacks.complete;
  }

  if (callbacks?.begin) {
    timeline.begin = callbacks.begin;
  }

  if (callbacks?.update) {
    timeline.update = callbacks.update;
  }
}

export function setDefaultTimelineOptions(
  options: motionOptions,
  target: HTMLElement
): AnimeParams {
  const defaultOptions: AnimeParams = {
    targets: target,
    autoplay: false,
    easing: options?.easing || 'easeInOutQuint',
    duration: options?.duration || 600,
    delay: options?.delay || 0,
  };

  return defaultOptions;
}
