function MinesWeeper(){
  this.board = [
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
    ];

  this.coordBoard = this.createCoords();
  this.minesNumber = 10;
  this.rows=8;
  this.cols=8;
  this.minesPosition = this.getRandomPosition();
  this.setMines ();
  this.countMinesAndSetNumbers();
  this.setValuesInDOM();
  this.interval = 0;
  this.secondCounter = 0;
  this.counterStarted = 0;
  this.flags = 0;
}

 //función que dibuja el mapa en consola
MinesWeeper.prototype.printMapInConsole = function(){
  console.log(this.board.join('\n') + '\n\n');
};

MinesWeeper.prototype.createCoords = function(){
  var newBoard = [];
  this.board.forEach(function(rowItem, rowIndex){
    rowItem.forEach(function(colItem, colIndex){
      if (colItem === 0) {
        newBoard.push({ row: rowIndex, col: colIndex });
      }
    });
  });
  return newBoard;
};

MinesWeeper.prototype.getRandomPosition = function () {
var minesArray = [];
  do{
    var x = Math.floor(Math.random()*this.coordBoard.length);
    minesArray.push(this.coordBoard[x]);

    for (var i= 0; i<minesArray.length;i++) {
      if (minesArray[0]===minesArray[i+1]){
        minesArray.slice(i,1);
      }
      else if (minesArray[1]===minesArray[i]){
        minesArray.slice(i,1);
      }
      else if (minesArray[2]===minesArray[i]){
        minesArray.slice(i,1);
      }
      else if (minesArray[3]===minesArray[i]){
        minesArray.slice(i,1);
      }
      else if (minesArray[4]===minesArray[i]){
        minesArray.slice(i,1);
      }
      else if (minesArray[5]===minesArray[i]){
        minesArray.slice(i,1);
      }
      else if (minesArray[6]===minesArray[i]){
        minesArray.slice(i,1);
      }
      else if (minesArray[7]===minesArray[i]){
        minesArray.slice(i,1);
      }
      else if (minesArray[8]===minesArray[i]){
        minesArray.slice(i,1);
      }
      else if(minesArray[9]===minesArray[i]){
        minesArray.slice(i,1);
      }
      }
        }
  while(minesArray.length < this.minesNumber);
  return minesArray;
};

MinesWeeper.prototype.setMines = function (){
  for (j=0; j< this.minesPosition.length; j++){
    this.board[this.minesPosition[j].row][this.minesPosition[j].col] = "b";
  }
};

MinesWeeper.prototype.countMinesAndSetNumbers = function (){
  for (var row = 0; row < this.rows;row++){
    for (var col = 0; col < this.cols;col++){
      if (this.board[row][col]=== "b"){
        this.board[row][col] = this.board[row][col];
      }else {
        for (var i = row -1; i <= row+1; i++){
          for (var j = col -1; j <= col+1; j++){
            if (this.board[i] !== undefined && this.board[j] !== undefined && this.board[i][j]=== "b"){
               this.board[row][col]+=1;
            }
          }
        }
        //console.table(this.board);
      }
    }
  }
};

MinesWeeper.prototype.setValuesInDOM = function(){
    this.board.forEach(function (row, rowIndex) {
      row.forEach(function (col, colIndex) {
        $(`span[data-row=${rowIndex}][data-col=${colIndex}]`).html(col);
      });
    });
};

function recursiveNearBombs(rowClicked,colClicked){
  var domBoard = document.getElementById("MinesweeperBoard").getElementsByClassName("row");

  for (var i = rowClicked -1;i <= rowClicked +1;i++){
    for (var j = colClicked -1;j <= colClicked +1; j++){

      if(domBoard[i] !== undefined && domBoard[i].getElementsByClassName("cell")[j] !== undefined && domBoard[i].getElementsByClassName("cell")[j].childNodes[0].innerHTML === "1") {
        domBoard[i].getElementsByClassName("cell")[j].childNodes[0].style.visibility="visible";
        domBoard[i].getElementsByClassName("cell")[j].childNodes[0].style.color="blue";
        domBoard[i].getElementsByClassName("cell")[j].childNodes[0].style.background="#B5B5B5";
        domBoard[i].getElementsByClassName("cell")[j].style.background="#B5B5B5";
      }
      else if(domBoard[i] !== undefined && domBoard[i].getElementsByClassName("cell")[j] !== undefined && domBoard[i].getElementsByClassName("cell")[j].childNodes[0].innerHTML === "2") {
        domBoard[i].getElementsByClassName("cell")[j].childNodes[0].style.visibility="visible";
        domBoard[i].getElementsByClassName("cell")[j].childNodes[0].style.color="green";
        domBoard[i].getElementsByClassName("cell")[j].childNodes[0].style.background="#B5B5B5";
        domBoard[i].getElementsByClassName("cell")[j].style.background="#B5B5B5";
      }
      else if(domBoard[i] !== undefined && domBoard[i].getElementsByClassName("cell")[j] !== undefined && domBoard[i].getElementsByClassName("cell")[j].childNodes[0].innerHTML === "3") {
        domBoard[i].getElementsByClassName("cell")[j].childNodes[0].style.visibility="visible";
        domBoard[i].getElementsByClassName("cell")[j].childNodes[0].style.color="red";
        domBoard[i].getElementsByClassName("cell")[j].childNodes[0].style.background="#B5B5B5";
        domBoard[i].getElementsByClassName("cell")[j].style.background="#B5B5B5";
      }
      else if(domBoard[i] !== undefined && domBoard[i].getElementsByClassName("cell")[j] !== undefined && domBoard[i].getElementsByClassName("cell")[j].childNodes[0].innerHTML === "4") {
        domBoard[i].getElementsByClassName("cell")[j].childNodes[0].style.visibility="visible";
        domBoard[i].getElementsByClassName("cell")[j].childNodes[0].style.color="#1310A1";
        domBoard[i].getElementsByClassName("cell")[j].childNodes[0].style.background="#B5B5B5";
        domBoard[i].getElementsByClassName("cell")[j].style.background="#B5B5B5";
      }
      else if(domBoard[i] !== undefined && domBoard[i].getElementsByClassName("cell")[j] !== undefined && domBoard[i].getElementsByClassName("cell")[j].childNodes[0].innerHTML === "0") {
        if (domBoard[i].getElementsByClassName("cell")[j].style.background !== "rgb(181, 181, 181)") {
          domBoard[i].getElementsByClassName("cell")[j].childNodes[0].style.background="#B5B5B5";
          domBoard[i].getElementsByClassName("cell")[j].style.background="#B5B5B5";
          recursiveNearBombs(i, j);
        }
      }
    }
  }
}

$(".cell").on("click", function(){
  $(this).css("background", "#B5B5B5");
  $(this).find("span").css("background", "#B5B5B5");
  var rowClicked = parseInt(this.childNodes[0].dataset.row);
  var colClicked = parseInt(this.childNodes[0].dataset.col);
  var domBoard = document.getElementById("MinesweeperBoard").getElementsByClassName("row");
  var nearBombs = parseInt(domBoard[rowClicked].getElementsByClassName("cell")[colClicked].childNodes[0].innerHTML);

  if(nearBombs === 0){
    recursiveNearBombs(rowClicked,colClicked);
  }
  else if (nearBombs === 1){
    $(this).find("span").css("visibility", "visible");
    $(this).find("span").css("color", "blue");

  }
  else if (nearBombs === 2){
    $(this).find("span").css("visibility", "visible");
    $(this).find("span").css("color", "green");
  }
  else if (nearBombs === 3){
    $(this).find("span").css("visibility", "visible");
    $(this).find("span").css("color", "red");
  }
  else if (nearBombs === 4){
    $(this).find("span").css("visibility", "visible");
    $(this).find("span").css("color", "#1310A1");
  }
  else{

    $(this).prepend($('<img>',{id:'theImg',src:'images/bomb.png'}));
    document.getElementById('MinesweeperBoard').style.pointerEvents = 'none';
    var rowPos = parseInt(this.childNodes[1].dataset.row);
    var colPos = parseInt(this.childNodes[1].dataset.col);
    //  debugger
    game.minesPosition.forEach(function(minePosition){
      if (minePosition.row !== rowPos && minePosition.col !== colPos){
        var img = document.createElement("img");
        img.src = "images/bomb.png";
        document.getElementById("MinesweeperBoard").getElementsByClassName("row")[minePosition.row].getElementsByClassName("cell")[minePosition.col].insertAdjacentHTML('afterbegin', '<img id="theImg" src="images/bomb.png">');
      }
    });
  }
//document.getElementById("MinesweeperBoard").getElementsByClassName("row")[rowClicked-1].getElementsByClassName("cell")[colClicked-1].childNodes[0].innerHTML

});

$(".cell").on('click', startChronometer);

var updateCounter = function(){
    game.secondCounter+=1;
    printCounter();
  };

function printCounter(){
  $(".chronometer")[0].innerHTML = game.secondCounter;
}

function startChronometer (){
  if (game.counterStarted===0) {
    game.counterStarted = 1;
    game.secondCounter = 0;
    game.interval = setInterval (updateCounter, 1000);
    }
  }

var game = new MinesWeeper();

$(".cell").on("contextmenu", function(){
  $(this).prepend($('<img>',{id:'theImg',src:'images/Flag-red-icon.png'}));
  game.minesNumber-=1;
  $(".flagNumber").find("strong")[0].innerHTML = game.minesNumber;
  if(game.minesNumber===0){
    alert("YOU WIN!!");
  }
  return false;
});
