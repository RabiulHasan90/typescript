//normal function
// learning function
// arrow function
function add(num1: number, num2: number) {
   return num1 + num2;
}
add(2, 3);
const addArrow = (num1: number, num2: number): number => num1 + num2;
// method in object
const adu = {
   ada : 0,
   addBalance(ada: number): string{
      return `thi is ${this.ada + ada}`
   }

}
const arr: number[] = [3, 4, 5];
const newArr: number[] = arr.map((elem : number) : number => elem * elem);
