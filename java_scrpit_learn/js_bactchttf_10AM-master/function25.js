// var p = new Promise()
// var babu_promise = new Promise(function(resolve,failed){
//     var sum = 0;
//     for(var i = 0;i<BigInt(2345678);i++){
//         sum+=i
//     }
//     resolve(sum)
// })


// console.log("A")

// babu_promise.then((res)=>{
//     console.log(res)
// },(error)=>{

// })

// console.log("B")



// console.log("A")
// var age = 16
// var vote = new Promise(function(resolve,failed){
//     if(age >= 18){
//         resolve("Vote")
//     }
//     else{
//         failed("Not Vote")
//     }
// })

// vote.then((a)=>{console.log(a)},(b)=>{console.log(b)})
// console.log("B")

// Promise.resolve()
// Promise.reject()
// Promise.race()
// Promise.all()
// Promise.any()
// Promise.allSettled()


// async function ff(){
//     return "hello"
// }
// async function dd(){
//     return "world"
// }

// var f = Promise.resolve(ff())
// f.then(ele=>{
//     console.log(ele)
// })
// Promise.allSettled([ff(),dd()]).then(ele=>{
//     console.log(ele.status)
// })
