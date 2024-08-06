// To implement circuit break that halts the function execution for x time if it fails for y count

// function circuitbreaker(x, y){
//     var count = 0;
//     let timeout;
//     return function(fn){
//         if(count === y){
//             if(!timeout){
//                 timeout = setTimeout(()=>{
//                     timeout = null;
//                     count=0;
//                 }, x);
//             }
//         } else if(!timeout) {
//             fn();
//             count++;
//         }
//     }
// }

// var fn = function(){
//     console.log('execute!!!!!');
// }

// var breaker = circuitbreaker(1000, 5);

// breaker(fn)
// breaker(fn)
// breaker(fn)
// breaker(fn)
// breaker(fn)
// breaker(fn)
// breaker(fn)
// breaker(fn)
// breaker(fn)
// setTimeout(()=>{breaker(fn)}, 2000)


function circuitbreaker(fn, y, threshholdValue){
    var failure = 0;
    var isClosed = false;
    var lastfailed = 0;
    return function(...args) {
        debugger;
        if(isClosed){
            if((Date.now() - lastfailed) > threshholdValue) {
                isClosed = false;
            } else {
                console.log('service is down');
                return;
            }
        }
        
        try {
            const result = fn(...args);
            failure = 0;
            return result;
        } catch(e) {
            console.log(e);
            failure++;
            lastfailed = Date.now();
            if(failure >= y) {
                isClosed = true; 
            }
            
        }
    }
}
var fn1 = function(){
    var count = 0;
    return function(){
        count++;
        if(count < 4){
            throw "error";
        } else{
            return "hello";
        }
    }
}
var testfn = fn1();
var breaker = circuitbreaker(testfn, 3, 3000);

breaker()
breaker()
breaker()
breaker()
breaker()
breaker()
breaker()
breaker()
breaker()
setTimeout(()=>{breaker()}, 4000);




