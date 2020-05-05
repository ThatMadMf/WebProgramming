const elements = document.getElementsByClassName("carousel-el");

let index = 0;

function forward() {
  index = index === 0 ? elements.length - 1 : index -1;
  move();
}

function back() {
  index = index === elements.length ? 0 : index + 1;
  move();
}

function move() {
  elements[validateNum(index - 1)].className = "carousel-el";
  elements[validateNum(index)].className = "carousel-el cropped-left";
  elements[validateNum(index + 1)].className = "carousel-el previous";
  elements[validateNum(index + 2)].className = "carousel-el main";
  elements[validateNum(index + 3)].className = "carousel-el next"
  elements[validateNum(index + 4)].className = "carousel-el cropped-right";
}

function validateNum(n) {
  if(n >= elements.length) {
    return n - elements.length;
  }
  
  if(n < 0) {
    return n + elements.length - 1;
  }

  return n;
}