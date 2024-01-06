// function return type
// function display(a,b){
//     var sum = a+b;
//     return {
//         d:90,
//         b:40,
//         c:[10,20,40],
//         s:sum
//     }
// }


// var f = display(10,20)
// console.log(f)
// console.log(f.s)




//function closure

// function disp(){
//     var x = 0;     // lexical enviornment
//     return function(){
//         return x=x+1
//     }
// }

// var f = disp()

// console.log(f())
// console.log(f())
// console.log(f())
  






// function foo(x){

//     function bar(y){
//         return x+y
//     }

//     return bar
// }


//  var d = foo(10)
//  var g = d(4)
//  console.log(g)


// var total = foo(10)(3)
// console.log(total)