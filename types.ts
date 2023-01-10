import { AnimeCallBack, EasingOptions } from 'animejs';

const animationTypes = ['basic', 'basicFadeIn'] as const;

export type motionOptions = {
  type: typeof animationTypes[number];
  duration: number;
  easing?: EasingOptions;
  delay?: number;
  reverse?: boolean;
};

export type itemsMotion = {
  targets: HTMLElement[];
  options: motionOptions;
  callbacks?: AnimeCallBack;
};

export type motion = {
  targets: HTMLElement[] | HTMLElement;
  options: motionOptions;
  callbacks?: AnimeCallBack;
};
