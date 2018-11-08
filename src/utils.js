export const emptyElement = el => {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
};
