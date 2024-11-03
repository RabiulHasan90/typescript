{

 const age: number = 18
   if (age >= 18) {
      console.log("this is ager");
   } else {
      console.log("no ager ")
  }

   // knullist 
   type ts = {
      name: string;
      address: {
         thana: string;
         zilla?: string; 
      }
      mobile: number;
   }
   const add : ts = {
      name: "hridoy",
      address: {
         thana: "matlab"
      },
      mobile: 5636
   }
   const isAuth = null;
   const result = isAuth ?? "huaifjoij"
   const result2 = isAuth ? isAuth : "guest"
   console.log("this is nullist: ", {result}, {result2})

}