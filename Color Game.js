	var numSquare = 6;//the important of this is to prevent problem whenever we switch from easy to new color
	var color = generateRandomColors(numSquare);
//var color =["rgb(255, 0, 0)","rgb(255, 255, 0)","rgb(0, 255, 0)","rgb(0, 255, 225)","rgb(0, 0, 255)","rgb(255, 0, 255)"] This was initaialy used but it cant give me a varieties of color that's why the RANDOM Color is prefers
	var squares = document.querySelectorAll(".square"); 
	var pickColor = Pickedcolor();
    var  colordisplay = document.getElementById("colorDisplay");
	var messageDisplay = document.querySelector("#message");
	var h1 = document.querySelector("h1");	
	var buttonKey = document.querySelector("#button");
	var Easybtn = document.querySelector("#Easybtn");
	var Hardbtn = document.querySelector("#Hardbtn");
	//var attResult = document.querySelector("#attemptResult");
	//var playerRes = document.querySelector("#playerResult");

Easybtn.addEventListener("click", function(){
		Easybtn.classList.add("selected");    //this code is use to change the color of the easy button by adding a classlist that has been modify	
		Hardbtn.classList.remove("selected");   //this code is use to change the color of the hard button by adding a classlist that has been modify
	   numSquare = 3;
		color = generateRandomColors(numSquare);
		pickColor = Pickedcolor();
		colordisplay.textContent = pickColor;
		for (var i = 0; i < squares.length; i++){
			if(color[i]) {
			squares[i].style.background = color[i];
			} 
			else {
				squares[i].style.display = "none";
			}
				
		}
		messageDisplay.textContent= "";
		});
Hardbtn.addEventListener("click", function(){  		
		Hardbtn.classList.add("selected");
		Easybtn.classList.remove("selected");
	    numSquare = 6;
		color = generateRandomColors(numSquare);
		pickColor = Pickedcolor();
		colordisplay.textContent = pickColor;
		for (var i = 0; i < squares.length; i++){
			squares[i].style.background = color[i];
		    squares[i].style.display = "block";
			}		
			messageDisplay.textContent= "";
});

buttonKey.addEventListener("click", function(){//whenever i click on the button,it will start the game all over again, to do so,we have to write a code that will generate color, pickColor again
		 color = generateRandomColors(numSquare);	
		 pickColor = Pickedcolor();	   
		colordisplay.textContent = pickColor; 
		for(var i = 0; i < squares.length; i++) { // this code will return all the square to initial/selected color
	    squares[i].style.background = color[i]; 		 
  }
		this.textContent = "New Color";
		h1.style.background = "steelblue" 		
		messageDisplay.textContent= "";
  })    
	colordisplay.textContent = pickColor;
for(var i = 0; i < squares.length; i++) {
	// Add initial color to square
	squares[i].style.background = color[i];
    //Add click listerner to square
	  //this.style.background;
	squares[i].addEventListener("click", function(){		
	var clickColor = this.style.background;
	console.log(pickColor);  
	console.log(clickColor);
	
if(clickColor === pickColor){
	messageDisplay.textContent = "Correct!!!"
	changeColor(clickColor);
	h1.style.background = clickColor;
	buttonKey.textContent = "Play Again?"
	} else{
		this.style.background = "#232323"
	messageDisplay.textContent = "Try Again!!"
	 }
});
}
function changeColor(imam) {
// this is a code to change the background color to the corrected color you pick,you need to loop through first
	for(var i = 0; i < squares.length; i++) {
// this code will change the bg color now	
	squares[i].style.background = imam; 
	}
}
function Pickedcolor() {
	 var randomResult = Math.floor(Math.random() * color.length);
	 return color[randomResult];
}
function generateRandomColors(num) {
//make an array
	var arr = [] 
//repeat number of time
	for(var i = 0; i < num; i++){
//get random color and push to array
	arr.push(randomColor());
	}
//return that array
	return arr;
	
	}
function randomColor(){
// Pick a number from 0 - 255 for RED,GREEN and BLUE.
	var r = Math.floor(Math.random() * 256);	
	var g = Math.floor(Math.random() * 256);			
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + b + ", " + g + ")";
}




















