{


   // quistion
   // Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

   //    // Sample Input:
   //    sumArray([1, 2, 3, 4, 5]);

   // // Sample Output:
   // 15;



   type numArray = number[];
   const sumArray = (numbers: numArray): number => {
      return  numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      
   }

  console.log(sumArray([1, 2, 3, 4, 5]))

}