function find(arr,k){
for(var i = 0 ;i<arr.length ; i++)
  if(arr[i] == k)
    return i;
return -1;

}
var arr = [1,2,3,4,5];
var k = 3;
console.log(find(arr,k));