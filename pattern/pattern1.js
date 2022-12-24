function pattern(n){
  var str = 1;
  var ans = "";
  for(var i = 1 ; i<=n ; i++){
    for(var j = 1 ; j<=i ; j++){
      ans = ans + "*\t";
    }
    ans = ans + "\n";
  }
  console.log(ans);
}

pattern(5);