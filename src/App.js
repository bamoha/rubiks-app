import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  useEffect(() => {
    cube_start();
    draw();
  })


  const [allMoves, setAllMoves] = useState(0)

  var move = 0;
  const cube = [];

  for (var i = 0; i < 18; i++) {
    cube[i] = [];
  }


  const countMoves = () => {
    setAllMoves(move)
  }

  const cube_start = () => {
    move = 0;
    for (var i = 0; i < 18; i++) {
      for (var j = 0; j < 3; j++) {
        if (i < 3) cube[i][j] = 'B';
        if (i >= 3 && i < 6) cube[i][j] = 'W';
        if (i >= 6 && i < 9) cube[i][j] = 'G';
        if (i >= 9 && i < 12) cube[i][j] = 'Y';
        if (i >= 12 && i < 15) cube[i][j] = 'R';
        if (i >= 15 && i < 18) cube[i][j] = 'O';
        statrtrotation();
        console.log("reset")
      }
    }
  }

  const draw = () => {
    for (var i = 0; i < 18; i++) {
      for (var j = 0; j < 3; j++) {
        if (cube[i][j] === 'B') document.getElementsByClassName("each_box_id" + i + j)[0].style.background = "#0f5bff";
        if (cube[i][j] === 'G') document.getElementsByClassName("each_box_id" + i + j)[0].style.background = "green";
        if (cube[i][j] === 'W') document.getElementsByClassName("each_box_id" + i + j)[0].style.background = "white";
        if (cube[i][j] === 'Y') document.getElementsByClassName("each_box_id" + i + j)[0].style.background = "yellow";
        if (cube[i][j] === 'R') document.getElementsByClassName("each_box_id" + i + j)[0].style.background = "red";
        if (cube[i][j] === 'O') document.getElementsByClassName("each_box_id" + i + j)[0].style.background = "orange";
      }
    }
  }

  const moveU = () => {
    move++;
    var initial1 = cube[6][0];
    var initial2 = cube[6][1];
    var initial3 = cube[6][2];

    var initial4 = cube[4][0];
    var initial5 = cube[5][2];

    cube[6][0] = cube[14][0];
    cube[6][1] = cube[13][0];
    cube[6][2] = cube[12][0];

    cube[12][0] = cube[2][0];
    cube[13][0] = cube[2][1];
    cube[14][0] = cube[2][2];

    cube[2][0] = cube[17][2];
    cube[2][1] = cube[16][2];
    cube[2][2] = cube[15][2];

    cube[17][2] = initial3;
    cube[16][2] = initial2;
    cube[15][2] = initial1;

    cube[4][0] = cube[5][1];
    cube[5][1] = cube[4][2];
    cube[4][2] = cube[3][1];
    cube[3][1] = initial4;

    cube[5][2] = cube[3][2];
    cube[3][2] = cube[3][0];
    cube[3][0] = cube[5][0];
    cube[5][0] = initial5;

    draw();
  }

  const moveUInverse = () => {
    move++;
    move = move - 3;
    moveU();
    moveU();
    moveU();
  }

  const moveR = () => {
    move++;
    var initial1 = cube[3][2];
    var initial2 = cube[4][2];
    var initial3 = cube[5][2];

    var initial4 = cube[13][0];
    var initial5 = cube[14][0];

    cube[3][2] = cube[6][2];
    cube[4][2] = cube[7][2];
    cube[5][2] = cube[8][2];

    cube[6][2] = cube[9][2];
    cube[7][2] = cube[10][2];
    cube[8][2] = cube[11][2];

    cube[9][2] = cube[0][2];
    cube[10][2] = cube[1][2];
    cube[11][2] = cube[2][2];

    cube[0][2] = initial1;
    cube[1][2] = initial2;
    cube[2][2] = initial3;

    cube[13][0] = cube[14][1];
    cube[14][1] = cube[13][2];
    cube[13][2] = cube[12][1];
    cube[12][1] = initial4;

    cube[14][0] = cube[14][2];
    cube[14][2] = cube[12][2];
    cube[12][2] = cube[12][0];
    cube[12][0] = initial5;

    draw();
  }

  const moveRInverse = () => {
    move++;
    move = move - 3;
    moveR();
    moveR();
    moveR();
  }

  const moveLInverse = () => {
    move++;
    var initial1 = cube[3][0];
    var initial2 = cube[4][0];
    var initial3 = cube[5][0];

    var initial4 = cube[16][2];
    var initial5 = cube[17][2];

    cube[3][0] = cube[6][0];
    cube[4][0] = cube[7][0];
    cube[5][0] = cube[8][0];

    cube[6][0] = cube[9][0];
    cube[7][0] = cube[10][0];
    cube[8][0] = cube[11][0];

    cube[9][0] = cube[0][0];
    cube[10][0] = cube[1][0];
    cube[11][0] = cube[2][0];

    cube[0][0] = initial1;
    cube[1][0] = initial2;
    cube[2][0] = initial3;

    cube[16][2] = cube[17][1];
    cube[17][1] = cube[16][0];
    cube[16][0] = cube[15][1];
    cube[15][1] = initial4;

    cube[17][2] = cube[17][0];
    cube[17][0] = cube[15][0];
    cube[15][0] = cube[15][2];
    cube[15][2] = initial5;

    draw();
  }

  const moveL = () => {
    move++;
    move = move - 3;
    moveLInverse();
    moveLInverse();
    moveLInverse();
  }

  const moveDInverse = () => {
    move++;
    var initial1 = cube[8][0];
    var initial2 = cube[8][1];
    var initial3 = cube[8][2];

    var initial4 = cube[9][0];
    var initial5 = cube[9][1];

    cube[8][0] = cube[14][2];
    cube[8][1] = cube[13][2];
    cube[8][2] = cube[12][2];

    cube[14][2] = cube[0][2];
    cube[13][2] = cube[0][1];
    cube[12][2] = cube[0][0];

    cube[0][2] = cube[15][0];
    cube[0][1] = cube[16][0];
    cube[0][0] = cube[17][0];

    cube[17][0] = initial3;
    cube[16][0] = initial2;
    cube[15][0] = initial1;

    cube[9][0] = cube[9][2];
    cube[9][2] = cube[11][2];
    cube[11][2] = cube[11][0];
    cube[11][0] = initial4;

    cube[9][1] = cube[10][2];
    cube[10][2] = cube[11][1];
    cube[11][1] = cube[10][0];
    cube[10][0] = initial5;

    draw();
  }

  const moveD = () => {
    move++;
    move = move - 3;
    moveDInverse();
    moveDInverse();
    moveDInverse();
  }

  const moveF = () => {
    move++;
    var initial1 = cube[5][0];
    var initial2 = cube[5][1];
    var initial3 = cube[5][2];

    var initial4 = cube[6][0];
    var initial5 = cube[6][1];

    cube[5][0] = cube[17][0];
    cube[5][1] = cube[17][1];
    cube[5][2] = cube[17][2];

    cube[17][2] = cube[9][0];
    cube[17][1] = cube[9][1];
    cube[17][0] = cube[9][2];

    cube[9][0] = cube[14][2];
    cube[9][1] = cube[14][1];
    cube[9][2] = cube[14][0];

    cube[14][0] = initial1;
    cube[14][1] = initial2;
    cube[14][2] = initial3;

    cube[6][0] = cube[8][0];
    cube[8][0] = cube[8][2];
    cube[8][2] = cube[6][2];
    cube[6][2] = initial4;

    cube[6][1] = cube[7][0];
    cube[7][0] = cube[8][1];
    cube[8][1] = cube[7][2];
    cube[7][2] = initial5;

    draw();
  }
  const moveFInverse = () => {
    move++;
    move = move - 3;
    moveF();
    moveF();
    moveF();
  }

  const moveB = () => {
    move++;
    var initial1 = cube[3][0];
    var initial2 = cube[3][1];
    var initial3 = cube[3][2];

    var initial4 = cube[2][0];
    var initial5 = cube[2][1];

    cube[3][0] = cube[12][0];
    cube[3][1] = cube[12][1];
    cube[3][2] = cube[12][2];

    cube[12][0] = cube[11][2];
    cube[12][1] = cube[11][1];
    cube[12][2] = cube[11][0];

    cube[11][2] = cube[15][0];
    cube[11][1] = cube[15][1];
    cube[11][0] = cube[15][2];

    cube[15][0] = initial1;
    cube[15][1] = initial2;
    cube[15][2] = initial3;

    cube[2][0] = cube[2][2];
    cube[2][2] = cube[0][2];
    cube[0][2] = cube[0][0];
    cube[0][0] = initial4;

    cube[2][1] = cube[1][2];
    cube[1][2] = cube[0][1];
    cube[0][1] = cube[1][0];
    cube[1][0] = initial5;

    draw();
  }

  const moveBInverse = () => {
    move++;
    move = move - 3;
    moveB();
    moveB();
    moveB();
  }

  const shuffle = () => {
    let parts = ['U', 'U2', 'R', 'R2', 'L', 'L2', 'F', 'F2', 'B', 'B2', 'D', 'D2']
    let newMove = Math.floor(Math.random() * parts.length);

    for (var i = newMove; i < 21; i++) {
      if (parts[i] === "U") moveU();
      if (parts[i] === "U2") { moveU(); moveU(); };
      if (parts[i] === "U'") moveUInverse();

      if (parts[i] === "R") moveR();
      if (parts[i] === "R2") { moveR(); moveR(); }
      if (parts[i] === "R'") moveRInverse();

      if (parts[i] === "L") moveL();
      if (parts[i] === "L2") { moveL(); moveL(); }
      if (parts[i] === "L'") moveLInverse();

      if (parts[i] === "F") moveF();
      if (parts[i] === "F2") { moveF(); moveF(); }
      if (parts[i] === "F'") moveFInverse();

      if (parts[i] === "B") moveB();
      if (parts[i] === "B2") { moveB(); moveB(); }
      if (parts[i] === "B'") moveBInverse();

      if (parts[i] === "D") moveD();
      if (parts[i] === "D2") { moveD(); moveD(); }
      if (parts[i] === "D'") moveDInverse();
    }

    setAllMoves(0);
  }

  var staticY = -30;
  var staticX = -35;

  const rotateL = () => {
    document.getElementsByClassName("cube")[0].style.transform = "rotateX(" + staticX + "deg) rotateY(135deg)";
    document.getElementsByClassName("left")[0].style.background = "#003580";
    document.getElementsByClassName("right")[0].style.background = "#0066F5";
    staticY = 135;
  }

  const rotateR = () => {
    document.getElementsByClassName("cube")[0].style.transform = " rotateX(" + staticX + "deg) rotateY(-30deg) "
    document.getElementsByClassName("right")[0].style.background = "#003580";
    document.getElementsByClassName("left")[0].style.background = "#0066F5";
    staticY = -30;
  }

  const rotateD = () => {
    document.getElementsByClassName("cube")[0].style.transform = " rotateX(35deg) rotateY(" + staticY + "deg) ";
    document.getElementsByClassName("down")[0].style.background = "#003580";
    document.getElementsByClassName("up")[0].style.background = "#0066F5";
    staticX = 35;
  }

  const rotateU = () => {
    document.getElementsByClassName("cube")[0].style.transform = " rotateX(-35deg) rotateY(" + staticY + "deg) ";
    document.getElementsByClassName("up")[0].style.background = "#003580";
    document.getElementsByClassName("down")[0].style.background = "#0066F5";
    staticX = -35;
  }

  const statrtrotation = () => {
    document.getElementsByClassName("right")[0].style.background = "#003580";
    document.getElementsByClassName("up")[0].style.background = "#003580";
    document.getElementsByClassName("left")[0].style.background = "#0066F5";
    document.getElementsByClassName("down")[0].style.background = "#0066F5";
    rotateU();
    rotateR();
  }


  return (
    <div className="App d-flex">
      <div className="w-70">
        <div className="cube">
          <div className="box blue">
            <div className="each_box each_box_id00"></div>
            <div className="each_box each_box_id01"></div>
            <div className="each_box each_box_id02"></div>
            <div className="each_box each_box_id10"></div>
            <div className="each_box each_box_id11"></div>
            <div className="each_box each_box_id12"></div>
            <div className="each_box each_box_id20"></div>
            <div className="each_box each_box_id21"></div>
            <div className="each_box each_box_id22"></div>
          </div>

          <div className="box white">
            <div className="each_box each_box_id30"></div>
            <div className="each_box each_box_id31"></div>
            <div className="each_box each_box_id32"></div>
            <div className="each_box each_box_id40"></div>
            <div className="each_box each_box_id41"></div>
            <div className="each_box each_box_id42"></div>
            <div className="each_box each_box_id50"></div>
            <div className="each_box each_box_id51"></div>
            <div className="each_box each_box_id52"></div>
          </div>

          <div className="box green">
            <div className="each_box each_box_id60"></div>
            <div className="each_box each_box_id61"></div>
            <div className="each_box each_box_id62"></div>
            <div className="each_box each_box_id70"></div>
            <div className="each_box each_box_id71"></div>
            <div className="each_box each_box_id72"></div>
            <div className="each_box each_box_id80"></div>
            <div className="each_box each_box_id81"></div>
            <div className="each_box each_box_id82"></div>
          </div>

          <div className="box yellow">
            <div className="each_box each_box_id90"></div>
            <div className="each_box each_box_id91"></div>
            <div className="each_box each_box_id92"></div>
            <div className="each_box each_box_id100"></div>
            <div className="each_box each_box_id101"></div>
            <div className="each_box each_box_id102"></div>
            <div className="each_box each_box_id110"></div>
            <div className="each_box each_box_id111"></div>
            <div className="each_box each_box_id112"></div>
          </div>

          <div className="box red">
            <div className="each_box each_box_id120"></div>
            <div className="each_box each_box_id121"></div>
            <div className="each_box each_box_id122"></div>
            <div className="each_box each_box_id130"></div>
            <div className="each_box each_box_id131"></div>
            <div className="each_box each_box_id132"></div>
            <div className="each_box each_box_id140"></div>
            <div className="each_box each_box_id141"></div>
            <div className="each_box each_box_id142"></div>
          </div>

          <div className="box orange">
            <div className="each_box each_box_id150"></div>
            <div className="each_box each_box_id151"></div>
            <div className="each_box each_box_id152"></div>
            <div className="each_box each_box_id160"></div>
            <div className="each_box each_box_id161"></div>
            <div className="each_box each_box_id162"></div>
            <div className="each_box each_box_id170"></div>
            <div className="each_box each_box_id171"></div>
            <div className="each_box each_box_id172"></div>
          </div>
        </div>

      </div>
      <div className="w-30">
        <div className="button_panel">

          <div>
            <h2>No Of Moves: {allMoves}</h2>
          </div>

          <button onClick={moveU}>MOVE U</button>
          <button onClick={moveUInverse}>MOVE U'</button>

          <button onClick={moveR}>MOVE R</button>
          <button onClick={moveRInverse}>MOVE R'</button>

          <button onClick={moveL}>MOVE L</button>
          <button onClick={moveLInverse}>MOVE L'</button>

          <button onClick={moveDInverse}>MOVE D'</button>
          <button onClick={moveD}>MOVE D</button>

          <button onClick={moveF}>MOVE F</button>
          <button onClick={moveFInverse}>MOVE F'</button>

          <button onClick={moveB}>MOVE B</button>
          <button onClick={moveBInverse}>MOVE B'</button>

          <button onClick={countMoves}>Number of moves</button>
          <button onClick={cube_start}>RESET</button>
          <button onClick={shuffle}>Shuffle</button>
          <br />
          <button className="left" onClick={rotateL}>Rotate Left</button>
          <button className="right" onClick={rotateR}>Rotate Right</button>
          <button className="up" onClick={rotateU}>Rotate Up</button>
          <button className="down" onClick={rotateD}>Rotate Down</button>
        </div>
      </div>
    </div>
  );
}

export default App;
