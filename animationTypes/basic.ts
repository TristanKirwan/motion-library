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
