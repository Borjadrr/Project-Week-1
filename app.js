/*
$(document).ready(function() {

  this.board.forEach(function (row, rowIndex) {
    row.forEach(function (col, colIndex) {
      $(`span[data-row=${rowIndex}][data-col=${colIndex}]`).html(col);
    });
  });
});

$(".cell").on("click", function(){
  $(this).find("span").css("visibility", "visible");
});

$(".cell").on('click', startChronometer);

var counter = function(){
      var startedCount = 0;
      var endCount = 9000;
      startedCount+=1;
      console.log(startedCount);
};

function startChronometer (){
  setInterval (counter, 1000);
}
*/
