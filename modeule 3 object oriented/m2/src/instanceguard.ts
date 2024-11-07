{


   class Animal {
      name: string;
      genu: string;
    
      constructor(name: string, genu: string) {
         this.name = name;
         this.genu = genu;
      }
      sound() {
         console.log("make sound");
      }


   }

   class Dog extends Animal {
      constructor(name: string, genu: string) {
         super(name, genu);
      }
      doging() {
         console.log('i am barking')
      }
   }

   class Cat extends Animal {
      constructor(name: string, genu: string) {
         super(name, genu);
      }
      moging() {
         console.log('i am mewing')
      }
   }
   const getAnimat = (anima : Animal) => {
      if (anima instanceof Dog) {
      anima.doging()
      } else if (anima instanceof Cat) {
         anima.moging()
      } else {
         anima.sound();
      }
   }
   

   // smat way
   const isDog = (animal: Animal): animal is Dog => {
      return animal instanceof Dog;
   }
   const isCat = (animal: Animal): animal is Cat => {
      return animal instanceof Cat;
   }


   const getAnimal = (animal: Animal) => {
      if (isDog(animal)) {
         animal.doging()
      } else if (isCat(animal)) {
         animal.moging()
      } else {
         animal.sound();
      }
   }


   const dog = new Dog("hah", "fdsf");
   const me = new Cat("hah", "fdsf");
   
   getAnimat(dog);




}