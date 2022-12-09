import anime from 'animejs';

export default function parallax(target: HTMLElement) {
  try {
    window.addEventListener('scroll', (e) => {
      return anime
        .timeline({
          targets: target,
          autoplay: false,
        })
        .add({
          translateY: '-=1px',
        });
    });
  } catch (e) {
    return false;
  }
}
