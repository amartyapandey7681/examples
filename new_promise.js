var Promise = require("bluebird");

let promise= new Promise(function trying(myresolve,myreject){

    console.log("amartya");
    myresolve();
    myreject();
})

const l=promise.then(function(){
   // return 4;
    console.log(" pandey");
}).then(function(){console.log("lion")}).then(function(){console.log("lion2")}).catch(function(){

    console.log(" rocks");
})

//console.log(l);