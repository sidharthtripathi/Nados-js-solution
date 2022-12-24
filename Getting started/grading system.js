function grading(n){
  if(n>90)
    console.log("excellent");
  else if(n>80 && n<=90)
    console.log("good");
  else if(n>70 && n<=80)
    console.log("fair");
  else if(n>60 && n<=70)
    console.log("meets expectation");
  else
    console.log("below par");
}

//calling the function here
grading(56);