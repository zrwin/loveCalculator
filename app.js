const button = document.querySelector(".btn"); 


function generateRandom(){

        let ran = Math.floor(Math.random()*100);
        if(ran>70){
            return ran;
        }
        else
        {
            return ran+30;
        }
}

button.onclick = function (){
   const newDiv  = document.querySelector(".result");
    newDiv.innerHTML=generateRandom()+"%";
    
}