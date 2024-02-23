
   document.querySelector('button')
      .addEventListener( 'click', () => {

   let height = document.querySelector('.int1');
   let heightValue = Number(height.value);
      heightValue = heightValue/100;  // To Metre

   let weight = document.querySelector('.int2')
   let weightValue = Number(weight.value);


   if (!isNaN(heightValue) && !isNaN(weightValue)) {
      let bmi = weightValue / (heightValue * heightValue);  //formula
       const result = document.querySelector('.result') 
       result.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;

       const result1 = document.querySelector('.result1') 
       if(bmi < 18.6){
         result1.innerHTML = 'You are Under Weight';
       }
       else if(bmi > 24.9){
         result1.innerHTML = 'You are Overweight';
       }
       else if(bmi >= 18.6 || bmi <= 24.9){
         result1.innerHTML = 'You are in Noraml Range';
       }
   }

   else {
      const result = document.querySelector('.result');
      result.textContent = 'Please enter valid numbers for height and weight.';
   }

   })