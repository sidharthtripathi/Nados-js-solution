function span(arr){
  var max = arr[0];
  var min = arr[0];
  for(var i = 0 ; i<arr.length ; i++){
    if(arr[i]>max)
      max = arr[i];
    if(arr[i]<min)
      min = arr[i];
  }
  return max - min;

}
var arr = [1,2,3,4,5];
console.log(span(arr));