// Array Function

/*
map,filter,forEach
*/

// var arr = [10,20,30,40,50,60]
// // var f = arr.slice(-5,-2)
// var f = arr.slice(1);
// console.log(f)


// var arr = [10,20,30,12,34,11]

// arr.splice(1,3,23)
// console.log(arr)

// var arr1 = [10,45,67]
// var arr = [10,20,34,12]

// arr.splice(1,2,...arr1)
// console.log(arr)


// var arr = [10,20,34,89,90,67]
// arr.fill(12,1,3)
// console.log(arr)

// var arr = ["installement" ,"dedo","bhai" ,"mere"]
// var f = arr.join(" ");
// console.log(f)


// var arr = [10,20,40,29,45,22];

// var f = arr.some((value)=>value%23===0)
// console.log(f);

// var arr = [10,20,34,12,13]
// var f = arr.every((value)=>value%2===0)
// console.log(f)

// var arr = [10,20,34,12,13]
// var f = arr.every(function(value){
//     return value%2===0
// })
// console.log(f)


// var arr = [
//     {a:10},
//     {a:90},
//     {a:45},
//     {a:12}
// ]

// console.log(arr.every((value) => value.a%2 === 0))


// var arr = [10,20,40,20,12,"maara","kaara","jaara","khara","pani","kanu","money"]
// var f = arr.find((val)=>val == "panii")
// console.log(f)


// var arr = [10,20,34,56]
// var f = arr.findIndex((value)=>value === 34)
// console.log(f)


// var arr = [10,20,30,45,12]
// var receveKaroNa = arr.reduce((total,s)=>{
//     return total+s
// })
// console.log(receveKaroNa)


// var arr = [10,20,30,45,12]
// var pakdona = arr.reduceRight((total,s)=>{
//     return total+s
// })
// console.log(pakdona)



// var arr = [10,20,30,45,12,"hello"]
// var ghatao = arr.reduce((total,s)=>{
//     return total - s
// })
// console.log(ghatao)



// var arr = [10,23,67,12,89]

// var ff = arr.reverse()
// console.log(arr)


// var arr = [10,20,30,12,56,78]
// var f = arr.keys()
// for(const pakadbhai of f)
//     console.log(pakadbhai)



// var arr = [10,20,30,12,56,78]
// for(const vola_mera_jhola of arr.values())
//     console.log(vola_mera_jhola)


// var arr = [0,1,4,5,6,[[[3,2]]]]
// var f = arr.flat(4)

// console.log(f)


// var arr = [1,2,3,4,5]
// arr.copyWithin(2,0,2)
// console.log(arr)


