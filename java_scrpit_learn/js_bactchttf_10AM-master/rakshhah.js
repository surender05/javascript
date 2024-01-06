
// try{
//     console.log(document)
// }
// catch(err){

// }
// console.log("Hello")


//1) Event Loop (setImmidiate,setTimeout,process.nextTick)'



console.log("A")

setTimeout(()=>{
    console.log("C")
},0)
setImmediate(()=>{
    console.log("E")
})
process.nextTick(()=>{
    console.log("D")
})

console.log("B")
