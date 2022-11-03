
// //1. The user enters 1 number (A). 
// //Print all numbers from 1 to 1000 that are divisible by A.
// let A=prompt("Enter num: ");
// for (let i = 0; i < 1000; i++) {
//    if (i%A==0) {
//        console.log(i);
//    }
    
// }



// // 2. The user enters 1 number (A). Find the number of positive 
// //integers whose square is less than A (n^2 < A).

// let A=prompt("Enter num: ");
// for (let i = 0; i < A; i++) {
//    if (i*i<A) {
//        console.log(i);
//    }
    
// }
// // 3. The user enters 1 number (A). 
// //Print the largest divisor (other than A itself) of the number A.
// let A=prompt("Enter num: ");
// if (A%2==0) {
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



// // 4. The user enters 2 numbers (A and B).
// // Print the sum of all numbers from the range A to B that are divisible
// // by 7 without a remainder. (Note that B may be less than A if you type).
// let B=prompt("Enter B: ");
// let A=prompt("Enter A: ");
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

 
// 5. The user enters 1 positive number (N). Print the Nth number of the fibonacci series. 
//In the fibonacci series, each next number is the sum of the previous two. The first and second are considered equal to 1.
 
// let num = prompt("Please enter num");
// console.log(GetNthFibNum(num));
// function GetNthFibNum(num) {
//  if (num<=1) {
//     return num;
//  }
//  return GetNthFibNum(num-1)+GetNthFibNum(num-2);
// }
 
// 6. The user enters 2 numbers. Find their greatest common divisor using Euclid's algorithm. 
//(yes, you've got to google this algorithm at first :D ).
 
//  let num1 = prompt("Please enter num");
//  let num2 = prompt("Please enter num");
//  let rem=0;
// while (num1%num2>0) {
    
//     rem=num1%num2;
//     num1=num2;
//     num2=rem;
    
// }
// if (num1%num2==0) {
//     console.log(num2);
// }
 
// 7. The user enters 1 number.
// Find a number that is a mirror image of the sequence of digits of a given number.
// for example, given the number 123, output is 321 in this case.
 
// let num = prompt("Please enter num");
// let reverse=0;
// let rem=0;
 
// while (num>0) {
//     rem=num%10;
//     reverse=reverse*10+rem;
//     num=parseInt(num/10);
    
// }
// console.log(reverse);
 
// 8. The user enters 2 numbers. Find out if these two numbers have the same digits.
// For example, for a pair of 123 and 3456789, the answer would be "YES", and for a pair of 500 and 99, "NO".
// let num1 = prompt("Please enter num");
// let num2 = prompt("Please enter num");
 
// let count=0;
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
