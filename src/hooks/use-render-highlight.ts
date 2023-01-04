export const useRenderHighlight = (className: string, current: HTMLLIElement | null) => {
  if (current) {
    current.classList.add(className);
    setTimeout(() => {
      current.classList.remove(className);
    }, 200);
  }
};
