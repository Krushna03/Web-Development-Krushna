      //1
      const nums = [10,20,30];
      nums[nums.length-1] = 99;
      console.log(nums);

      //2
      console.log(getLastValue([1,20,22,5]));
      console.log(getLastValue(['hi', 'hello', 'hey']));

      function getLastValue(arr){
         let lastIndex = arr.length-1;
         return arr[lastIndex];
      } 

      //3
      function arraySwap(array) {
       let firstIndex = array[0];
       let lastIndex = array[array.length-1];
           
        array[0] = lastIndex;
        array[lastIndex] = firstIndex;

      return array;
      }
      console.log( arraySwap([1, 20, 22, 24, 5]) );
      console.log(arraySwap(['hi', 'hello', 'hey']));
  

      //4 
      for(let i=0 ; i<=10 ; i+=2){
         console.log(i + '');
      }

      // let result = '';
      // for(let i=0 ; i<=10 ; i++){
      //     if( i % 2 === 0){
      //       result += i ;
      //     }
      // }
      // console.log(result + '');


      //5
      for ( let i=5 ; i>=0 ; i--){
         console.log(i);
      }

      
      //6
      let i=0 ;
      while( i <= 10 ){
         console.log(i);
          i+=2;
      }

      let j=5;
      while( j >= 0){
         console.log(j);
         j--;
      }



      //7 , 8
      function takesArray(arr){
         for(let i=0 ; i<arr.length ; i++){
              arr[i] = arr[i] + 1;
         }
         return arr;
      }
      console.log( takesArray( [1,2,3] ));
      console.log( takesArray( [-2,-1,0,99] ));

      // const array = [1, 2, 3];
      // const result = [];

      // for (let i = 0; i < array.length; i++) {
      //   result.push(array[i] + 1);
      // }
      // console.log(result);


      //9 
      function addNum( array2, num ){
         for( let i=0 ; i<array2.length ; i++){
             array2[i] = array2[i] + num;
         }
          return array2;
      }
      console.log(addNum( [1,2,3], 2 ));
      console.log(addNum( [1,2,3], 3 ));
      console.log(addNum( [-2,-1,0,99], 2 ));



      //10 
      function addNum( array2, num ){
         for( let i=0 ; i<array2.length ; i++){
               array2[i] = array2[i] + num;
         }
            return array2;
      }
      console.log(addNum( [1,2,3], 2 ));
      console.log(addNum( [1,2,3], 3 ));
      console.log(addNum( [-2,-1,0,99], 2 ));



      //11
      function addArrays( array2, array3 ){
         for( let i=0 ; i<array2.length ; i++){
               array2[i] = array2[i] + array3[i];
         }
            return array2;
      }
      console.log(addArrays( [1,1,2], [1,1,3] ));
      console.log(addArrays( [1,2,3], [4,5,6] ));
 


      //12
      function countPositive(array4) {
         let count = '';
         for( let i=0 ; i<array4.length ; i++){
            if( array4[i] > 0 )
               count++;
         }
         return count;
      }
      console.log(countPositive( [1,-2,3] ));
      console.log(countPositive( [-1,2,-3,5,10] ));


      // challenge

      //13 
      function minMax1(nums1) {
         const result = {
           min: nums1[0],
           max: nums1[0]
         };
 
         for (let i = 0; i < nums1.length; i++){
           const value = nums1[i];
 
           if (value < result.min) {
             result.min = value;
           }
 
           if (value > result.max) {
             result.max = value;
           }
         }
         return result;
       }
       console.log( minMax1( [1,-2,3] ) );



       //14
       function minMax2(nums2) {
         const result = {
           min: null,
           max: null
         };
 
         for (let i = 0; i < nums2.length; i++) {
           const value = nums2[i];
 
           if (result.min === null || value < result.min) {
             result.min = value;
           }
 
           if (result.max === null || value > result.max) {
             result.max = value;
           }
         }
            return result;
         }
       console.log( minMax2( [3] ) );
       console.log( minMax2( [] ) );



       //15 incomplete
       function countWords(arrStr) {
          const result = {};

          for( let i=0 ; i<arrStr.length ; i++ ){
             const word = arrStr[i];
             
             if( !result[word] ) {
                result[word] = 1;
             }
             else {
               result[word]++;
             }
          }
          return result;
       }
       console.log( countWords( ['apple','grape','apple','apple'] ) );

       
