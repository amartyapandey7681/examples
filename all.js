const Promise=require("bluebird");
let promise=new Promise(function(resolve,reject){

    console.log("amartya");

    resolve();
});

let promise1=new Promise(function(resolve,reject){

    console.log("pandey");

    reject();
});
Promise.all([promise,promise1]).then(function(){
    console.log("both completed");
}).catch(function(){
    console.log("both not completed");
})

