// function example(){
//     console.log('this is function example')
// }
// setTimeout(example,10000)

let i = 0;

let interval = setInterval (function example(arg){
    if(i>5){
        clearInterval(interval);
    } else{
        console.log(i)
        i++;
    }
    
}, 2000)