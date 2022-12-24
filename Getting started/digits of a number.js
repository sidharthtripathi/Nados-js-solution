function digitsOfNumber(n){
  var arr = [];
  while(n>0){
    arr.push(n%10);
    n = Math.floor(n/10);
  }
  for(var i = arr.length-1 ; i>=0 ; i--)
    console.log(arr[i]);
}

digitsOfNumber(52344);