function invsere(n){
  var i = 1;
  var ans = 0;
  while(n>0){
    var rem = n%10;
    n = Math.floor(n/10);
    ans = ans + i*(10**(rem - 1));
    i++;
  }
  return ans;
}

console.log(invsere(81456273));