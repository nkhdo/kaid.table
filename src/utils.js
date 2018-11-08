export const isElement = el => el instanceof Element;

export const emptyElement = el => {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
};
