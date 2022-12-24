function reverse(arr,s,e){
  var i = s;
  var j = e;
  while(i<j){
    //swap values
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;j--;
  }
}
function rotate(arr,k){
  reverse(arr,k-1,arr.length-1);
  reverse(arr,0,k-2);
  reverse(arr,0,arr.length-1);
}
var arr = [1,2,3,4,5];
rotate(arr,3);
console.log(arr);