{
   // type assertion mane holo develop[er ] jodi type theke nije type beshi buje tahole

   
   // const str : any ;
   // str = "hi this is me";
   
   // (str as string)
   const func = (value: number | string): number | string | undefined => {
      if (typeof value === 'string') {
         const converted = parseFloat(value) * 1000;
         return converted;
      } else if (typeof value === 'number') {
         return value * 100;
      } else {
         return 'hi';
      }
   }
   const result1 = func("1000") as string;
   const result2 = func(188) as number;
   console.log(result1);
   console.log(result2);

   type er = {
      message: string;
}

   try {
      
   } catch (error) {
      console.log((error as er).message);
   }
}