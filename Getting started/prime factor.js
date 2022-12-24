function primeFactor(n){
var i = 2;
while(n!=1){
  while(n%i == 0){
    console.log(i);
    n = n/i;
  }
  i++;
}
}

primeFactor(22);