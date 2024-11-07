{
   // quistion
   // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed.Preserve the original order of elements.

   //    // Sample Input:
   //    removeDuplicates([1, 2, 2, 3, 4, 4, 5])

   // // Sample Output:
   // [1, 2, 3, 4, 5]
   type numArray = number[];

   function removeDuplicates(arr: numArray): numArray {
      return arr.filter((value, index)=> arr.indexOf(value) === index)
      
   }
   console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))
}
//ts-node-dev --respawn --transpile-only ./ass/src/problem8.ts