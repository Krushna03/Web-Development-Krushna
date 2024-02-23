 
 const randomColor = function() {
    
   const hex = '0123456789ABCDEF';
   let color = '#'

   for(let i=0 ; i<6 ; i++){
      color += hex[ Math.floor(Math.random() * 16) ]
   }
   return color 
 }

//  console.log(Math.floor(Math.random() * 16) );

   let intervalId;

   const startChangingColor = function() {
      document.querySelector('#start').addEventListener('click', () =>{
         function setBgColor () {
            document.body.style.backgroundColor = randomColor();
         }
         if( !intervalId ){
            intervalId = setInterval(setBgColor, 1000);
         }
      })
   }
   startChangingColor();

   
   const stopChangingColor = function() {
      document.querySelector('#stop').addEventListener('click', () =>{
         clearInterval(intervalId)
         intervalId = null
      })
   }
   stopChangingColor();