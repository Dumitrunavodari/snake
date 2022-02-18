function generateFirstHead() {
  var applePosition = document.getElementById("applePosition").value;
  var firstHeadRowPosition = Math.floor(Math.random() * 20 + 1);
  var firstHeadColumnPosition = Math.floor(Math.random() * 20 + 1);
  var firstHeadPosition = firstHeadRowPosition +'_'+ firstHeadColumnPosition;
  while(firstHeadPosition == applePosition) {
    firstHeadRowPosition = Math.floor(Math.random() * 20 + 1);
    firstHeadColumnPosition = Math.floor(Math.random() * 20 + 1);
    firstHeadPosition = firstHeadRowPosition +'_'+ firstHeadColumnPosition;
  }
  return firstHeadPosition;
}
