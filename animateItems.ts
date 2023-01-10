import { basic, basicFadeIn } from './animationTypes/basic';
import { createIntersectionObserver } from './helpers';
import { itemsMotion } from './types';

const animationMapping = {
  basic: basic,
  basicFadeIn: basicFadeIn,
};

/* 
The animation items function is a animation helper which let's you provide multiple htmlElement which 
should get a intersection observer to animate once they are in view.

This specific helper function is created to for example provide every section on a page with the 
same animation once they are scrolled into view.
*/
export function animateItems({ targets, options, callbacks }: itemsMotion) {
  if (!options?.type) {
    console.log(`Animation with type ${options.type} does not exist.`);
    return null;
  }

  Array.from(targets).map((item, i) => {
    //Fetch the animation type and create a timeline for every target given.
    const animationTimeline = animationMapping[options?.type]({
      targets: item,
      options: options,
      callbacks: callbacks,
    });

    if (!animationTimeline) {
      console.log('Something went wrong trying to make an animation timeline.');
      return;
    }

    createIntersectionObserver(item as HTMLElement, () => {
      //Option to play the animation in reverse.
      if (options?.reverse) {
        //If the animation doesn't have autoplay we have to seek the end of the animation reverse it and start it again.
        animationTimeline.reverse();
        animationTimeline.seek(options?.duration || 600);
      }
      animationTimeline.play();
    });
  });
}
