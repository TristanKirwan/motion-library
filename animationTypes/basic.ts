import anime from "animejs";

export default function basic(target: HTMLElement, individualMotion: Boolean) {
  try {
    return anime
      .timeline({
        targets: target,
        autoplay: false,
      })
      .add({
        translateX: ["0px", "100px"],
      });
  } catch (e) {
    return false;
  }
}

export function basicFadeIn(target: HTMLElement, individualMotion: Boolean) {
  try {
    return anime
      .timeline({
        targets: target,
        autoplay: false,
      })
      .add({
        opacity: [0, 1],
      });
  } catch (e) {
    return false;
  }
}

