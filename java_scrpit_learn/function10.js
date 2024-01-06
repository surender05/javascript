// var obj = {    // literals

// }

// obj.name = "Nk"
// console.log(obj)
// obj.name = "mukesh"
// console.log(obj.name)




// var obj  = {
//     firstName:"nk",
//     lastName:"karan",
//     fullName:function(){
//       return "hello"
//     }
// }

// console.log(obj.firstName);
// console.log(obj.lastName)
// console.log(obj.fullName())




// var obj  = {
//     firstName:"nk",
//     lastName:"karan",
//     fullName:function(x){
//       return x
//     }
// }

// console.log(obj.firstName);
// console.log(obj.lastName)
// console.log(obj.fullName(30))

// var firstName = "nk"
// var lastName = "karan"

// var fullName = function(){
//     return 20
// }

// var obj = {
//     firstName,
//     lastName,
//     fullName
// }

// console.log(obj.firstName)
// console.log(obj.lastName)
// console.log(obj.fullName())




// var obj = {
//     firstName,
//     lastName,
//     fullName(){
//         return 30
//     }
// }

// console.log(obj.fullName())








// var obj  = {
//     firstName:"nk",
//     lastName:"karan",
//     fullName:function(){
//       return "hello"
//     }
// }


// var f = obj.fullName;
// console.log(f);
// var g = f()

// console.log(g)  // hello




//this  =>  refrence to current object
// var obj  = {
//     firstName:"nk",
//     lastName:"karan",
//     fullName:function(){
//       return this.firstName + this.lastName
//     }

// }

// var f = obj.fullName()
// console.log(f)


// var a = 20

// var obj  = {
//     firstName:"nk",
//     lastName:"karan",
//     fullName:function(){
//       return this.a
//     }

// }

// var f = obj.fullName()
// console.log(f)

// var a = 5;
// function display(){
//     console.log(this.a)  // undefined
// }

// display()


// var obj = {
//     sum(x,y){
//         return x+y;
//     },
//     display(str){
//         return str
//     }
// }

// console.log(obj.sum(10,20))

// var a = 56
// function dd(){
//     console.log(this.a)
// }

// dd()


// console.log(window)

// var a =20;

// var obj  = {
//     firstName:"nk",
//     lastName:"karan",
//     fullName:()=>{
//       return this.a
//     }

// }

// var f = obj.fullName()

// console.log(f);



// var a = 6;  

// function ff(){  
//     console.log(this.a)  
// }

// ff()  





// var obj = {
//     a:10,
//     b:20,
//     c:function(){
//         return this.a + this.b
//     }
// }

// var f = obj.c.bind(obj)  // bind,call,apply [Function]  var f = new Function()

// var g = f()

// console.log(g)



// var obj  = {
//     firstName:"nk",
//     lastName:"karan",
//     fullName:()=>{
//       return obj.firstName + obj.lastName
//     }

// }

// var f = obj.fullName()
// console.log(f)