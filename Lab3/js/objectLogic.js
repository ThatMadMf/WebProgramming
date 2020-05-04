var flag = true;

function moveDiv() {
  setInterval(step, 1000);
}
function makeNewPosition() {

  var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

  var height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

  const newXCoordinate = Math.floor(Math.random() * width - 40);
  const newYCoordinate = Math.floor(Math.random() * height - 40);

  return [newXCoordinate, newYCoordinate];
}

function step() {

  if (flag === true) {
    const object = document.getElementById("object");
    const newCoordinates = makeNewPosition();
    const x = newCoordinates[0];
    const y = newCoordinates[1];

    object.style.left = x;
    object.style.top = y;
  }
}

  function changeFlag(value) {
    flag = value;
  }

