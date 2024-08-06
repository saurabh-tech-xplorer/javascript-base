// input [ 4 , 5 , 2 , 25 ]
// output [ 5 , 25 , 25 , 25 ]


function nextGreaterNumber(arr){
    var stack = [];

    for(var i=0;i< arr.length;i++){
        while(stack.length > 0 && stack[stack.length-1].value < arr[i]){
            var pop = stack.pop();
            arr[pop['pos']] = arr[i];
        }
        stack.push({
            'value': arr[i],
            'pos': i
        });
    } 
    return arr;  
}

console.log(nextGreaterNumber([ 4 , 5 , 2 , 25 ]));