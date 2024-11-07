{
   class Animal{
      name: string;
      color: string;
      sound: string;
      constructor(name: string, color: string,sound: string){
      this.name = name;
      this.color = color;
      this.sound = sound;
      }
      makesound() {
         console.log(this.name)
      }
   }
   const dog = new Animal("herman", "black", "gheu");
   dog.makesound();
   


   // [parameter properties]
   class Animals {
     
      constructor(public name: string,public color: string,public sound: string) {
         
      }
}
// ts-node-dev --respawn --transpile-only ./m2/src/statics.ts