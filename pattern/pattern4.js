function pattern(n){
var spc = 0;
var str = n;
var ans = "";
for(var i = 1 ; i<=n ; i++){
  //adding spc
  for(var j = 1; j<=spc ; j++){
    ans = ans + "\t";
  }
  spc++;
  //adding str
  for(var j = 1 ; j<=str ; j++){
    ans = ans + "*\t";
  }
  str--;
  ans = ans + "\n";
}
console.log(ans);
}

pattern(5);