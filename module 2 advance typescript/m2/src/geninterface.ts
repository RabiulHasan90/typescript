{

   // generi interface
   
   interface developer<t, m> {
      name: string;
      laptop: {
         brand: string;
         price: number;
         generation: number;

      },

      smartWatch: t;
      bike?: m;
   }
   interface sm{
      name: string;
      price: number;
   }
   const developerPoor: developer<sm, null> = {
      
      name: "hasan",
      laptop: {
         brand: "dell",
         price: 8200,
         generation: 11,

      },

      smartWatch: {
         name: 'ha',
         price:12,
      },
    
   }
   interface bike{
      brand: string,
      price: number;
   }
   const developerRich: developer<sm, bike> = {

      name: "hasan",
      laptop: {
         brand: "dell",
         price: 8200,
         generation: 11,

      },

      smartWatch: {
         name: 'ha',
         price: 12,
      },
      bike: {
         brand: 'yamaha',
         price: 43432,
      }

   }





}