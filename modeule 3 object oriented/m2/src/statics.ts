{
   class Counter {
     static count: number = 0;
     static increment() {
      return   Counter.count = Counter.count + 1;
      }
    static  decrement() {
       return  Counter.count = Counter.count - 1;
      }
   }
   const nm = new Counter();
   console.log(Counter.increment())
   console.log(Counter.increment())
   const nms = new Counter();
   console.log(Counter.increment())




   // class Counter {
   //     count: number = 0;
   //     increment() {
   //       return this.count = this.count + 1;
   //    }
   //   decrement() {
   //       return this.count = this.count - 1;
   //    }
   // }
   // const nm = new Counter();
   // console.log(nm.increment())
   // console.log(nm.increment())
   // const nms = new Counter();
   // console.log(nms.increment())
}