var colors = [];

var size=1;

var grow;

var osc;

var notes=[];

function setup() {

	createCanvas(windowWidth,windowHeight);
	colors[0]=color(65,133,21);
	colors[1]=color(53,171,94);
	colors[2]=color(132,171,76);
	colors[3]=color(134,171,17);
	colors[4]=color(163,171,9);


	size = 1;
	grow = true;

	osc = new p5.Oscillator();
	osc.setType('sine');
	osc.freq(200);
	osc.amp(0.2);
	osc.start();

	notes = [130.81, 155.56, 174.61, 185.00, 196.00, 233.08, 261.63];

	delay = new p5.Delay();




}

function draw() {
	fill(255,3);
	rect(0,0,width,height);	
	
	if(mouseIsPressed){
		fill(colors[parseInt(random(5))]);
	}else fill(255);

	/*if (size<100){
		size=size+1;
	}

	if (size==100){
		size=1;
	}*/

	if (size==100){grow=false;}
	if (size==0){grow=true;}

	if (grow){size++;}
	else size --;


	rect(mouseX,mouseY,size,size);	
	ellipse(width-mouseX,mouseY,(size),(size));
	rect(mouseX,height-mouseY,(size),(size));
	ellipse(width-mouseX,height-mouseY,(size),(size));

	/*osc.freq(mouseX);*/

	var pos = map(mouseY, 0, height, 1, 0);
	osc.amp(pos);

	if (mouseX>0 && mouseX<=(width/6)){osc.freq(notes[0]);}

	if (mouseX> width/6 &&mouseX<= (2*width/6)) {osc.freq(notes[1]);}

	if (mouseX>2*width/6&&mouseX<=3*width/6){osc.freq(notes[2]);}

	if (mouseX>3*width/6&&mouseX<=4*width/6){osc.freq(notes[3]);}

	if (mouseX>5*width/6&&mouseX<=6*width/6){osc.freq(notes[4]);}

	/*delay.process(osc, .12, .7, 2300);*/

	
  }

