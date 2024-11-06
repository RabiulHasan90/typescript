{

   const addCorses = <T extends { id: number; gmail: string;  roll: number}>(student: T) => {
      const corse = "next level ";
      return {
         corse,
         ...student
      }
      
   }
   const add = addCorses<{
      id: number;
      gmail: string;
      roll: number;
   }>({id: 21, gmail:"@gmail", roll: 2123})





}