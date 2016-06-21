
var bubbles = [];

var colors = [];

function setup() {
	createCanvas(window.innerWidth, window.innerHeight); /*esto determina el tamaño del lienzo*/
	/*bubbles[0]= new Bubble();
	bubbles[1]= new Bubble();
	bubbles[2]= new Bubble();
	bubbles[3]= new Bubble();*/

	colors[0]=color(65,133,21);
	colors[1]=color(53,171,94);
	colors[2]=color(132,171,76);
	colors[3]=color(134,171,17);
	colors[4]=color(163,171,9);

}

function draw() {

	background(0);

	for (var i = 0; i< bubbles.length; i++){
	bubbles[i].move();
	bubbles[i].display();

	 for(var j = 0; j < bubbles.length; j++){
	 	if (i !=j && bubbles[i].intersects(bubbles[j])){
	 	 bubbles[i].speedX = bubbles[i].speedX*-1;
	 	 bubbles[i].speedY = bubbles[i].speedY*-1;

	 	}

	 } 
	

	
	}
}

	/*bubbles[0].move();
	bubbles[0].display();
	bubbles[1].move();
	bubbles[1].display();
	bubbles[2].move();
	bubbles[2].display();
	bubbles[3].move();
	bubbles[3].display()
};*/


function mousePressed(){

	bubbles.push(new Bubble(mouseX,mouseY));

}

	/*console.log(cubee(3));
	var dolares = 400;
	var resultado = convertidor(dolares)
	
 }

 function cube (x){

	/*var cubo =(x*x*x);
	return cubo;*/



function Bubble(x,y){ /*SIEMPRE UN OBJETO EMPIEZA A NOMBRARSE CON MAYÚSCULA)*/
	this.x=x;
	this.y=y;
	this.r=random(10,20);
	this.speedX=random(-25,25);
	this.speedY=random(-25,25);


	this.display = function(){

		fill(colors[parseInt(random(5))]);
		ellipse(this.x,this.y,this.r*2,this.r*2);
	}

	this.move=function(){

		this.x=this.x+this.speedX;
		this.y=this.y+this.speedY;
		this.lifespan = this.lifespan -1;

	if ((this.x > width) || (this.x < 0)){
		this.speedX = this.speedX * -1;
	}

	if ((this.y > height) || (this.y < 0)){
		this.speedY = this.speedY * -1;
	}

	}

	this.intersects = function(other){
		var d = dist(this.x, this.y, other.x, other.y);
		if (d < this.r + other.r){
			return true;
		}else{
			return false;
		}

		
	}
}

