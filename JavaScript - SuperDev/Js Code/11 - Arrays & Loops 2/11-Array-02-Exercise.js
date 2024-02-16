   //1
    function searchStr(str){
     let index = -1;
        for( let i=0 ; i<str.length ; i++){
             if( str[i] === 'search' ){
                 index = i;
             }
        }
        console.log(index + '  //1');
    }
    searchStr(['hello','search','good','world']);


    //2
    function searchStr2(str){
      let index = -1;
         for( let i=0 ; i<str.length ; i++){
              if( str[i] === 'search' ){
                  index = i;
                  break;
              }
         }
         console.log(index+ '  //2');
     }
     searchStr2(['hello','search','good','search']);


     //3
     function findIndex(array , word ){
        index = -1 ;
        for( let i=0 ;  i<array.length ; i++){
            if(array[i] === word){
               index = i;
               break;
            }
        }
        return index;
     }
     console.log(findIndex (['green','red','blue','red'] , 'red' ) + '  //3');



     //4
    function removeEgg( foods ){
      let items = [];
       for( let i=0 ; i<foods.length ; i++){
          if ( foods[i] === 'egg') {
             continue;
          }
          items.push(foods[i]);
      }
       console.log(items);
    }
    removeEgg( ['egg','apple','egg','egg','han'] );
  


     //5
     function removeEgg2( foods ){
      let eggRemoved = 0;
      let items = [];
       for( let i=0 ; i<foods.length ; i++){
          if ( foods[i] === 'egg' && eggRemoved < 2) {
            eggRemoved++;
             continue;
          }
          items.push(foods[i]);
      }
       console.log(items);
    }
    removeEgg2( ['egg','apple','egg','egg','han'] );




     //6
     function removeEgg3( foods ){
      let reverseArr = foods.reverse();
      let eggRemoved = 0;
      let items = [];
       for( let i=0 ; i<reverseArr.length ; i++){
          if ( reverseArr[i] === 'egg' && eggRemoved < 2) {
            eggRemoved++;
             continue;
          }
          items.push(reverseArr[i]);
          items.reverse();      
        }
       console.log(items);
    }
    removeEgg3( ['egg','apple','egg','egg','han'] );



    //7
    function removeEgg4( foods ){
      let reverseArr = foods.slice();
      let reverse2 = reverseArr.reverse();
      let eggRemoved = 0;
      let items = [];
       
      for( let i=0 ; i<reverse2.length ; i++){
          if ( reverse2[i] === 'egg' && eggRemoved < 2) {
            eggRemoved++;
             continue;
          }
          items.push(reverse2[i]);
          items.reverse();      
        }
       console.log(items);
    }
    removeEgg4( ['egg','apple','egg','egg','han'] );




   //  challenge 
    
   //1
   for( let i=1 ; i<=20 ; i++){
      if( i % 3 === 0 && i % 5 === 0 ) {
         console.log('FizzBuzz');
      }
      else if( i % 3 === 0 ){
         console.log('Fizz');
      }
      else if( i % 5 === 0 ){
         console.log('Buzz');
      }
      else {
         console.log(i);
      }
   }



   //2  
     function findIndex1(array, word) {
        for (let i = 0; i < array.length; i++) {
          if (array[i] === word) {
            return i;
          }
        }
        return -1;
      }

      function unique(array) {
        const result = [];
        for (let i = 0; i < array.length; i++) {
          const word = array[i];

          if (findIndex1(result, word) === -1) {
            result.push(word);
          }
        }
        return result;
      }

      console.log(unique(['green', 'red', 'blue','red']));
      console.log(unique(['red', 'green', 'green','red']));