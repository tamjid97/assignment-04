
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


console.log(bestTeam
  ({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France"
)
);