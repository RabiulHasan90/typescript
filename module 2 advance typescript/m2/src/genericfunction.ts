{

   const genericFunc = <t>( num2: t): [t] => {
      
      return [ num2];
   
   }
   const res1 = genericFunc<number>(4);
   console.log(res1)
   const genericFuncs = <t, q>(num2: t, num1: q): [t, q] => {

      return [num2, num1];

   }
   const res2 = genericFuncs<number, string>(4, 'acha');
   console.log(res2)


   const addCorses = <T>(student: T) => {
      const corse = "next level ";
      return {
         corse,
         ...student
      }
      const add = addCorses({name:"hasan" , roll: 32})
   }



}