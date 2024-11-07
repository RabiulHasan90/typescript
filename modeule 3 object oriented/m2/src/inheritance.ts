{
   // boisisto pawa for example bongso poromporay boisisto pawa

   class Person {
      name: string;
      age: number;
      course: string;
      constructor(name: string, age: number, course: string) {
         this.name = name;
         this.age = age;
         this.course = course;
      }
      onpt() {
         
      }
   }
    class Student extends Person {
      
      constructor(name: string, age: number, course: string) {
         super(name, age, course);
      }
       slepTime(slepTime: number) {
         console.log(`${this.name} slep time ${slepTime}`)

      }


   }
   const student = new Student("haha", 5435, "fadsf");


   class Teacher extends Person {
      desinagtion: string;

      constructor(name: string, age: number, course: string, desinagtion: string) {
         super(name, age, course);
         this.desinagtion = desinagtion;
      }
      slepTime(slepTime: number) {
         console.log(`${this.name} slep time ${slepTime}`)

      }


   }
   const teacher = new Student("haha", 5435, "fadsf");

   

}