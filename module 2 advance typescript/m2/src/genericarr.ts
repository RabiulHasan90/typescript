{
   
   type genericArray<t> = Array<t>;
  // const num: number[] = [1, 2, 3];
   const num: Array<number> = [1, 2, 3];
   const nums: genericArray<number> = [1, 2, 3];                                                    



  // const str: string[] = ['am', 'jam', 'katal'];
   const str: Array<string> = ['am', 'jam', 'katal'];
  



   //const bool: boolean[] = [true, false, true];
   const bool: Array<boolean> = [true, false, true];

   const arr: genericArray<{ name?: string; cg?: number;  roll?: number}> = [
      {
         name: "hasan",
         cg: 21,
         
      },
      {
         name: "hasan",
         cg: 21,
      },
      {
          roll: 34,
      }
   ]


   type genericTuple<x, y> = [x, y]
   const mansh: genericTuple<number, string> = [323, "some"];   
}