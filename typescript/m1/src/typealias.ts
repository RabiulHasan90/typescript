{ //type alias
// type is keytword
type Student = {
   name?: string;
   gender?: string;
   constact?: number;
   home?: string;
   gp?: number;
};


const student1 : Student = {
   name: "hasan",
   gender: "male",
   gp: 43,

   }
   const student2 : Student = {
      name: "hasan",
      gender: "male",
      gp: 43,

   }


   type Val = string;
   const val: Val = "hamid";

   type Add = (num1: number, num2: number) => number;


   const add : Add = (num1, num2) => num1 + num2;

}