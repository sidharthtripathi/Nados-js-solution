function barchart(arr){
var max = arr[0];
//finding max
for(var i = 0 ; i<arr.length ; i++)
  if(arr[i]>max)
    max = arr[i];
//now forming the chart
var str = "";
for(var i = max ; i>=1 ; i--){
  for(var j = 0 ; j<arr.length ; j++){
    if(arr[j]>=i){
      str = str + "*\t";
    }
    else{
      str = str + "\t";
    }
  }
  str = str + "\n";
}

console.log(str);

}
var arr = [3,4,2,5,7,1];
barchart(arr);


