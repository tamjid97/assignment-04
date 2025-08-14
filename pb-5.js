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
