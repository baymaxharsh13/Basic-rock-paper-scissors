 //function -- 

        let score = JSON.parse(localStorage.getItem(`score`)) || { 
                wins   : 0 ,
                losses : 0 , 
                ties   : 0 ,
            } ; //stores the data in  local storage since stored as json string it is converted back to js
                /*Try to get "score" from localStorage.Convert it from string → object.
    If nothing exists (first time user opens page),
    use default values*/
    
            /* if(!score){       // why this here? when we remove  score from local storage to make reset button work the score , so score gives out null value and when we try tpo acess any value on null it will give error , so we equate score to null and reset its value
            score = { 
                wins   : 0 ,
                losses : 0 , 
                ties   : 0 ,
            }
        } */

          updateScoreElement() ; 

            function resultMove(playerMove){
                let res1 = ``; 
                const compMove = pickComMove() ;
            if ( playerMove ===`scissors`){
                
                if (compMove === `rock`){
                    res1 = `you loose` ; 
                }else if(compMove === `paper`) {
                    res1 = `you win` ; 
                }else if(compMove ===`scissors`){
                    res1 = `tie` ; 
                }
            } 
            else if(playerMove === `paper`){
            
            if (compMove === `rock`){
                res1 = `you win` ; 
            }else if(compMove === `paper`) {
                res1 =  `tie` ; 
            }else if(compMove ===`scissors`){
                res1 = `you loose` ; 
            }
            
            }else if(playerMove === `rock`){
                
            if (compMove === `rock`){
                res1 = `tie` ; 
            }else if(compMove === `paper`) {
                res1 = `you loose` ; 
            }else if(compMove ===`scissors`){
                res1 = `you win` ; 
            }
            }
            if(res1 === `you win`){
                score.wins++ ; 
            }else if(res1 === `you loose`){
                score.losses++    
            }else if (res1 === `tie`){
                score.ties++ ;
            }
            localStorage.setItem(`score` ,JSON.stringify(score)); //saving in local storage as json string 

            updateScoreElement(); 


            document.querySelector(`.js-result`).innerHTML = res1 ; 

            document.querySelector(`.js-moves`).innerHTML = `  You 
            <img src="images/${playerMove}-emoji.png" class="move-icon">
            <img src="images/${compMove}-emoji.png" class="move-icon">
            Computer</p>
       ` ; 
                
        }
        
            function updateScoreElement(){          
                 document.querySelector('.js-score')
                .innerHTML = `Wins : ${score.wins} , losses : ${score.losses} ,Ties : ${score.ties} ` ; 

            }
        
            function pickComMove(){ 
        const randomNumber = Math.random()
        let compMove = ``;
        if (randomNumber>= 0 && randomNumber < 1/3){
            compMove = `rock`; 
        }else if(randomNumber>=1/3 && randomNumber < 2/3){
            compMove = `paper`; 
        }else if (randomNumber >=2/3 && randomNumber < 1){
            compMove = `scissors`;      //scope limits where a variable exists curly bracket ke bahar nai use kar sakta same variables ko 
        }
        return compMove ;   
            }