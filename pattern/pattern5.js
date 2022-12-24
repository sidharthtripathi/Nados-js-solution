function pattern(n){
  var spc = Math.floor(n/2);
  var str = 1;
  var ans = "";
  for(var i = 1 ; i<=n ; i++){
    //adding spc
    for(var j = 1; j<=spc ; j++){
      ans = ans + "\t";
    }
    //adding str
    for(var j = 1 ; j<=str ; j++){
      ans = ans + "*\t";
    }
    //adding new line then
    ans = ans + "\n";
    if(i>Math.floor(n/2)){
      str = str - 2;
      spc++;
    }
    else{
      str = str + 2;
      spc--;
    }
  }
console.log(ans);
}

pattern(5);