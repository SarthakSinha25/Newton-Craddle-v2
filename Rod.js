class Rod { //class names always start with capital letter
    constructor(x,y,width,height){
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  
  display(){   
    var pos =this.body.position;
    translate(this.body.position.x, this.body.position.y);
    rectMode(CENTER);
    fill("grey");
    rect(pos.x, pos.y, this.width, this.height);
  }
};
