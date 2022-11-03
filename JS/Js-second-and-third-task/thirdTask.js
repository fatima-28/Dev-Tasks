//Let's say you have an array of arbitrary size filled with random numbers (one array per task). You need to:
// // 1. Find the minimum element of this array
 
// let nums = [134,4,6,7,8785,12,4560];
// let minElement=nums[0];
// for (let i = 0; i < nums.length; i++) {
    
//     if (nums[i]<minElement) {
//         minElement=nums[i];
//     }
// }
// console.log(minElement);
 
// // 2. Find the maximum element of this array
 
// let nums = [134,4,6,7,8785,12,4560];
// let maxElement=nums[0];
// for (let i = 0; i < nums.length; i++) {
    
//     if (nums[i]>maxElement) {
//         maxElement=nums[i];
//     }
// }
// console.log(maxElement);
 
// //3. Find the index of the minimum element of this array
// let nums = [13,10,2,0,40,5,16];
// let minElement=nums[0];
// let minIndex=0;
// for (let i = 0; i < nums.length; i++) {
    
//     if (nums[i]<minElement) {
//         minElement=nums[i];
//        minIndex=i;
//     }
// }
// console.log(minIndex);
 
//// 4. Find the index of the maximum element of this array
 
// let nums = [13,1010,2,0,40,5,16];
// let maxElement=nums[0];
// let maxIndex=0;
// for (let i = 0; i < nums.length; i++) {
    
//     if (nums[i]>maxElement) {
//         maxElement=nums[i];
//        maxIndex=i;
//     }
// }
// console.log(maxIndex);
 
// // 5. Calculate the sum of array's elements with odd indices
// let nums = [13,7,2,0,40,5,16,1,3,8];
// let sum=0;
// for (let i = 0; i < nums.length; i++) {
//    if (nums[i]%2!=0) {
//     sum=sum+nums[i];
//    }
    
// }
// console.log(sum);



 
// // 7. Count the number of odd elements in the array
// let nums = [13,7,2,0,40,5,16,1,3,8];
// let cnt=0;
// for (let i = 0; i < nums.length; i++) {
//    if (nums[i]%2!=0) {
//    cnt++
//    }
    
// }
// console.log(cnt);

 
// // 9. Sort the array in ascending order in one of the following ways: bubble sort, selection sort or insertion sort.
 
// let arr = [13,7,2,0,40,5,16,1,3,8];
// let temp=0;
// for (let i = 0; i <= arr.length-2; i++) {
//   for (let j = 0; j <= arr.length-2; j++) {
//    if (arr[j] > arr[j + 1]) {
//                   temp= arr[j + 1];
//                   arr[j + 1] = arr[j];
//                   arr[j] = temp;
//                }
//   }
    
// }
 
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
    
// }


 




//// 10. Sort the array in descending order in one of the ways 
//(different from the method taken in the 9th task): bubble sort, selection sort or insertion sort.
// let numbers=[5,9,10,2,3];
// Sort(numbers);
// function Sort(nums) {
//     for (let i = 0; i < nums.length; i++) {
//      let temperory=nums[i];
//     let minElement=nums[i];
//     let index=i;
//     for (let j = i; j < nums.length; j++) {
//         if(nums[j]<minElement){
//             minElement=nums[j];
//             index=j;
//         }
//     }
//     nums[i]=minElement;
//     nums[index]=temperory;
//  }
//  console.log(nums);
// }


//////// 6. Reverse this array (array in reverse direction) -
// you have to create YOUR OWN function, which WILL NOT create any new array


// // // 8. Swap the first and second half of the array, for example, 
// // // for an array of 1234, the result is 3412, or for 12345 the result will be 45312.
