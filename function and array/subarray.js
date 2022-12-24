function subarray(arr){
  var ans = "";
  for(var i = 0 ; i<arr.length ; i++){
    for(var j = i ; j<arr.length ; j++){
        for(var k = i ; k<=j ; k++){
          ans = ans + arr[k] + " ";
        }
        ans = ans + "\n";
    }
  }
  console.log(ans);
}

var arr = [1,2,3];
subarray(arr);