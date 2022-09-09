canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

yellowcar_height = 75;
yellowcar_width = 100;

background_image = "parkingLot.jpg";
yellowcar_image = "car2.jpeg";

yellowcar_x = 5;
yellowcar_y = 225;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;
	yellowcar_imgTag = new Image();
	yellowcar_imgTag.onload = uploadyellowcar;
	yellowcar_imgTag.src = yellowcar_image;

}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadyellowcar() {
	ctx.drawImage(yellowcar_imgTag, yellowcar_x, yellowcar_y, yellowcar_width, yellowcar_height);

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
	if(yellowcar_y >=0)
	{
	yellowcar_y = yellowcar_y - 10;
	console.log("When up arrow is pressed, x = " + yellowcar_x + " | y = " + yellowcar_y);
	uploadBackground();
	uploadyellowcar();
	}
}


function down()
{
	if(yellowcar_y <=450)
	{
	yellowcar_y = yellowcar_y + 10;
	console.log("When down arrow is pressed, x = " + yellowcar_x + " | y = " + yellowcar_y);
	uploadBackground();
	uploadyellowcar();
	}
}

function left()
{
	if(yellowcar_x >=0)
	{
	yellowcar_x = yellowcar_x - 10;
	console.log("When left arrow is pressed, y = " + yellowcar_y + " | x = " + yellowcar_x);
	uploadBackground();
	uploadyellowcar();
	}
}

function right()
{
		if(yellowcar_x <=750)
	{
		yellowcar_x = yellowcar_x + 10;
		console.log("When right arrow is pressed, y = " + yellowcar_y + " | x = " + yellowcar_x);
		uploadBackground();
		uploadyellowcar();
	}
}
