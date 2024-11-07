{
   // type GOURD using type of
   type sm = number | string;

   const addFunc = (mum1: sm, num2: sm): sm => {
     
      if (typeof mum1 === 'number' && typeof num2 === 'number') {
         return mum1 + num2;
      } else {
         return mum1.toString() + num2.toString();
  }
   }
   const r = addFunc(4, 5);


   type normalUser = {
      name: string;
   }
   type adminuser = {
      name: string;
      role: 'admin';
   }
   const ceckFunc = (user: normalUser | adminuser) => {
      if ('role' in user) {
         console.log(`${user.name} and ${user.role}`)
      } else {
         console.log(`${user.name} `)
      }
      
   }
   const admin : adminuser = {
      name: "hasan",
      role: 'admin'
   }
   ceckFunc(admin);



}