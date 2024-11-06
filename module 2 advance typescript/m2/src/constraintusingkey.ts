{
   
   type k = {
      name: string;
      phone: number;
      gmail: string;
   }

   type manually = "cars" | "bus" | "bike";

   type k2 = keyof k;
   

   const func =<x, y extends keyof x> (obj: x, key: y) => {
      return obj[key];
   }
   const user = {
      name: "asab",
      gmail: "dafsa",
   }
   const re = func(user, "name")

 }