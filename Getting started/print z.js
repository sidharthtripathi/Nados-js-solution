function printZ(n){
  var ans = "";
  for(var i = 1; i<=n ; i++)
    ans = ans + "*\t";
    ans = ans + "\n";
  //now adding the slash
    var spc = n-2;
    for(var i  = 1 ; i<=n-2; i++){
      for(var j = 1; j<=spc ; j++){
        ans = ans + "\t";
      }
      ans = ans + "*\t\n";
      spc--;
    }
    //now adding the last line
    for(var i = 1; i<=n ; i++)
    ans = ans + "*\t";
    return ans;
}
console.log(printZ(10));