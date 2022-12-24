function cielFloor(arr){
var floor;
var ciel;
var s = 0;
var e = arr.length-1;
var mid;
while(s<=e){
  mid = Math.floor((s+e)/2);
  if(arr[mid]<target){
    floor = arr[mid];
    s = mid + 1;
  }
  else if(arr[mid]>target){
    ciel = arr[mid];
    e = mid - 1;
  }
  else{
    ciel = arr[mid];
    floor = arr[mid];
    break;
  }
}
console.log("Floor is: " + floor + "\n" + "Ciel is: " + ciel);



}
var arr = [1,2,3,4,5,6];
var target = 5.5;
cielFloor(arr,target);