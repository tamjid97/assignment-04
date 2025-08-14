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

console.log(isSame
  (
    {data: [2 , 5 , 6] } , [2 , 5 , 6]
  )
);