export const debounce = (callback, delay) => {
  let timer;
  return (...args) => {
    console.log(args);
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  }
};