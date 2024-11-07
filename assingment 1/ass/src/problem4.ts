{
   // Define a union type Circle and Rectangle, where each type has a unique shape property.Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

   // // Sample Input 1:
   // const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

   // // Sample Output 1:
   // 78.54;

   // // Sample Input 2:
   // const rectangleArea = calculateShapeArea({
   //    shape: "rectangle",
   //    width: 4,
   //    height: 6,
   // });

   // // Sample Output 2:
   // 24;

// Circle property 
   type Circle = {
      shape: "circle";
      radius: number;
   };
//Rectangle property
   type Rectangle = {
      shape: "rectangle";
      width: number;
      height: number;
   };
       // make union is or not 
   type Shape = Circle | Rectangle;

   function calculateShapeArea(shape: Shape): number {
      if (shape.shape === "circle") {
       
         return Math.PI * shape.radius * shape.radius;
      } else if (shape.shape === "rectangle") {
        
         return shape.width * shape.height;
      }
      else {
         console.log("try again or check input ");
      }
   }

   const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
   console.log(circleArea);  

   //  this input for second part
   const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
   console.log(rectangleArea);  



}