var numSquares=6;
var colors = generaterandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

for(var i=0;i<modeButtons.length;i++)
{
    modeButtons[i].addEventListener("click",function()
    {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent==="Easy")
        {
            numSquares=3;
        }
        else{
            numSquares=6;
        }
       reset();
    });
}

function reset()
{
    messageDisplay.textContent="";
    //generate all new colors
    colors = generaterandomColors(numSquares);
    //pick new randomw colors from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent= pickedColor;
    resetButton.textContent="New Colors";
    //change colors of squares
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i])
        {
            squares[i].style.display="block";
            squares[i].style.background=colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
    h1.style.background="steelblue";
}

/*easyBtn.addEventListener("click",function()
{
    //alert("easy button clicked");
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares=3;
    //generate 3 new colors
    colors=generaterandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i])
        {
            squares[i].style.background=colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
});

hardBtn.addEventListener("click",function()
{
    //alert("Hard button clicked");
    numSquares=6;
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    colors=generaterandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        
            squares[i].style.background=colors[i];
            squares[i].style.display="block";
    }
});*/


resetButton.addEventListener("click",function()
{
    reset();
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
        var clickedColor = this.style.background;
        console.log(clickedColor,pickedColor);

		//compare color to pickedColor
		if(clickedColor === pickedColor) {
            changeColors(clickedColor);
            messageDisplay.textContent="Correct";
            resetButton.textContent="Play again?";
            h1.style.background=clickedColor;
		} else {
            this.style.background="#232323";
            messageDisplay.textContent="Try Again";
		}
    });
}
    function changeColors(color)
    {
        //loop through all squares
        for(var i=0;i<colors.length;i++)
        {
            //change each color to match given coloe
            squares[i].style.background=color;

        }     
    }

    function pickColor()
    {
        var random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }

   function generaterandomColors(num)
   
   {
        //make an array
        var arr=[];
        //add random numbers to array
        for(var i=0;i<num;i++)
        {
            //get random color and push into arr
            arr.push(randomColor());
           
        }
        //return that array
        return arr;
   }

   function randomColor(){
        //pick a red from 0-255
        var r= Math.floor(Math.random() *256);
        //pick a green from 0-255
        var g= Math.floor(Math.random() *256);
        //pick blue from 0-255
        var b= Math.floor(Math.random() *256);
      
       return "rgb(" + r + ", " +g +", "+ b + ")";
   }
