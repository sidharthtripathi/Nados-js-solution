function gcdLcm(a,b){
  var chotu = Math.min(a,b);
  var badu = Math.max(a,b);
  var lcm = badu;
  while(!(lcm%chotu == 0 && lcm%badu == 0)){
    lcm++;
  }
  console.log("lcm is: " + lcm);
  console.log("hcf is: " + (a*b)/lcm);
}

gcdLcm(2,3);