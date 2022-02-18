function generateApple() {
  var appleRowPosition = Math.floor(Math.random() * 20 + 1);
  var appleColumnPosition = Math.floor(Math.random() * 20 + 1);
  var applePosition = appleRowPosition +'_'+ appleColumnPosition;
  var appleSrc = document.getElementById(applePosition).src;
  if(1 * appleSrc[appleSrc.length - 13] == 1) {
    generateApple();
  }
  document.getElementById(applePosition).src = "pics/2_0_00_00.png";
  return applePosition;
}
