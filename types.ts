const animationTypes = ["basic", "yeet"] as const;

export type motionOptions = {
  type: typeof animationTypes[number];
};

export type motion = {
  target: HTMLElement;
  options: motionOptions;
};
