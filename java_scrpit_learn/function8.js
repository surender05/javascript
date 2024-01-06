// function closure

// function outer(){  // outer function
//     var x = 2;      // lexcial environment
//     function inner(){   // inner function
//         var y =3;
//     }
// }


// var x = function(){
//     console.log("hello")
// }


// var out = (function(){
//             var x = 1
//             return function(){
//                 return x=x+1
//             }
//     })()


// var x = out()
// var y = out()
// var z = out()
// console.log(x,y,z)



// Arrow function


// 1
function disp(){
    console.log("hello")
}

// 2
// const fun = function disp(){

// }

// 3

const f = function(){

}


// 4

// const d = ()=>{
// console.log("hello")
// }

// d()



// const  d = ()=>{

// }


// const gt = (a,b)=>{
//     return a+b
// }

// console.log(gt(10,20))


// const  gt = (a,b)=>a+b



// console.log(gt(10,20))



//recursion   


// function disp(a){
//         if(a==3){
//             return a
//         }
//         console.log("hello")
// }

// var a = disp(1);  // hello
// var b = disp(2)   // hello
// var c = disp(3)
// console.log(a,b,c)



// function sum(a,b){
//     kk(10,20)
//     return a+b
// }


// function kk(a,b){
//    var d =  sum(a,b)
//    console.log(d)
// }


// sum(10,20)



// function dd(a){
//     console.log("hello")

//     if(a == 1){
//         return
//     }




//     dd(a-1)
// }

// dd(10)

// 1 copy , 1 pen , 2 copy , 2 pen , 3copy , 3pen , 4 copy
var x= fun()
function fun(){
    var i = 1;
    while(i){
        console.log(i+ 'copy')      
        if(i==4){
            return;
        }
        console.log(i+ 'pen')
        i++
    }
    console.log("hello world")
}
















