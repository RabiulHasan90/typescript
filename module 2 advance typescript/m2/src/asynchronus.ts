const createPromise = (): Promise<string> => {
   return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
         resolve(data);
      } else {
         reject("fail to load data")
      }
   })
}
// calling create promise
const showdta = async(): Promise<string> => {
   const data :string = await createPromise();
   return data;
}
showdta();
type todo = {
   userId: number;
   id: number;
   title: string;
   completed: boolean;
}
const getTodo = async () : Promise<todo> => {
   const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
   );
   const data = await response.json();
   console.log(data);
   return data;
   
}
getTodo();