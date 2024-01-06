// var p = new Promise(function(){

// })

// var p = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             resolve("Ho gaya")
//         },5000)
// })

// console.log("A")
// console.log(p)
// console.log("B")

// async function display(a,b){
//     return a+b
// }

// console.log("A")
// var p = display(10,20)
// p.then((x)=>{
// console.log(x)
// })
// console.log("B")





// async function sum(x,y){
//     return x + y
// }

// async function disp(){
//     return "kumar"
// }

// async  function display(){
//     const f =  await disp()
//     return "hello "+f
  
   
// }


// var g = await display()
// console.log(g)


// const f = async ()=>{

// }

// var arr = [10,20,40,67,89]
// async function sum(x,y){
//     return x+y
// }
// let data = 0
// arr.forEach(async (val)=>{
//   data =  await sum(val,data)
// })
// console.log(data)


// var arr = [10,20,40,67,89]


// var data = arr.map(async (val)=>{
//   return  val+5
// })

// Promise.all(data.slice(0,2)).then((res)=>{
//     console.log(res)
// })


// var arr = [10,20,40,67,89]
// async function sum(x,y){
//     return x+y
// }
// let data =[]
// arr.forEach(async (val,index)=>{
//   data[index] =   sum(val,2)
// })

// Promise.all(data).then(ele=>{
//     console.log(ele.reduce((a,b)=>a+b))
// })

// var f = Promise.resolve("hello world")
// var p = new Promise(function(resolve){
 
//         resolve("hello world")
   
// })
// var p1= new Promise(function(resolve){
//     setTimeout(()=>{
//         resolve("hello kumar")
//     },2000)
// })

// var f = Promise.all([p1,p])
// f.then(ele=>{
//     console.log(ele)
// })
