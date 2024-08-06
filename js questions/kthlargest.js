var input = [8, 3, 4, 1, 5, 9, 6, 7];

function kthlargest(arr, k){
    var s=[];
    var c=0;
    while(c<k){
        s.push(arr[c]);
        c++;
    }
    s.sort((a,b)=>b-a);
    for(var i=c+1;i<arr.length;i++){
            var pop = s.pop();
            if(arr[i]> pop){
                s.push(arr[i]);
                s.sort((a,b)=>b-a);
            }else{
                s.push(pop);
            }
    }
    return s;
}


console.log(kthlargest(input, 5));



// klogk + (N-k)logk ==> Nlogk