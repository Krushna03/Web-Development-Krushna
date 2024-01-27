
      const toDoList = JSON.parse(localStorage.getItem('todoList')) || [ {
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
      for (let i=0 ; i<toDoList.length ; i++){
         const todoObj = toDoList[i];
         // const name = todoObj.name;
         // const dueDate = todoObj.dueDate;
         const {name,dueDate} = todoObj;   //ShortCut
         
         const html = `
           <div>${name}</div>
           <div>${dueDate}</div>              
           
           <button onclick="
              toDoList.splice(${i},1);
              renderToDo();
              saveToStorage();"  // Whenever we update the todo list, save in localStorage.
           
              class="delete-button"
           
           >Delete</button>
         `;
         todoListHtml += html;
      }
      // console.log(todoListHtml);
      
      document.querySelector('.js-div').innerHTML = todoListHtml;

   }



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
