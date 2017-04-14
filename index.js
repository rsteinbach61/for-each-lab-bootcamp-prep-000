function iterativeLog(arr){
  arr.forEach(function(element, index){
  console.log(`${index}: ${element}`)})
}

function iterate(callback){
var arr = [1, 2, 3, 4, 5,]
arr.forEach(callback)
return arr
}
function neg(n){
  return (n * -1)
}

function doToArray(array, callback){
  array.forEach(callback)
}
