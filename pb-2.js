function  onlyCharacter( str ) {
if (typeof str !== "string"){
  return "Invalid";
}
return str.toUpperCase().replace(/\s/g, "")
}