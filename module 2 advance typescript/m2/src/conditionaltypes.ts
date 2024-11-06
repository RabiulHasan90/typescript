{
   type a1 = null;
   type m1 = a1 extends null ? true : false;

   type m2 = a1 extends undefined ? undefined : m2 extends undefined ? true : false;
   type sheikh ={
      car: string;
      bike: string;
      micro: string;
   }
   
   type cecMValue<T> = T extends keyof Sheikh ? true : false;
   type printed = cecMValue<"car">;



}