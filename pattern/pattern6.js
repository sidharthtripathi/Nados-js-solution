function pattern(n){
  var str = Math.floor(n/2 + 1);
  var spc = 2;
  var ans = "";
  for(var i = 1; i<=n ; i++){
    //adding str
    for(var j = 1 ; j<=str ; j++){
      ans = ans + "*\t";
    }
    //adding spc
    for(var j = 1 ; j<=spc ; j++){
      ans = ans + "\t";
    }
    //adding str again
    for(var j = 1 ; j<=str ; j++){
      ans = ans + "*\t";
    }
    //adding next line
    ans = ans + "\n";
    if(i > Math.floor(n/2)){
      str++;
      spc = spc - 2;
    }
    else{
      str--;
      spc = spc + 2;
    }
  }
  console.log(ans);

}

pattern(7);