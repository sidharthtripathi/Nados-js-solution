function printFibTillN(n){
  if(n==1){
    console.log(0);
    return;
  }
  else if(n==2){
    console.log("0/n1");
    return;
  }
  console.log("0\n1");
  var first = 0;
  var second = 1;
  var ans = first + second;
  for(var i = 1 ;i<=n-2 ; i++){
    console.log(ans);
    first = second;
    second = ans;
    ans = first + second;
  }
}
//calling the function
printFibTillN(3);