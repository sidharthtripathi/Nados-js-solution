function pattern(n){
  var str = n;
  var ans = "";
  for(var i = 1; i<=n ; i++){
    for(var j = str ; j>=1 ; j--){
      ans = ans + "*\t";
    }
    ans = ans + "\n";
    str--;
  }
  console.log(ans);
}

pattern(5);