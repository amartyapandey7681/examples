const Promise = require("bluebird");

let promise= new Promise(function(resolve,reject){

    console.log("amartya");
    
    resolve();
});


promise.then(function(){
    return new Promise(function(resolve,reject){
        console.log("pandey1");
    })
}).spread(function(){

console.log("pandey");
}).catch(function(){
    console.log("red");
})