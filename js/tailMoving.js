function tailMoving(){
    var tailPosition = document.getElementById("tailPosition").value;
    var tailRowPosition = extractRow(tailPosition);
    var tailColumnPosition = extractColumn(tailPosition);
    var tailSrc = document.getElementById(tailPosition).src;
    var tailToWhere = tailSrc[tailSrc.length - 6] + tailSrc[tailSrc.length - 5];
    var nextTailRow;
    var nextTailColumn;
    if(tailToWhere == 37) {
      nextTailRow = tailRowPosition;
      nextTailColumn = tailColumnPosition - 1;
    } else if (tailToWhere == 38) {
      nextTailRow = tailRowPosition - 1;
      nextTailColumn = tailColumnPosition;
    } else if (tailToWhere == 39) {
      nextTailRow = tailRowPosition;
      nextTailColumn = 1 * tailColumnPosition + 1;
    } else if (tailToWhere == 40) {
      nextTailRow = 1 * tailRowPosition + 1;
      nextTailColumn = tailColumnPosition
    }
    var nextTailPosition = nextTailRow +'_'+ nextTailColumn;
    var snakeCellsList = document.getElementById("snakeCellsList").value;
    var nextToWhere = snakeCellsList[snakeCellsList.length - 3] + snakeCellsList[snakeCellsList.length - 2];
    var nextFromWhere;
    if(nextToWhere == 37) {
      nextFromWhere = 39;
    } else if (nextToWhere == 38) {
      nextFromWhere = 40;
    } else if (nextToWhere == 39) {
      nextFromWhere = 37;
    } else if (nextToWhere == 40) {
      nextFromWhere = 38;
    }
    document.getElementById(nextTailPosition).src = "pics/1_3_" + nextFromWhere +"_"+ nextToWhere +".png";
    document.getElementById(tailPosition).src = "pics/0_0_00_00.png";
    document.getElementById("tailPosition").value = nextTailPosition;
    deleteLastSnakeCell();


  return false;
}
