var input = [-2, -3, 4, -1, -2, 1, 5, -3];

function largestsumCA(arr){
    var max_sum = -(Math.pow(2, 53) + 1);
    var max_sum_current=0;
    for(var i=0;i<arr.length;i++){
        max_sum_current = max_sum_current + arr[i];
        if(max_sum < max_sum_current){
            max_sum = max_sum_current;
        }
        if(max_sum_current < 0){
            max_sum_current = 0;
        }
    }
    return max_sum;
}

console.log(largestsumCA(input))