function pattern(n){
var num = 1;
var ans = "";
for(var i = 1; i<=n ; i++){
  for(var j = 1 ; j<=i ; j++){
    ans = ans + num + "\t";
    num++;
  }
  ans = ans + "\n";
}
console.log(ans);

}

pattern(5);