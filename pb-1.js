function totalFine( fare ) {
if (typeof fare !=="number" || fare<=0){
return "Invalid";
}
let fineMoney = fare * 20/100
let total = fineMoney + fare + 30;
return(total)
}
