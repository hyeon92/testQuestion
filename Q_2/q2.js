let solution = (inputs) => {

  inputs.sort(sortList);
  return inputs;
}

let sortList = (a, b) => {
  if(Number(a.toString() + b.toString()) < Number(b.toString() + a.toString())){
    return -1;
  }else if (Number(a.toString() + b.toString()) > Number(b.toString() + a.toString())){
    return 1;
  }else{
    return 0;
  }
}


//var inputs = [3, 7, 45, 1];
//var inputs = [1, 55, 81];
// var inputs = [666, 64, 67, 63, 56];
var inputs = [1001, 101];
//var inputs = [3, 7, 45, 1, 52, 4];
//var inputs = [25, 248, 2];

console.log('solution: ', solution(inputs));