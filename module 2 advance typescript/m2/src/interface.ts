{

   type iner = {
      name: string;
      number: number;
      
   }
   const obj: iner = {
      name: 'hri',
      number: 78786,
   }
   interface iners extends iner {
      home: string;
   }


   const obj2: iners = {
      name: 'hri',
      number: 78786,
      home: 'fsf'
   }
   type funcs = (num1: number, num2: number) => number; 
   
   const func: funcs = (num1, num2) => num1 * num2; 
   type rool1 = number[];
   interface roll2  {
      [index: number]: number;
   }
   const numbers: roll2= [1, 2, 3]
   console.log(numbers)







}