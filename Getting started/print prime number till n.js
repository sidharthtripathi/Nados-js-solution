function isPrime(n){
if(n==1)
  return false;
for(var i = 2 ; i<n ; i++){
  if(n%i == 0){
    return false;
  }
}
return true;

}

function printPrimeTill(n){
  for(var i = 1 ; i<=n ; i++){
    if(isPrime(i))
      console.log(i);
  }
}

//calling the function
printPrimeTill(12);