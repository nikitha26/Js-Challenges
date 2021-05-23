// var temp;

// var a = 4;
// var b= 5;

// temp = a;

// a = b;
// b = temp;

// console.log("a value after swap "+a)
// console.log("b value after swap "+b)

//No third variable
// var a = 3;
// var b = 5;
// [a,b] = [b,a]
// // console.log("after:"+ a ,b)
// console.log(a)
// console.log(b)



// Using arithmatic operator
// var x = 1;
// var y = 10;

// var x = x+y;
// var y = x-y;
// var x = x-y;

// console.log(x);
// console.log(y)

// Using substraction operator
 
// var a = 20;
// var b = 50;

// var a = a-b;  // -30
// var b = a+b;   // 20
// var a = b-a;
//  console.log(a)
// console.log(b)

var x = [1,3,4,6,7,8]
for(i=0;i<x.length-1;i++){
     if(x[i]+1 == x[i+1]){
        continue;
     }
     else{
        console.log(x[i]+1)
     }
    
}