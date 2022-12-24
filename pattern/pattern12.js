	function pattern(n){
var first = 0;
var second = 1;
var ans = 0;
var str = "";
for(var i = 1; i<= n ; i++){
for(var j = 1 ; j<= i ; j++){
  str = str + ans + "\t";
  first = second;
  second = ans;
  ans = first + second;
}
str = str + "\n";
}
console.log(str);

}

pattern(5);