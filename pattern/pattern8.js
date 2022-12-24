function pattern(n){
  var ans = "";
  for(var i = 1; i<=n ; i++){
    for(var j = 1; j<=n ; j++){
      if(i+j == n+1){
        ans = ans + "*\t";
      }
      else{
        ans = ans + "\t";
      }
    }
    ans = ans + "\n"
  }
  console.log(ans);
}

pattern(7);