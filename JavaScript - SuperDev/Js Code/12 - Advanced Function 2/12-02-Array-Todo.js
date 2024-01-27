
      const toDoList = JSON.parse(localStorage.getItem('todoList')) && [ {
        name : 'Make dinner' , 
        dueDate : '20-12-2022' 
      } , {
        name : 'wash dishes',
        dueDate : '22-12-2022' 
      }] ;

   renderToDo();
  

   //Generating Html instead of working in html used that html code in js 
   function renderToDo() {
      let todoListHtml = '';

      toDoList.forEach((todoObj, index) => {  //Arrow Function
        const {name,dueDate} = todoObj;   //ShortCut
         
        const html = `
          <div>${name}</div>
          <div>${dueDate}</div>                        
          <button class="delete-button">Delete</button>
        `;
        todoListHtml += html;
      });
      
      document.querySelector('.js-div').innerHTML = todoListHtml;

      //Added here, as we created Delete button in Js 
      document.querySelectorAll('.delete-button')
      .forEach( (deleteButton , index)  => {
        deleteButton.addEventListener('click', () => {
          toDoList.splice(index , 1);
          renderToDo();
          saveToStorage();
        });
      });
      
   }

     

   //Added Add event listener to Add button
   document.querySelector('.butt')
    .addEventListener('click', () => {
      addToDo();
    });



  function addToDo(){
     const inputElem = document.querySelector('.js-input');
     const name = inputElem.value;

     const dateInput = document.querySelector('.js-date');
     const dueDate = dateInput.value;
     
     toDoList.push( { 
      //  name : name ,
      //  dueDate : dueDate 
       name ,  // Shortcut
       dueDate
     });

     inputElem.value = '';  //To reset the input(value) to ‘ ’ blank.
  
     renderToDo();

     saveToStorage() ;
   }


   function saveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(toDoList));
  }