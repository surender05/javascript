var p = Promise.resolve("Solved")
var p1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject("Rejected")
    },2000)
})

// var p2 = new Promise(function(){
//     for(;;){

//     }
// })



Promise.allSettled([p,p1]).then(res=>{
    res.forEach(e=>{
        console.log(e.status)
    })
})