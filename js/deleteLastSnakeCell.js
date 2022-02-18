function deleteLastSnakeCell() {
  var snakeCellsList = document.getElementById("snakeCellsList").value;
  var cuttingPoint;
  for(var i = snakeCellsList.length - 2; i >= 0; --i) {
    cuttingPoint = i;
    if(snakeCellsList[i] == ";"){
      cuttingPoint = i + 1;
      break;
    }
  }
  if(cuttingPoint) {
    document.getElementById("snakeCellsList").value = snakeCellsList.substring(0, cuttingPoint);
  } else {
    document.getElementById("snakeCellsList").value = "";
  }
  return false;
}
