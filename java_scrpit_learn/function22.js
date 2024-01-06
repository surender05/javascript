// var obj = {}
// var obj = new Object()

// var obj = {a:10,b:20,c:30}
// var f = Object.create(obj)
// // f.a = 89
// // console.log(f.a)
// // console.log(obj.a)
// // console.log(obj == f)
// // console.log(f)
// f.dd = "hello"
// console.log(f.c)
// console.log(obj.dd)





// var obj = {a:10,b:20}
// var f = Object.assign(obj)
// f.j =90
// console.log(obj)

// console.log(obj == f)


// var obj = {a:10,b:20}
// Object.seal(obj)
// obj.g =78
// console.log(obj.g)


// var obj = {sara:"a",kara:"b",chara:"d",lara:"e"}
// Object.keys(obj).forEach(e=>{
//     console.log(e)
// })


// var obj = {sara:"a",kara:"b",chara:"d",lara:"e"}
// Object.values(obj).forEach(e=>{
//     console.log(e)
// })


// var obj = {a:10,b:20}
// Object.freeze(obj)
// delete obj.a
// console.log(obj.a)


// var obj = {a:10,b:20}
// Object.freeze(obj)
// var f = Object.create(obj)
// f.h = 23
// console.log(f.a)


// var obj = {a:10}
// Object.seal(obj)
// delete obj.a
// console.log(obj)


// var obj = {a:10,b:20}
// console.log('u' in obj)


// var obj = {
//     a:10,
//     b:20,
//     c:30
// }

// var jana_na_jana = Object.entries(obj)
// console.log(jana_na_jana)
// for(const [a,b] of jana_na_jana){
//     console.log(b)
// }

// var g = Object.fromEntries(jana_na_jana)
// console.log(g)

// var m = new Map([ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ] ])
// var gika_virus = Object.fromEntries(m)
// console.log(gika_virus)

// var s = new Set([10,20,40,56,79,79]) // only unique element
// for(let f of s){
//     console.log(f)
// }

var ajay_gan_man_dhan = {
    a:10,b:20
}
var f = ajay_gan_man_dhan.hasOwnProperty('a')
console.log(f)








