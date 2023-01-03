import anime, { AnimeParams } from 'animejs';
import { addCallbacksToTimeline, setDefaultTimelineOptions } from '../helpers';
import { motion } from '../types';

export function basic({ target, options, callbacks }: motion) {
  try {
    const timelineOptions: AnimeParams = setDefaultTimelineOptions(options, target);

    const timeline = anime.timeline({ ...timelineOptions }).add({
      translateX: ['-100px', '0px'],
    });

    if (callbacks) {
      addCallbacksToTimeline(timeline, callbacks);
    }

    return timeline;
  } catch (e) {
    return false;
  }
}

export function basicFadeIn({ target, options, callbacks }: motion) {
  try {
    const timelineOptions: AnimeParams = setDefaultTimelineOptions(options, target);

    const timeline = anime.timeline({ ...timelineOptions }).add({
      opacity: [0, 1],
    });

    if (callbacks) {
      addCallbacksToTimeline(timeline, callbacks);
    }

    return timeline;
  } catch (e) {
    return false;
  }
}
