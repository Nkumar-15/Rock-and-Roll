

var drumkeys=document.querySelectorAll(".drum").length;

var keyboardkeys=document.querySelectorAll(".kb").length;


for(var i=0;i<drumkeys;i++)
{
    document.querySelectorAll(".set button")[i].addEventListener("click",clickKey);

}

for(var j=0;j<keyboardkeys;j++)
{
    document.querySelectorAll(".set1 button ")[j].addEventListener("click",clickKey );
}



function clickKey()
{
    // var audio=new Audio("sounds/tom-1.mp3");
    // audio.play();

    // this.style.color="white";

    var buttonPressed =this.innerHTML;
    makeNoise(buttonPressed);
    showAnimation(buttonPressed);

}


document.addEventListener("keydown",function (event){
    var button=event.key;
    makeNoise(button);
    showAnimation(button);
    

})



function makeNoise(buttonKey)
{
    
    switch(buttonKey)
    {
        case "F":
        case "f":   var audio=new Audio("sounds/crash.mp3");
                    audio.play();
                    break;
        
        case "A":
        case "a":   var audio=new Audio("sounds/snare.mp3");
                    audio.play();
                    break;  

        case "S":
        case "s":   var audio=new Audio("sounds/tom-1.mp3");
                    audio.play();
                    break;

        case "D":
        case "d":   var audio=new Audio("sounds/tom-2.mp3");
                    audio.play();
                    break;

        case "J":
        case "j":   var audio=new Audio("sounds/tom-3.mp3");
                    audio.play();
                    break;

        case "K":
        case "k":   var audio=new Audio("sounds/tom-4.mp3");
                    audio.play();
                    break;

        case "L":
        case "l":   var audio=new Audio("sounds/kick-bass.mp3");
                    audio.play();
                    break;




//Keyboard Keys.

        case "Q":
        case "q":   var audio=new Audio("sounds/saa.wav");
                    audio.play();
                     break;


        case "W":
        case "w":   var audio=new Audio("sounds/ree.wav");
                    audio.play();
                    break;

        case "E":
        case "e":   var audio=new Audio("sounds/gaa.wav");
                    audio.play();
                    break;  

        case "R":
        case "r":   var audio=new Audio("sounds/maa.wav");
                    audio.play();
                    break;


        case "T":
        case "t":   var audio=new Audio("sounds/paa.wav");
                    audio.play();
                    break;


        case "Y":
        case "y":   var audio=new Audio("sounds/dhaa.wav");
                    audio.play();
                    break;


        case "U":
        case "u":   var audio=new Audio("sounds/nii.wav");
                    audio.play();
                    break;

        case "I":
        case "i":   var audio=new Audio("sounds/saaa.wav");
                    audio.play();
                    break;

         


        default:    console.log("PRESS THE CORRECT BUTTON");


    }
}


function showAnimation(currentbutton)
{
    var buttonthatPressed=document.querySelector("."+currentbutton);
    buttonthatPressed.classList.add("pressed");

    setTimeout(function(){buttonthatPressed.classList.remove("pressed");},100);
}