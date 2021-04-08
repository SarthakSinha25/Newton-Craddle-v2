class Bob {
    constructor(x,y,radius){

        var options = {
            'isStatic':false, 
            'restitution':1,
            'density':0.8,
            'friction':0
             
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill("Pink");
        ellipse(pos.x, pos.y, this.radius, this.radius);
      }
    }
    //k ,ok mam
    //now do one thing.. wither just close liver server and launch it again. try?
    //link in vsc?----OK
//nothing
    //if stilld doesnt work, upload the project to github and send me the lin to repo
    //upload and send
    //no no whatsapp.. you proceed to next project