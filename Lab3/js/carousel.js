const elements = document.getElementsByClassName("carousel-el");
let index = 0;

function test() {
  index = index === elements.length ? 0 : index + 1;
  elements[previousNum(index - 1)].className = "carousel-el"
  elements[nextNum(index)].className = "carousel-el cropped-left";
  elements[nextNum(index + 1)].className = "carousel-el previous";
  elements[nextNum(index + 2)].className = "carousel-el main";
  elements[nextNum(index + 3)].className = "carousel-el next"
  elements[nextNum(index + 4)].className = "carousel-el cropped-right";
}

function nextNum(n) {
  return n >= elements.length ? n - elements.length : n;
}

function previousNum(n) {
  return n < 0 ? elements.length : n; 
}