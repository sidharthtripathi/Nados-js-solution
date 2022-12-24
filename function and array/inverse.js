function inverse(arr){
  var arr2 = [];
  for(var i = 0 ; i<arr.length ; i++){
    arr2[arr[i]] = i; 
  }
  arr = arr2;
  console.log(arr);
}

var arr = [4,0,2,3,1];
inverse(arr);