// Part 1
//   const toDoList = [];

//   function addToDo(){
//      const inputElem = document.querySelector('.js-input');
 
//       const name = inputElem.value;

//      toDoList.push(name);

//      console.log(toDoList);

//      inputElem.value = '';  //To reset the input(value) to ‘ ’ blank.
//   }


// Part 2

const toDoList = ['Make dinner' , 'wash dishes'];

   renderToDo();
  

   //Generating Html instead of working in html used that html code in js 
   function renderToDo() {
      let todoListHtml = '';
      for (let i=0 ; i<toDoList.length ; i++){
         const todo = toDoList[i];
      
         const html = `<p>${todo}</p>`;
         todoListHtml += html;
      }
      console.log(todoListHtml);
      
      document.querySelector('.js-div').innerHTML = todoListHtml;
   }



  function addToDo(){
     const inputElem = document.querySelector('.js-input');
 
     const name = inputElem.value;

     toDoList.push(name);

     console.log(toDoList);

     inputElem.value = '';  //To reset the input(value) to ‘ ’ blank.
  
     renderToDo();
   }
