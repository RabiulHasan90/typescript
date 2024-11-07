
   //polymorphism --> sthan kal vedhe different different answer dibe

   class Person {
      persa() {
         console.log("this is firs")
      }
   }
   class Person1 extends Person{
      persa() {
         console.log("this is 2")
      }
   }
   class Person2 extends Person{
      persa(){
            console.log("3ird is okh")
         }
}
const getper = (param: Person) => {
   param.persa();
      }
const s1 = new Person1()

getper(s1)


