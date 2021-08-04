
var buttonColours = ["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var started=false;
var level=0;
$(document).keypress(function(){
    if(started==false){
        nextSequence();
        $("#level-title").text("Level "+level);
        started=true;

    }
    
});
 function nextSequence(){
     level=level+1;
     $("#level-title").text("Level "+level);
     var randomNumber = Math.random()*4;
     randomNumber=Math.floor(randomNumber);
     var randomChosenColour = buttonColours[randomNumber];
     gamePattern.push(randomChosenColour);
     $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
     playSound(randomChosenColour);
     
 }

 $('div[type="button"]').click(handler);

 function handler(){
     var userChosenColour=this.id;
     userClickedPattern.push(userChosenColour);
     playSound(userChosenColour);
     animatePress(userChosenColour);
     checkAnswer(userClickedPattern.length-1);
 }
 function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

 }
 function animatePress(currentColour){
     $("#"+currentColour).addClass("pressed");
     setTimeout(function(){
         $("#"+currentColour).removeClass("pressed");
         
     },100);
    
 }
 function checkAnswer(currentLevel){
     if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
         var f=true;
         for(var i=0;i<gamePattern.length;i++){
             if(userClickedPattern[i]===gamePattern[i]){
                 
             }
             else{
                 f=false;
             }
         }
         if(f===true){
            setTimeout(function(){
                nextSequence();
            },1000);
            userClickedPattern.splice(0,userClickedPattern.length);
         }
        /* else{
            var audio = new Audio("sounds/wrong.mp3");
            audio.play();
            $("body").addClass("game-over");
            setTimeout(function(){
               $("body").removeClass("game-over");
            },200); 
       }*/
     }
     else{
         var audio = new Audio("sounds/wrong.mp3");
         audio.play();
         $("body").addClass("game-over");
         setTimeout(function(){
            $("body").removeClass("game-over");
         },200);
         $("h1").text("Game Over, Press Any Key to Restart");
         startOver();
         
     }

 }
 function startOver(){
     level=0;
     started=false;
     gamePattern.splice(0,gamePattern.length);
     userClickedPattern.splice(0,userClickedPattern.length);
 }

 /*playerAudio(randomChosenColour);
 function playerAudio(key){

    switch (key) {
        case "blue":
            var b = new Audio('sounds/blue.mp3');
            b.play();
            break;
        case "green":
           var g = new Audio('sounds/green.mp3');
           g.play();
           break;
        case "red":
           var r = new Audio('sounds/red.mp3');
           r.play();
           break;
        case "yellow":
           var y = new Audio('sounds/yellow.mp3');
           y.play();
           break;     
            
    
        default:
            break;
    }
 
 }*/


 