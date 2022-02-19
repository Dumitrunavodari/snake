function identifyKeyPressed(e) {
  document.addEventListener('keydown', function(e) {
    var intervalID37;
    var intervalID38;
    var intervalID39;
    var intervalID40;
    switch (e.keyCode) {
      case 37:
        if(document.getElementById("keyPressed").value != 37 && document.getElementById("keyPressed").value != 39) {
          document.getElementById("keyPressed").value = 37;
          intervalID37 = setInterval(function() {
            if(document.getElementById("keyPressed").value == 37){
              headMoving(37);
            } else {
              clearInterval(intervalID37);
            }
          }, 350);
        }
        break;
      case 38:
        if(document.getElementById("keyPressed").value != 38 && document.getElementById("keyPressed").value != 40) {
          document.getElementById("keyPressed").value = 38;
          intervalID38 = setInterval(function() {
            if(document.getElementById("keyPressed").value == 38){
              headMoving(38);
            } else {
              clearInterval(intervalID38);
            }
          }, 350);
        }
        break;
      case 39:
        if(document.getElementById("keyPressed").value != 39 && document.getElementById("keyPressed").value != 37) {
          document.getElementById("keyPressed").value = 39;
          intervalID39 = setInterval(function() {
            if(document.getElementById("keyPressed").value == 39){
              headMoving(39);
            } else {
              clearInterval(intervalID39);
            }
          }, 350);
        }
        break;
      case 40:
        if(document.getElementById("keyPressed").value != 40 && document.getElementById("keyPressed").value != 38) {
          document.getElementById("keyPressed").value = 40;
          intervalID40 = setInterval(function() {
            if(document.getElementById("keyPressed").value == 40){
              headMoving(40);
            } else {
              clearInterval(intervalID40);
            }
          }, 350);
        }
        break;
    }
  });
  return false;
}
