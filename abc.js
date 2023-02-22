

// I am danti

/*
if(a==6){
    console.log("I am danti")
}
*/

/*
if(a==6){
    console.log("I am danti")
}
else{
    console.log("I am danti..");
}
*/
/*
let a = 6;
if(a==6 ){
    console.log("I am danti.")
}
else if(a==7){
    console.log("I am danti..");
}
else if(a==8){
     console.log("I am danti...");
}
else{
    console.log("I am danti....");
}
*/

// let a=5
// if (a>4) {
//     let p=4
//    while (p>=0) {
//     console.log('i am danti')
//     p--
//    }
// }


let aa=10000000
let res=[]
while(aa>0){
    console.log(aa%10)
    res.push(aa%10)
    aa=Math.floor(aa/10)
}

console.log(res)