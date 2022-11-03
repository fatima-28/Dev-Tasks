//First and second tasks with functions:

//1. User gives 2 numbers (A and B). Print to the console the result of dividing A by B and the remainder of the division.
 

// let A=prompt("enter first number:","first num");
// let B=prompt("enter second number:","second num");
// function GetReminder(num1, num2) {
//     let rem=num1%num2;
//  console.log(`reminder= ${rem}`);
// }
// function GetResult(num1, num2) {
// let result =parseInt(num1/num2);
// console.log(`result= ${result}`);
// }

// GetReminder(A,B);
// GetResult(A,B);


 
//2. The user enters 2 values (A and B).
//Swap the contents of variables A and B 
//(that means the value of variable B must be assigned to variable A, and vice versa).
 
// let num1=prompt("enter first number:","first num");
// let num2=prompt("enter first number:","second num");
// Swap(num1,num2);
// function Swap(C,D) {
// let sum=(parseInt(C)+parseInt(D));

// C=D;
// D=sum-C;
// console.log(C,D);
// }



 
//3. The user enters 3 non-zero numbers (A, B and C). Print to the console the solution (the value of X) of the standard linear equation,
// where A*X+B=C.
 
// let A=prompt("enter first number:","Enter A");
// let B=prompt("enter first number:","Enter B");
// let C=prompt("enter first number:","Enter C");
// Calculate(A,B,C);
//  function Calculate(num1,num2,num3) {
//      let X=(num3-num2)/num1;
 
// console.log("(C-B)/A="+X);

//  }




 
//4. User gives 2 numbers (A and B). 
//If A>B then print to the console the result of A+B, if A=B then the result of A*B, if A<B then A-B.
 
// let num1=prompt("enter first number:","Enter A");
// let num2=prompt("enter first number:","Enter B");
// CheckNums(num1,num2);
// function CheckNums(A,B) {
//     if (A>B) {
//     console.log(parseInt(A)+parseInt(B));
// }
// else if (A===B) {
//     console.log(A*B);
// }
// else{
//     console.log(A-B);
// }
// }
 



//5. User gives 3 numbers (a, b, c). Find out and print to the console the solution of quadratic equation ax^2+bx+c=0.
 
// // let num1=prompt("enter first number:");
// // let num2=prompt("enter second number:");
// // let num3=prompt("enter third number:"); 
// // CalcQuadraticEquation(num1,num2,num3);
// // function CalcQuadraticEquation(A,B,C) {
// //   let X1=0;
// // let X2=0;
// // let D=B*B-4*A*C;
// // if (D<0) {
// //     console.log("root is not real");
// // }
// // else if (D===0) {
     
// //     X1=X2=-B/2*A;
// //     console.log(D);
   
// // }
// // else{
// //     X1=parseInt((-B+Math.sqrt(D))/2*A);
// //     X2=parseInt((-B-Math.sqrt(D))/2*A);
// //     console.log(X1,X2);
// //      console.log(D);
// // }
 
// // }




// //6. The user enters a two-digit number. Print the literal representation of this number to the console.
// // For example, typing "25" will display "twenty five" in the console, and "13" will display "thirteen".
 

// let number=prompt("enter  number:");
// let lastNum=number%10;
// let firstNum=parseInt(number/10);
// PrintNumsWithString(number);
// function PrintNumsWithString(num) {
//     let firstNumWithLetters="";
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
// }





// //7. User gives 3 numbers (x, y, r). Find out if point with location (x,y) is inside a circle with radius r? 
// //(the center of the circle is at the origin)
// //Pythagorean theorem

//  let a=prompt("enter A:");
//   let b=prompt("enter B:");
//    let rad=prompt("enter Radius:");
// IsInCircle(a,b,rad);
// function IsInCircle(x,y,r) {
//        let d=Math.sqrt((x*x)+(y*y));
//    if (d<r) {
//        console.log("inside the circle");
//    }
//    else if (d===r) {
//        console.log("on the circle");
//    }
//    else{
//        console.log("outside the circle");
//    }

// }






// // //1. The user enters 1 number (A). 
// // //Print all numbers from 1 to 1000 that are divisible by A.
// let num=prompt("Enter num: ");
// NumsCanDivideA(num);
// function NumsCanDivideA(A) {
    

// for (let i = 0; i < 1000; i++) {
//    if (i%A==0) {
//        console.log(i);
//    }
    
// }
// }



// // // 2. The user enters 1 number (A). Find the number of positive 
// // //integers whose square is less than A (n^2 < A).

//  let num=prompt("Enter num: ");
// FindNum(num);
// function FindNum(A) {
// for (let i = 0; i < A; i++) {
//    if (i*i<A) {
//        console.log(i);
//    }
// }
// }








// // // 3. The user enters 1 number (A). 
// // //Print the largest divisor (other than A itself) of the number A.

// let num=prompt("Enter num: ");
// FindLargestDivisor(num);
// function FindLargestDivisor(A) {
//     if (A%2==0) {
//     console.log(A/2);
// }
// else{
//     let max=0;
// for (let i = 1; i <A; i++) {
//  if (A%i==0&&i>max) {
//      max=i;
//  } 
// }
//   console.log(max);
// }
// }








// // // 4. The user enters 2 numbers (A and B).
// // // Print the sum of all numbers from the range A to B that are divisible
// // // by 7 without a remainder. (Note that B may be less than A if you type).
// let num1=prompt("Enter B: ");
// let num2=prompt("Enter A: ");
// FindSum(num1,num2)
// function FindSum(A,B) {
// if (B<A) {
//   let sum=0;
//   for (let i = B; i < A; i++) {
//    if (i%7==0) {
//        sum=sum+i;
//    }

//   }
// console.log(sum);
// }
// else{
//     console.log("B must be less than A");
// }
    
// }

 





// // 5. The user enters 1 positive number (N). Print the Nth number of the fibonacci series. 
// //In the fibonacci series, each next number is the sum of the previous two. The first and second are considered equal to 1.
 
// let num = prompt("Please enter num");
// console.log(GetNthFibNum(num));
// function GetNthFibNum(num) {
//  if (num<=1) {
//     return num;
//  }
//  return GetNthFibNum(num-1)+GetNthFibNum(num-2);
// }







 
// // 6. The user enters 2 numbers. Find their greatest common divisor using Euclid's algorithm. 
// //(yes, you've got to google this algorithm at first :D ).
 
//  let numFirst = prompt("Please enter num");
//  let numSecond = prompt("Please enter num");
//  Euclid(numFirst,numSecond);
// function Euclid(num1,num2) {
//      let rem=0;
// while (num1%num2>0) {
    
//     rem=num1%num2;
//     num1=num2;
//     num2=rem;
    
// }
// if (num1%num2==0) {
//     console.log(num2);
// }
// }




 
// // 7. The user enters 1 number.
// // Find a number that is a mirror image of the sequence of digits of a given number.
// // for example, given the number 123, output is 321 in this case.
 
// let num1= prompt("Please enter num");
// FindMirrorImg(num1);
// function FindMirrorImg(num) {
//     let reverse=0;
// let rem=0;
 
// while (num>0) {
//     rem=num%10;
//     reverse=reverse*10+rem;
//     num=parseInt(num/10);
    
// }
// console.log(reverse);
 
// }





// // 8. The user enters 2 numbers. Find out if these two numbers have the same digits.
// // For example, for a pair of 123 and 3456789, the answer would be "YES", and for a pair of 500 and 99, "NO".
// let numFrst = prompt("Please enter num");
// let numScnd= prompt("Please enter num");
// FindSameDigitsNums(numFrst,numScnd);
//  function FindSameDigitsNums(num1,num2) {
//      let count=0;
// for (let i = num2; i > 0; i--) {
//  if (num1%i==0&&num2%i==0) {
//     count++;
//  }
    
// }
// if (count>1) {
//     console.log("Yes");
// }
// else{
//       console.log("No");
 
// }
//  }





