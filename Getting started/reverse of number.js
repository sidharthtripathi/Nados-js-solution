function digitsOfNumber(n){
  while(n>0){
    console.log(n%10);
    n = Math.floor(n/10);
  }
}

digitsOfNumber(52344);