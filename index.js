var userclicked = [];
var input = document.getElementsByClassName("input-sec")[0];
var button = document.getElementsByClassName("btn")[0];
var para = document.getElementsByTagName('p')[0];
var ran ;
var clas ;
para.innerText = "press s to start the game";


function start(){
    ran = Math.floor(Math.random()*100)+1;
   userclicked = [];
    para.innerText = "game started";
    input.value='';
}




button.addEventListener("click",function(){
    var userint = input.value;
    if(userclicked.length!=10){
        if(userint!=0){
            if(ran==userint){
                para.innerText = "u win! press r to restart";
                para.classList.add("green");
            }else{
                userclicked.push(userint);
                if(userclicked.length==10){
                    para.innerText =  "u loose press r to restart";
                    para.classList.add("red");
                }else{
                    if(ran<userint){
                        para.innerText =   "the number is larger than the4 random number";
                    }else{
                        para.innerText =  "the number is smaller than the4 random number";
                    }
                }
               
            }
            input.value='';
         }else{
            para.innerText =  "please guess the number";
         }
    }else{
        para.innerText = "no more chances left press r to restart";
        para.classList.add("red");
    }

});

document.addEventListener("keypress",function(event){
   if(event.key=='r'){
      start();
      
      clas = para.classList[0];
      para.classList = [];
   }else if(event.key == 's'){
       start();
   }
})