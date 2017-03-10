function Snake() {
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
	this.size = 20;
	this.length = 1;
	this.body = [];

	this.update = function(){
		this.x = this.x + this.xspeed*scl;
		this.y = this.y + this.yspeed*scl;
		for (var i = this.length-1; i>0;i--){
			this.body[i] = this.body[i-1];
		}

		this.x = constrain(this.x,0,width-scl-1);
		this.y = constrain(this.y,0,height-scl-1);
		this.body[0] = createVector(this.x,this.y);
	}

	this.show = function(){
		fill(255);
		for(var i = 0;i<this.length;i++) {
			var b = this.body[i];
			rect(b.x, b.y, this.size,this.size);
		}
	}

	this.dir = function(x, y){
		this.xspeed = x;		
		this.yspeed = y;
	}

	this.eat = function(pos){
		var d = dist(this.x,this.y,pos.x, pos.y);
		if (d < 1) {
			this.length += 1;
			return true;
		}else {
			return false;
		}
	}
}