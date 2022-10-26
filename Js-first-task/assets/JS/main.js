//1. User gives 2 numbers (A and B). Print to the console the result of dividing A by B and the remainder of the division.
 
// let A=prompt("enter first number:","first num");
// let B=prompt("enter first number:","second num");
// let result=A/B;
// let reminder=A%B;
// console.log(parseInt(result),parseInt(reminder));


 
//2. The user enters 2 values (A and B). Swap the contents of variables A and B (that means the value of variable B must be assigned to variable A, and vice versa).
 
// let C=prompt("enter first number:","first num");
// let D=prompt("enter first number:","second num");
// let sum=(parseInt(C)+parseInt(D));
// console.log(sum);
// C=D;
// D=sum-C;
// console.log(C,D);


 
//3. The user enters 3 non-zero numbers (A, B and C). Print to the console the solution (the value of X) of the standard linear equation,
// where A*X+B=C.
 
// let A=prompt("enter first number:","Enter A");
// let B=prompt("enter first number:","Enter B");
// let C=prompt("enter first number:","Enter C");
 
// let X=(C-B)/A;
 
// console.log("(C-B)/A="+X);
 
//4. User gives 2 numbers (A and B). If A>B then print to the console the result of A+B, if A=B then the result of A*B, if A<B then A-B.
 
// let A=prompt("enter first number:","Enter A");
// let B=prompt("enter first number:","Enter B");
// if (A>B) {
//     console.log(parseInt(A)+parseInt(B));
// }
// else if (A===B) {
//     console.log(A*B);
// }
// else{
//     console.log(A-B);
// }
 
//5. User gives 3 numbers (a, b, c). Find out and print to the console the solution of quadratic equation ax^2+bx+c=0.
 
// let A=prompt("enter first number:");
// let B=prompt("enter first number:");
// let C=prompt("enter first number:"); 
// let X1=0;
// let X2=0;
// let D=B*B-4*A*C;
// if (D<0) {
//     console.log("root is not real");
// }
// else if (D===0) {
     
//     X1=X2=-B/2*A;
//     console.log(D);
   
// }
// else{
//     X1=parseInt((-B+Math.sqrt(D))/2*A);
//     X2=parseInt((-B-Math.sqrt(D))/2*A);
//     console.log(X1,X2);
//      console.log(D);
// }
 
//6. The user enters a two-digit number. Print the literal representation of this number to the console.
// For example, typing "25" will display "twenty five" in the console, and "13" will display "thirteen".
 

// let num=prompt("enter  number:");
// let lastNum=num%10;

// let firstNum=parseInt(num/10);

// let firstNumWithLetters="";
// if (num<20) {
//    if (num==11) {
//     console.log("Eleven");
// }
// else if (num==12) {
//      console.log("Twelve");
// }
// else if (num==13) {
//      console.log("Thirteen");
// }
// else if (num==14) {
//      console.log("Fourteen");
// }
// else if (num==15) {
//      console.log("Fiveteen");
// }
// else if (num==16) {
//      console.log("SixTeen");
// }
// else if (num==17) {
//      console.log("Seventeen");
// }
// else if (num==18) {
//      console.log("Eighteen");
// }
// else   {
//      console.log("nineteen");
// }
// }
// else{
// switch (firstNum) {
//     case 2:
//         firstNumWithLetters="twenty";
//         break;
//           case 3:
//         firstNumWithLetters="thirty";
//         break;
//          case 4:
//         firstNumWithLetters="forty";
//         break;
//          case 5:
//         firstNumWithLetters="fivety";
//         break;
//          case 6:
//         firstNumWithLetters="sixty";
//         break;
//          case 7:
//         firstNumWithLetters="seventy";
//         break;
//          case 8:
//         firstNumWithLetters="eighty";
//         break;
//          case 9:
//         firstNumWithLetters="ninety";
//         break;


// }
// switch (lastNum) {
//        case 0:
//        console.log(firstNumWithLetters);
//         break;
//     case 1:
//        console.log(firstNumWithLetters+ " one");
//         break;

//    case 2:
//        console.log(firstNumWithLetters+ " two");
//         break;
//          case 3:
//        console.log(firstNumWithLetters+ " three");
//         break;
//          case 4:
//        console.log(firstNumWithLetters+ " four");
//         break;
//          case 5:
//        console.log(firstNumWithLetters+ " five");
//         break;
//          case 6:
//        console.log(firstNumWithLetters+ " six");
//         break;
//          case 7:
//        console.log(firstNumWithLetters+ " seven");
//         break;
//          case 8:
//        console.log(firstNumWithLetters+ " eight");
//         break;
//          case 9:
//        console.log(firstNumWithLetters+ " nine");
//         break;
// }
// }
//7. User gives 3 numbers (x, y, r). Find out if point with location (x,y) is inside a circle with radius r? 
//(the center of the circle is at the origin)

//Pythagorean theorem
//  let x=prompt("enter X:");
//   let y=prompt("enter Y:");
//    let r=prompt("enter Radius:");
//    let d=Math.sqrt((x*x)+(y*y));
//    if (d<r) {
//        console.log("inside the circle");
//    }
//    else if (d===r) {
//        console.log("on the circle");
//    }
//    else{
//        console.log("outside the circle");
//    }