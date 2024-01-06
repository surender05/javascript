// function display(){
//     console.log(this)
// }

// var f = new display()  // display instance
// f.a = 90

// console.log(f.a)

// f.my = function(){
//     console.log("hello world")
// }

// f.my()

// var arr = new Array()


//var makkan_vs_dukkan_jayenge_samsaan = new String("hello")   // constructor calling

//var f = new Function()


// function MitJayenge(pakan){
//     this.d = pakan;    // current object
// }

// var s = new MitJayenge("Bullet Raja")
// console.log(s.d)  // bullet raja

// function Pen(){
//     this.color = "red"
// }

// var p1 = new Pen()
// p1.price = 0

// var p2 = new Pen()
// p2.price = 90



// p1 = p2
// console.log(p1)

// p1.price = 89;
// console.log(p2.price)



function ff(x){
    x.a = 67
}


function gg(){

}

var g = new gg()
g.a = 78;
ff(g)
console.log(g.a)



function Person(){
  
}


var p = new Person()


var p1= new Person()



Person.prototype.a = 90

console.log(p1.a)


Person.prototype.fun = function(){
    return 30
}


console.log(p1.fun())






var str = new String("hello")



String.prototype.kk = function(){
    return "hello"
}




var s = "welcome"

console.log(str.kk())

console.log(s.kk())














