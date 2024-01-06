
// var a = ()=>{
//     console.log("first")
// }

// a()

// function a(){
//     console.log("second")
// }

// a()


/*
hello world  = >   world hello

*/

// function baanChalao(str){
//     let output = "",rev = ""
//     for(let i = str.length-1 ; i>=0 ;i--){
//         rev+=str[i]
//         if(str[i] === " " || i === 0){
//             for(let j=rev.length-1;j>=0;j--)
//                 output+=rev[j]
            
//             rev=""
//             output+=" "
//         }
//     }

//     return output
// }




// var str = baanChalao("hello world welcome Kuchha bhi marunga pitunga")
// console.log(str)


// var arr = [10,20,30,40,50,60]


// var f = arr.at(-2)
// console.log(f)

// var kamchalao = arr[-2];
// console.log(kamchalao)



// var arr = [10,20,56]

// var d = arr.push()

// console.log(arr)


// var arr = ["hello",true,function(){},()=>{},"diifew",{}]

// var arr = [10,20,30,23]
 //arr.pop()   // remove last element
// console.log(arr)


// var arr = ["apple","mango","banana","grapes"]
// var f = arr.shift()
// console.log(f)
// console.log(arr)


// var arr  = [20,30,40,56,78];

// var f = Array.isArray(arr);  // static 
// console.log(f);


// var arr = [10,20,30,56,45]
// var f = arr.includes(78)
// console.log(f)


// var arr = [10,20,45,12,45]

// var f = arr.indexOf(45,3)
// console.log(f)


// var arr = [10,20,56,12,45,13,5]


// var f = arr.copyWithin(2,3,5)
// console.log(f)

// var arr = ["manogo","apple","kumar","next","rahu","ketu","sani"]
// arr.sort()

// console.log(arr)


// var arr = [1,2,5,3]
// arr.sort()
// console.log(arr)


var arr = [10,20,45,12,34]
var f = arr.entries()
// console.log(f.next().value)

for(let [x,y] of f){
    console.log(x,y) 
}












