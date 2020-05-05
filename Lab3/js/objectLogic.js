var flag = true;

function moveDiv() {
  setInterval(step, 1000);
}
function makeNewPosition() {

  var width = document.body.clientWidth;
  var height = document.body.clientHeight;

  const newXCoordinate = Math.floor(Math.random() * (width - 50));
  const newYCoordinate = Math.floor(Math.random() * (height - 50));

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

