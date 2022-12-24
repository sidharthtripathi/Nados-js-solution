function digitFreq(n,a){
  var count = 0;
  while(n>0){
    if(n%10 == a)
      count++;
    n = Math.floor(n/10);
  }
  return count;
}

console.log(digitFreq(45234,9));