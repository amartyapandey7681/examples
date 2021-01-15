let Promise=require("bluebird");

let t=function fun(){


    return new Promise(function(resolve,reject){

        console.log("it is in promise");

        reject();
    })
}
t().then(function(){
    console.log("successful");
}).catch(function(){

    console.log("unsuccessful");
}).finally(function(){

    console.log("this will always run");
})
