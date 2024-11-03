{
   const nullable =(value: string | null) => {
      if (value) {
       console.log("searchn")
      } else {
         console.log("not searching")
      }
      
 }
nullable(null)

   //ts - node - dev--respawn--transpile - only server.ts


   //``````ùnknown
   const findMath = (num: unknown) => {
      if (typeof num === 'number') {
         return num * num;
      } else if(typeof num === 'string') {
         const [result, unit] = num.split(" ");
         const convertspeed = (parseFloat(result) * 100) / 3600
         return convertspeed;

       } else {
         return "this is wrong type";
      }
   }
   const mn = findMath(`1000 5^s`)
   console.log(mn);
   //never [kono type return na korle never bebohar korte hobe]
   

   const throwError = (msg: string): never => {
      throw new Error(msg);
      
   }
   throwError("no one")

}