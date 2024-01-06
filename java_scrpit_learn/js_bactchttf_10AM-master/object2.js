// // var obj = {
// //     name:"mukesh"
// // }

// // var f = obj.name

// // var obj = {
// //     a:10,b:20,c:30
// // }

// // obj.x  = 30;
// // console.log(obj)

// // obj['a']  = 30;
// // console.log(obj)


// // // delete

// // delete obj.b;
// // console.log(obj)



// // var obj = {
// //     name:"Mukesh",
// //     address:{
// //         house_no:122
// //     }
// // }

// // delete obj.address.house_no

// // console.log(obj)




// var obj = {a:20,b:10}  // mutable
// const x = obj
// x.b = 3;
// x.a = 1;
// console.log(obj);  // ?  {a:1,b:3}
// const y = x
// y.a = 78
// console.log(obj);  // ? {a:78,b:3}

// var a = 6;
// var b = a;
// b= 78;
// console.log(a);



// // var arr = [  {name:"Dinesh",pincode:{my:[10,30,45,{a:90}]}}  ]

// // var g = arr[0].pincode.my[3].a


// var arr = [10,20,30,40,56,12]   // 

// // for(let i = 0;i<arr.length;i++)
// // {
// //     console.log(arr[i]);
// // }

// // for-of  

// var arr = [10,20,30,40]

// for(let x of arr)
// {
//     console.log(x);
// }




// var arr = [
//     {name:"Jhunjhunwala"},
//     {name:"warsi"},
//     {name:"krisnamurthy"},
//     {name:"prabhas"},
//     {name:"allu arjun"},
//     {name:"ravi teja"}
// ]

// for(const x of arr){
//     console.log(x.name)
// }






// // var refrelChain = {
// //     data: [
// //         {
// //             name:"mukesh",ref:{
// //                 name:"rahul",ref:{
// //                     name:"john",ref:{
// //                         name:"i"
// //                     }
// //                 }
// //             }
// //         },
// //         {
// //             name:"ankit",ref:{

// //             }
// //         }
// //     ]
// // }




// var arr = [10,20,30]
// var obj2 = {c:78,d:23}

// var obj = {a:3,...arr}

// var arr3 = [2,...obj2]

//console.log(arr3)


// object destructuring



const {b,a} = {a:10,b:[20,44,12],c:90,d:56}
console.log(b);








