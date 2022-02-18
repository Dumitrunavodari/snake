function extractColumn(element) {
  var column = "";
  var firstOrSecond = 1;
  for(var i = 1; i < element.length; ++i) {
    if(element[i] == "_") {
      firstOrSecond = 2;
      ++i;
    }
    if(firstOrSecond == 2) {
      column += element[i];
    }
  }
  return column;
}
