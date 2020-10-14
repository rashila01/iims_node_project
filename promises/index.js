let promiseArrowExample = () => {
    return new Promise(function (resolve, reject) {
       let data = [];
       if(data.length > 0) {
           resolve(data)
       } else {
           reject('this is empty array')
       }
   });
}

console.log('this is start');

let result = promiseArrowExample().then(function(result) {
console.log(result);
}).catch(function(error) {
console.log(error);
});

console.log('this is end');

