// var counter = (function(){
//     let myCounter = 0;
//     function changeBy(val){
//         myCounter+=val
//     }
//     return {
//         increment:function(){
//             changeBy(1)
//         },
//         decrement:function(){
//             changeBy(-1)
//         },
//         value:function(){
//             return myCounter
//         }
//     }
// })()

// console.log(counter.value())  // 0
// counter.increment()
// counter.increment()
// console.log(counter.value())   // 2
// counter.decrement()
// console.log(counter.value())  // 1
// //counter.changeBy(2)
// console.log(counter.value())  // 1






// function A(x){
//     function B(y){
//         function C(z){
//             console.log(x+y+z)
//         }
//         C(3)
//     }
//     B(2)
// }
// A(1)




// function xyz(z){
//     return {
//         dd(){
//             return z+5
//         },
//         kk(){
//             return z*5
//         }
//     }
// }


// // const {dd , kk} =  xyz(10)

// // console.log(dd())

// const f = xyz(10)
// f.dd()



// GENERATOR FUNCTION


// Interable Object




// function* display(){
//     yield "hello"
//     yield "world"
//     yield "kumar"
// }

// var f = display()

// console.log(f.next().value)
// console.log(f.next().value)
// console.log(f.next().value)
// console.log(f.next().value)



// function* generator(i){
//     yield i;
//     yield i+10
// }

// const gen = generator(20)  // GeneratorObject
// console.log(gen.next().value)
// console.log(gen.next().value)




// function* generator(i){
//     yield i;
//   //  yield i+10
//    // return i
// }


// for(const val of generator(10)){
//     console.log(val)
// }



// const abc =  ()=>{
//     yield 2
// }

// console.log(abc.next().value)


function* dd(){
    yield* [10,20,30,40]
}



for(const d of dd()){
console.log(d)
}







