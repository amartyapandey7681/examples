const { resolve } = require("bluebird");
const Promise=require("bluebird");

const t=function(a,b){

    return new Promise(function(resolve,reject){

        console.log(a+b);
        resolve();
    })
}

t(2,3).then(function(){

    console.log("resolved");
}).catch(function(){

    console.log("not");
});

