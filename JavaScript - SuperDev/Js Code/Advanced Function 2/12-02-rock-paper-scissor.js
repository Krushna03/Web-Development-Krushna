      let score = JSON.parse(localStorage.getItem("score"));

      if (score === null) {
         score = {
            win: 0,
            loose: 0,
            ties: 0,
         };
      }

        updateScoreEle();

      //remove value from local storage
      //console.log(localStorage.getItem('message'));
      //console.log(JSON.parse(localStorage.getItem('score')));


      //AutoPlay functionality
      let isAutoPlay = false;
      let intervalId ;

      // const autoPlay = () => {   //Here also can add => func
      //  }; 

         function autoPlay() { 
            if( !isAutoPlay ) {
               intervalId = setInterval (() => {
                const playerMove = pickComputerMove();
               playGame(playerMove);
            }, 2000 );
            isAutoPlay = true;
         }
         else {
            clearInterval(intervalId); //Remove the recent id of that interval
            isAutoPlay = false;
         }
      }

      // Added Event Listener instead of Onclick
      document.querySelector('.js-button1')
      .addEventListener('click' , () => {
         playGame('Rock');
      } );

      document.querySelector('.js-button2')
      .addEventListener('click' , () => {
         playGame('Paper');
      } );

      document.querySelector('.js-button3')
      .addEventListener('click' , () => {
         playGame('Scissor');
      } );


    // Added Event Listener To reset button
      document.querySelector('.js-reset')
      .addEventListener('click' , () => {
         score.ties  = 0,
         score.win = 0,
         score.loose = 0 
         localStorage.removeItem('score'); 
         updateScoreEle (); 
      } );


      // Added Event Listener To AutoPlay button
      document.querySelector('.js-autoPlay')
      .addEventListener('click' , () => {
         autoPlay();
      } );


      // Added Event Listener instead of OnkeyDown 
      document.body.addEventListener('keydown', (event) => {
         if( event.key === 'r' ){
            playGame('Rock');
         }
         else if( event.key === 'p' ){
            playGame('Paper');
         }
         else if( event.key === 's' ){
            playGame('Scissor');
         }
      });


      function playGame(playerMove) {
         computerMove = pickComputerMove();
         result = "";

         if (playerMove === "Scissor") {
            if (computerMove === "Rock") {
               result = "You loose.";
            } 
            else if (computerMove === "Paper") {
               result = "You win.";
            } 
            else if (computerMove === "Scissor") {
               result = "Tie.";
            }
         } 
         
         else if (playerMove === "Paper") {
            if (computerMove === "Rock") {
               result = "You Win.";
            } 
            else if (computerMove === "Paper") {
               result = "You Tie.";
            } 
            else if (computerMove === "Scissor") {
               result = "You loose.";
            }
         } 
         
         else if (playerMove === "Rock") {
            if (computerMove === "Rock") {
               result = "Tie.";
            } 
            else if (computerMove === "Paper") {
               result = "You loose.";
            } 
            else if (computerMove === "Scissor") {
               result = "You win.";
            }
         }

         if (result === "Tie.") {
            score.ties += 1;
         } 
         else if (result === "You loose.") {
            score.loose += 1;
         }
         if (result === "You win.") {
            score.win += 1;
         }

         //Store the value at local storage
         //localStorage.setItem( 'message' , 'hello' );

         localStorage.setItem("score", JSON.stringify(score));
         // JSON convert above number to string

         updateScoreEle();

         document.querySelector(".js-result").innerHTML = result;

         document.querySelector( ".js-moves")
           .innerHTML = `You <img src="${playerMove}-emoji.png" class="Images-button"> 
                        <img src="${computerMove}-emoji.png" class="Images-button"> Computer`;
      }


      function updateScoreEle() {
         document.querySelector(
            ".js-score"
         ).innerHTML = `You wins ${score.win}, Looses ${score.loose}, Ties ${score.ties}`;
      }


      function pickComputerMove() {
         randomNum = Math.random();
         computerMove = "";

         if (randomNum >= 0 && randomNum < 1 / 3) {
            computerMove = "Rock";
         } 
         else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
            computerMove = "Paper";
         } 
         else if (randomNum >= 2 / 3 && randomNum < 1) {
            computerMove = "Scissor";
         }
         return computerMove;
      }
