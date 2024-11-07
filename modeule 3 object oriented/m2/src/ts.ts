{
   class test{
      name: string;
      brand: string;
      constructor(name: string, brand: string) {
         this.brand = brand;
         this.name = name;
      }
      forPrint() {
         console.log(`${this.brand} and ${this.name}`)
      }
   }
   const dog = new test("hasan", "janina");
   dog.forPrint()
}