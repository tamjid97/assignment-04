
function totalFine( fare ) {
if (typeof fare !=="number" || fare<=0){
return "Invalid";
}
let fineMoney = fare * 20/100
let total = fineMoney + fare + 30;
return(total)
}



function  onlyCharacter( str ) {
if (typeof str !== "string"){
  return "Invalid";
}
return str.toUpperCase().replace(/\s/g, "")
}



function  bestTeam( player1, player2 ) {
if (
typeof player1 !== "object" || player1 === null || Array.isArray(player1) ||
typeof player2 !== "object" || player2 === null || Array.isArray(player2)
) {
return "Invalid";
}

let team1 = player1.foul + player1.cardY + player1.cardR;
let team2 = player2.foul + player2.cardY + player2.cardR;
if (team1 > team2){
  return player2.name
}
else if (team1 < team2){
  return player1.name
}
else {
  return "Tie";
}
}



function  isSame(arr1 , arr2 ) {
if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
return "Invalid";
}
if (arr1.length !== arr2.length){
  return false;
}
for (let e = 0; e < arr1.length; e++){
  if (arr1[e] !== arr2[e]){
    return false;
  }
}
  return true;
}



function  resultReport( marks ) {
if (!Array.isArray(marks)){
return "Invalid";
}
if (marks.length === 0) {
    return { finalScore: 0, pass: 0, fail: 0 };
  }
  let pass = 0;
  let fail = 0;
  let total = 0;
  for (let mark of marks) {
    total += mark;
    if (mark >= 40) {
      pass++;
    }
  else {
      fail++;
    }
  }
  let average = Math.round(total / marks.length);
  return {
    finalScore: average,
    pass: pass,
    fail: fail
  }
}


