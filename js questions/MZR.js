function moveZeroRight(arr){
    var c=0;
    var d=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i] === 0){
            c++;
        }else{
            arr[d] = arr[i];
            d++;
        }
    }
    while(c<arr.length){
        arr[c] = 0;
        c++;
    }
    return arr;
}

console.log(moveZeroRight([ 0, 0, 3, 0, 1, 4]))