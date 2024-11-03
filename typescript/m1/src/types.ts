{

   //union types
   type frontedDeveloper = "chur" | "juniordev";
   type backendev = "juniordev" | "full dev"
   type fullstackdev = frontedDeveloper & backendev;

   type jnior = {
      skills: string[];
      prof: "fronted"
   }
   type senior = {
      skills: string[];
      prof1: "backend"
   }
   type full = jnior & senior;
   const stack: full = {
      skills: ["java", "csss"],
      prof: "fronted",
      prof1: "backend"
   }


}