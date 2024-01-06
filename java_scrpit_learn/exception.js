
// console.log("Mujhe Bhi Jana Hai")
// try{
// dina_jonka()
// function display(){
//     console.log("Hello Hii")
// }
// }catch(error){
//    console.log("Error aa gaya ab mai kya karu dunia  ke rakhwale")
// }
// finally{
//     console.log("Mai Jinda Hoo")
// }

// console.log("Mujhe Bhi Le Chalo Waha")

// function ff(){
//     console.log("first")
// }

// function myDisp(){

//     try{
//         gg()
//     }
//     catch(err){
//         console.log("second")


//         return 20
//     }
//     finally{
//         console.log("third")
//     }

// }
// var f = myDisp()
// console.log(f)
// throw ,Error


function display(x){
    if(x>18){
        return 40
    }
    else{
        throw "Age Thick Se Pass Karo na Bhai"
    }
}


try{
    console.log(display(20))
}
catch(err){
    console.log(err)
}
