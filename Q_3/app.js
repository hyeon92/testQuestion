
  let ticketingList = [
    [1, 1, 1, 1], 
    [1, 1, 1, 1], 
    [1, 1, 1, 1], 
    [1, 1, 1, 1]
  ];
  function onload(){

  for(let i = 0; i < 4; i++){

    var div = document.createElement('div');
    div.id = "div_"+i;
    document.getElementById('btnGroup').appendChild(div);

    for(let j = 0; j < 4; j++){

      var button = document.createElement('button');
      button.id = `${i},${j}`;
      button.className="css1";
      button.addEventListener("click", onClick);
      document.getElementById('div_'+i).appendChild(button);

    }
  }


}

function onClick(e){

  // 0:통로, 1:예약가능 좌석, 2:예약불가 좌석, 3:선택불가 좌석

  let clickSeat = e.target.id.split(',');

  let clickSeatValue = ticketingList[clickSeat[0]][clickSeat[1]];

  //클릭 시 해당 좌석의 예약가능 유무 판단 및 적용
  if(clickSeatValue == 1){
    ticketingList[clickSeat[0]][clickSeat[1]] = 2;
    e.target.className = "css2";
  }else if(clickSeatValue == 2){
    ticketingList[clickSeat[0]][clickSeat[1]] = 1;
    e.target.className = "css1";
  }

}

function saveClick(e){
  // 0:통로, 1:예약가능 좌석, 2:예약불가 좌석, 3:선택불가 좌석

  //예약한 자리가 있을 경우 선택 불가 좌석으로 변경
  for(var i = 0; i < 4; i ++){
    for(var j = 0; j < 4; j++){
      if(ticketingList[i][j] == 2){
        ticketingList[i][j] = 3;

        var button = document.getElementById(i+","+j);
        button.className = "css3";
      }
    }
  }
  console.log(ticketingList);
}




// function onload(){
  
//   for(let i = 0; i < 4; i++){

//     var div = document.createElement('div');
//     div.id = "div_"+i;
//     document.getElementById('btnGroup').appendChild(div);

//     for(let j = 0; j < 4; j++){

//       var button = document.createElement('button');
//       button.id = `bnt[${i}][${j}]`;
//       button.className="css1";
//       button.addEventListener("click", onClick);
//       document.getElementById('div_'+i).appendChild(button);

//     }
//   }
  
// }

// function onClick(e){

//   var button = document.getElementById(e.target.id);

//   if(button.className == "css1")
//     button.className="css2";
//   else if(button.className == "css2"){
//     button.className = "css1";
//   }
// }

// function saveClick(e){

//   var button = document.getElementsByClassName("css1");
//   // console.log(button[1])
//   // return  0;
//   // console.log(button);

//   for(var i = 0; i < button.length; i++){
//     console.log(button[i].id);
//     console.log(`${i} : `, button[i]);
//     // button[i].classList.contains('css3')
//     // button[i].className = "css3";
//   }
  
// }