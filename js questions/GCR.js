// input [ 4 , 5 , 2 , 25 ]
// output [ 2, 1, 1, 0 ]
function binarySearch(current, list){
    var l = 0;
    var r = list.length -1;
    var mid;
    while(l<=r){
        mid = l + Math.floor((r - l) / 2);
        if(list[mid] > current){
            r = mid - 1;
        }else if(list[mid] == current){
            return mid;
        } else {
            l = mid + 1;
        }
    }
    return -1;
}
function countGreater(current, list){
    var l = 0;
    var r = list.length -1;
    var mid;
    while (l < r) {
        mid = l + Math.floor((r - l) / 2);
        if (list[mid] > current) r = mid;
        else l = mid + 1;
      }
    if (l === r && current > list[l]) return 0;
    return list.length - l;
}
function deletedCurrent(current, list){
    var findIndex = binarySearch(current, list);
    list.splice(findIndex, 1);
}


function greaterCountRight(arr){
    const updatedArr = [...arr];
    updatedArr.sort();
    for(var i=0; i<arr.length; i++){
         console.log(updatedArr);
        deletedCurrent(arr[i], updatedArr);
        arr[i] = countGreater(arr[i], updatedArr)
    }
    return arr;
}

console.log(greaterCountRight([3, 7, 1, 5, 9, 2]));