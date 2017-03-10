var s;
var scl = 20;
var food;

function setup(){
	createCanvas(601,601);
	s = new Snake();
	frameRate(10)
	pickLocation();
}

function pickLocation(){
	var cols = width / scl;
	food = createVector(floor(random(cols)),floor(random(cols)));
	food.mult(scl);
}

function draw(){
	background(51);
	s.update();
	s.show();
	fill(255,0,100);
	rect(food.x, food.y, 20,20);
	if (s.eat(food)){
		pickLocation();
	}
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		s.dir(0,-1);
	} else if (keyCode === DOWN_ARROW) {
		s.dir(0, 1);
	} else if (keyCode === RIGHT_ARROW) {
		s.dir(1, 0);
	} else if (keyCode === LEFT_ARROW) {
		s.dir(-1, 0);
	}
}

