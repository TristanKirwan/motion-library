import anime, { AnimeParams } from 'animejs';
import { addCallbacksToTimeline, setDefaultTimelineOptions, setReverse } from '../helpers';
import { motion } from '../types';

export function basic({ targets, options, callbacks }: motion) {
  try {
    const timelineOptions: AnimeParams = setDefaultTimelineOptions(options, targets);

    const timeline = anime({ ...timelineOptions, translateX: ['-100px', '0px'] });

    setReverse(timeline, options?.reverse, options?.duration);

    if (callbacks) {
      addCallbacksToTimeline(timeline, callbacks);
    }

    return timeline;
  } catch (e) {
    return false;
  }
}

export function basicFadeIn({ targets, options, callbacks }: motion) {
  try {
    const timelineOptions: AnimeParams = setDefaultTimelineOptions(options, targets);

    const timeline = anime({ ...timelineOptions, opacity: [0, 1] });

    setReverse(timeline, options?.reverse, options?.duration);

    if (callbacks) {
      addCallbacksToTimeline(timeline, callbacks);
    }

    return timeline;
  } catch (e) {
    return false;
  }
}
