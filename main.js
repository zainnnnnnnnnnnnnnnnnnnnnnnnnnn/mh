//Create a reference for canvas 
var canvas=document.getElementById("myCanvas");
//Give specific height and width to the car image
ctx=canvas.getContext("2d");
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
var greencar_width=75;
var greencar_height=100;
var greencar_x=5;
var greencar_y=25;
function add() {
	//upload car, and background images on the canvas.
	bgtag=new Image();
	bgtag.onload=uploadBackground();
	bgtag.src=background_image;

	gctag=new Image();
	gctag.onload=uploadgreencar();
	gctag.src=greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(bgtag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(gctag,greencar_x,greencar_y,greencar_width,greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(greencar_y>=0){
		greencar_y=greencar_y-10;
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
	if(greencar_y<=350){
		greencar_y=greencar_y+10;
uploadBackground();
uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if(greencar_x>=0){
		greencar_x=greencar_x-10;
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if(greencar_x<=750){
		greencar_x=greencar_x+10;
uploadBackground();
uploadgreencar();
	}
}
