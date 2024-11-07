{
   // Write a TypeScript function countWordOccurrences that takes a sentence(string) and a word(string).It should return the number of times the word appears in the sentence, case -insensitively.

   //    // Sample Input:
   //    countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");

   // // Sample Output:
   // 2;
   type ifMatch = string;

   function countWordOccurrences(sentence: ifMatch, word: ifMatch): number {
     
         const regex = new RegExp(`\\b${word}\\b`, 'gi');
         const matches = sentence.match(regex);
         return matches ? matches.length : 0;
      
         
            
   }


   console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")); 
   


  
}