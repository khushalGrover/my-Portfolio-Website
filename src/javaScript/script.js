const element = document.getElementsByTagName("main")[0];

element.addEventListener('wheel', (event) => {
  event.preventDefault();
  element.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
  });
});