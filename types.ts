const animationTypes = ['basic', 'basicFadeIn'] as const;

export type motionOptions = {
  type: typeof animationTypes[number];
  duration: number;
  easing: easingTypes;
};

export type motion = {
  target: HTMLElement;
  options: motionOptions;
};

type easingTypes = ['easeInOutQuint', 'linear'];
