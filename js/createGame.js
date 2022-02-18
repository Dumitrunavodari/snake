function createGame () {
  document.getElementById("selectionCard").remove();
  document.getElementById("startButtonCard").remove();

  mainCard.innerHTML += '\
      <div class="card-header" id="replayButtonCard">\
        <div class="form-floating">\
        </div>\
      </div>\
      <div class="card-header" id="gameCard">\
        <param id="bodyPieces" value="0">\
        <param id="snakeCellsList" value="">\
        <param id="applePosition" value="">\
        <param id="headPosition" value="">\
        <param id="tailPosition" value="">\
      </div>';
  // next loop is creating rows
  for(var i = 1; i <= 20; ++i) {
    gameCard.innerHTML += '\
      <div class="row" id="Row">\
        <div class="column" id="'+ i +'Row" >\
        </div>\
      </div>';
  }

  //next loop is creating cels in each row
  for(var i = 1; i <= 20; ++i) {
    var name = i + "Row";
    var iRow = document.getElementById(name);
    for(var j = 1; j <= 20; ++j) {
      iRow.innerHTML +='<img src="pics/0_0_00_00.png" id="'+ i +'_'+ j +'">\
      <param id="keyPressed" value="">\
      <param id="'+ i +'snakeCells'+ j +'" value="+0+0">';
    }
  }

  //placing first snake and apple and snake tail
  var applePosition  = generateApple();
  document.getElementById("applePosition").value += applePosition;
  var firstHeadPosition;
  var firstTailPosition = "";
  var firstTailRowPosition = "";
  var firstTailColumnPosition = "0";
  var firstOrSecond = 1;
  while(firstTailColumnPosition == "0") {
    firstTailColumnPosition = "";
    firstHeadPosition = "";
    firstHeadPosition  += generateFirstHead();
    firstTailColumnPosition = 1 * extractColumn(firstHeadPosition) - 1;
    firstTailRowPosition = extractRow(firstHeadPosition);
  }
  firstTailPosition = firstTailRowPosition +'_'+ firstTailColumnPosition;
  document.getElementById("headPosition").value += firstHeadPosition;
  document.getElementById("tailPosition").value += firstTailPosition;
  document.getElementById(firstHeadPosition).src = "pics/1_1_37_39.png";
  document.getElementById(firstTailPosition).src = "pics/1_3_37_39.png";
  //document.getElementById("snakeCellsList").value += firstHeadPosition +'+37+39;';
  identifyKeyPressed();
  return false;
}
