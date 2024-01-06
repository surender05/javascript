/*pop,push,isArray,shift,unshift,at,indexOf,includes,sort,entries,copyWithIn  */

/*
forEach
map
filter
every
findIndex
find
reduce
reduceRight
fill

*/

// foeEach

// var arr = [10,20,30,40,50,12]  // 



// var f = arr.forEach((value,position,array)=>{
//     console.log(`${value} ${position} ${array}`) 
// })

// console.log(f)


// var arr = [
//     {name:"mukesh",num:3},
//     {name:"Pinkesh",num:2},
//     {name:"Jono",num:12},
//     {name:"Pono",num:23},
//     {name:"Khono",num:25}
// ]
// var f = arr.map(function(x,y,z){
//     if(y <=2)
//         x.age = x.num + 20
//     return x
// })
// console.log(f);


// var arr = [10,20,30,40,56]
// var f = arr.filter((x,y,z)=>{
//     return x > 30
// })

// console.log(f)



var arr = ["Banana","Apple","App","Kela","Akela","Khao Kela","Marunga Akela","Jaunga Akela","Kela Zebra"]
var str = "k"

var f = arr.filter((value)=>{
    return value.toLowerCase().includes(str.toLowerCase())
})

console.log(f)



