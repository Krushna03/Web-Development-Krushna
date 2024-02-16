    let calculation = localStorage.getItem('Calculation') || '';

     function updateCalculation(value){
         calculation = calculation + value;
         Output();

         localStorage.setItem('Calculation' , calculation);
     }
    
    
    function Output() {
     document.querySelector('.result')
      .innerHTML = calculation;
   }  