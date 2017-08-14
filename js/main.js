
$(document).ready(function() {

let $board = $('.circle');
let height= 6;
let width= 7;

//giving chekers to both player
let currentplayer = "red";
 var box = Array();
 function changeplayer()
  {
    if(currentplayer == "red")
    {
      currentplayer = "blue";
    }
    else
    {
      currentplayer = "red";
    }
  }
  $("td").each(function(){

        $(this).click(function(){

          let clickonce = $(this).css("background-color");
          //console.log(clickonce);
          if(clickonce === "rgb(255, 0, 0)" || clickonce === "rgb(0, 0, 255)")
          {
              alert("Illegal move");
          }
          else{
          $(this).css("background-color", currentplayer);


          $("table tr").each(function(row,value){

            box[row] = Array();
            $(this).children('td').each(function(col,value){

            box[row][col] = $(this).css("background-color");
             });
          });
          let clickonce = $(this).css("background-color");

          changeplayer();
          checkWinner();

        }

        });
  });
// reset game
$('#btn').click(resetgame);

function resetgame()
{
    setTimeout( function(){
      $board.css("background-color" , "white");
      $("#winner").html("");
  }, 3000);

}


function checkWinner(){

//check rows
 for(row=0 ; row < height ; row++)
  {
    for(col=0 ; col < width-3 ; col++)
    {
      color = box[row][col];

      if(color)
      {
        if(box[row][col+1] === color && box[row][col+2] === color && box[row][col+3] === color)
        {
          winnerCheck();
        }
      }
    }
  }

//check columns
 for(col=0; col < width ; col++)
  {
    for(row=0; row < height-3; row++)
    {
      color = box[row][col];
      if(color)
      {
        if(box[row+1][col] === color && box[row+2][col] === color && box[row+3][col] === color)
        {
          winnerCheck();
        }
      }
    }
  }


//check diagonal in upper direction

  for(row=0; row < height-3; row++)
  {
    for(col=0; col < width-3; col++)
    {
      color = box[row][col];
      if(color)
      {
        if(box[row+1][col+1] === color && box[row+2][col+2] === color && box[row+3][col+3] === color)
        {
         console.log(color);
         winnerCheck();
        }
      }
    }
  }


//check diagonal in opposite direction

for(col=0; col<width-3; col++)
{
  for(row = 3; row<height; row++)
  {
    color = box[row][col];
    if(color)
    {
      if(box[row-1][col+1] === color && box[row-2][col+2] === color && box[row-3][col+3] === color)
      {
        console.log(color);
        winnerCheck();
      }
    }
  }
}

}

function winnerCheck ()
{
  var red = "rgb(255, 0, 0)";
  var blue = "rgb(0, 0, 255)";
  var empty = "rgb(0, 0, 0, 0)" || "rgba(0, 0, 0, 0)";

  if(color === red)
  {
    $("#winner").html('<h3>' + "Player Red won !!! Game Over" + '</h3>');
    resetgame();
  }

  else if(color === blue)
  {
    $("#winner").html('<h3>' + "Player Blue won !!! Game Over" + '</h3>');
    resetgame();
  }
}


function checkDraw(color)
{
  var arr = [];
  var empty ="rgb(0 ,0, 0, 0)";
  var empty2 = "rgba(0, 0, 0, 0)";
  var empty3 = "rgb(255, 255, 255)";
  for(row=0 ; row<height ; row++)
  {
  for(col = 0; col<width ; col++)
  {
    color = box[row][col];

    if(color != empty && color != empty2 && color != empty3)
    {
      arr.push(color)
      //console.log(arr + "hsdbfh" + arr.length)
      var holder;
      if(arr.length == 42)
      {
      for (var a = 0 ; a <= arr.length; a++)
      {
      holder = arr[a];
      if(((holder === red)|| (holder === blue) )&& ((holder !== "rgb(0 ,0, 0, 0)" ) || (holder !== "rgba(0, 0, 0, 0)")) )
      {
          console.log("It is a tie " + arr + "hsdbfh" + arr.length);
      }
      }
      }
    }
  }
  }
}






});
