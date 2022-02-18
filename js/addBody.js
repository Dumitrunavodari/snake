function addBody(applePosition, fromWhere, toWhere) {
  var bodyRow = extractRow(applePosition);
  var bodyColumn = extractColumn(applePosition);

  // next code is build to place a body bodyPiece instead of former apple Position
  document.getElementById(applePosition).src = "pics/1_2_"+ fromWhere +"_"+ toWhere +".png"; //to change the pictures
  return false;
}
