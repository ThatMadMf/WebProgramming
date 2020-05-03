$(document).ready(function(){
  animateDiv();
});

function makeNewPosition(){
  
  const windowHeight = $(window).height() - 50;
  const windowWidth = $(window).width() - 50;
  
  const newYCoordinate = Math.floor(Math.random() * windowHeight);
  const newXCoordinate = Math.floor(Math.random() * windowWidth);
  
  return [newYCoordinate, newXCoordinate];    
  
}

function animateDiv(){
  const newCoordinates = makeNewPosition();
  const x = newCoordinates[0];
  const y = newCoordinates[1];
  $('.square').animate({ top: x, left: y }, function(){
    animateDiv();        
  });
  
};