{
// Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys.The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

//    // Sample Input:
//    const person = { name: "Alice", age: 25, email: "alice@example.com" };
//    console.log(validateKeys(person, ["name", "age"]));

//    // Sample Output:
   //    true;
   
   function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
     // return keys.every(key => key in obj);
      return keys.every(k => k in obj);
   }
   const person = { name: "Alice", age: 25, email: "alice@example.com" };
   console.log(validateKeys(person, ["name", "age"]));


}


//ts-node-dev --respawn --transpile-only ./ass/src/problem8.ts