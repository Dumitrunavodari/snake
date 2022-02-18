function extractRow(element) {
  var row = "";
  for(var i = 0; i < 2; ++i) {
    if(element[i] != "_") {
      row += element[i];
    }
  }
  return row;
}
