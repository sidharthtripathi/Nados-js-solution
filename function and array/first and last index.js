function firstAndLast(arr,target){
  //finding the first index
  var s = 0;
  var e = arr.length-1;
  var mid;
  var fi = -1;
  while(s<=e){
    mid = Math.floor((s+e)/2);
    if(target > arr[mid]){
      s = mid + 1;
    }
    else if(target < arr[mid]){
      e = mid - 1;
    }
    else{
      fi = mid;
      e = mid - 1;
    }
  }
  // finding the last index
  s = 0;
  e = arr.length - 1;
  li = -1;
    while(s<=e){
    mid = Math.floor((s+e)/2);
    if(target > arr[mid]){
      s = mid + 1;
    }
    else if(target < arr[mid]){
      e = mid - 1;
    }
    else{
      li = mid;
      s = mid + 1;
    }
  }
  console.log("first index: " + fi + "\n" + "Last index: " + li);

}
var arr = [1,2,3,4,5,6];
var target = 4;
firstAndLast(arr,target);