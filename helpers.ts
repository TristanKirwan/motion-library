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
