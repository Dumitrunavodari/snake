function headMoving(keyPressed){
  var headPosition = document.getElementById("headPosition").value;
  var headRowPosition = extractRow(headPosition);
  var headColumnPosition = extractColumn(headPosition);
  var headSrc = document.getElementById(headPosition).src;
  var onPresingFromWhere = headSrc[headSrc.length - 9] + headSrc[headSrc.length - 8];
  var onPresingToWhere = headSrc[headSrc.length - 6] + headSrc[headSrc.length - 5];
  var nextHeadRow;
  var nextHeadColumn;
  var fromWhere;
  if(keyPressed == 37 && onPresingFromWhere != 37) {//onPresingFromWhere != 37 is used to avoid acceleration
    nextHeadRow = headRowPosition;
    nextHeadColumn = headColumnPosition - 1;
    fromWhere = 39;
  } else if (keyPressed == 38 && onPresingFromWhere != 38) {
    nextHeadRow = headRowPosition - 1;
    nextHeadColumn = headColumnPosition;
    fromWhere = 40;
  } else if (keyPressed == 39 && onPresingFromWhere != 39) {
    nextHeadRow = headRowPosition;
    nextHeadColumn = 1 * headColumnPosition + 1;
    fromWhere = 37;

  } else if (keyPressed == 40 && onPresingFromWhere != 40) {
    nextHeadRow = 1 * headRowPosition + 1;
    nextHeadColumn = headColumnPosition;
    fromWhere = 38;
  }

  var nextHeadPosition = nextHeadRow +'_'+ nextHeadColumn;
  if (nextHeadRow < 1 || nextHeadRow > 20 || nextHeadColumn < 1 || nextHeadColumn > 20) {
    location.reload();
    return false;
  } else {
    var nextHeadSrc = document.getElementById(nextHeadPosition).src;;
    if(1 * nextHeadSrc[nextHeadSrc.length - 13] == 1) {
      location.reload();
    }
  }
  if(nextHeadRow && 1 * onPresingFromWhere != 1 * keyPressed) {// if is pressed the arrow that does not return the snake and has obtain a future row
    document.getElementById("snakeCellsList").value = headPosition +'+'+ onPresingFromWhere +'+'+ keyPressed +';' + document.getElementById("snakeCellsList").value;
    document.getElementById(nextHeadPosition).src = "pics/1_1_" + fromWhere +"_"+ keyPressed +".png";
    document.getElementById(headPosition).src = "pics/1_2_" + onPresingFromWhere +"_"+ keyPressed +".png";
    document.getElementById("headPosition").value = nextHeadPosition;
  }

  var applePosition = document.getElementById("applePosition").value;
  if(headPosition == applePosition) {
    addBody(applePosition, onPresingFromWhere, keyPressed);
    document.getElementById("applePosition").value = generateApple();
  } else {
    tailMoving();
  }
  return false;
}
