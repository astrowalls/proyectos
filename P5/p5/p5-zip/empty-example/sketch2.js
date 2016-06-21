
var bubbles = [];

function setup() {
	createCanvas(600,400); /*esto determina el tamaño del lienzo*/
	/*bubbles[0]= new Bubble();
	bubbles[1]= new Bubble();
	bubbles[2]= new Bubble();
	bubbles[3]= new Bubble();*/

}

function draw() {

	background(0);

	for (var i = 0; i<bubbles.length; i++){
	bubbles[i].move();
	bubbles[i].display();
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


function mouseDragged(){

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
	this.speedX=random(-2,2);
	this.speedY=random(-2,2);

	this.display = function(){

		ellipse(this.x,this.y,this.r*2,this.r*2);
	}

	this.move=function(){

		this.x=this.x+this.speedX;
		this.y=this.y+this.speedY;

	}


}

