class Pendulem {     
       constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
           var options = {
               bodyA: bodyA, 
              // bodyB: bodyB,
               length: 300,
               stiffness: 0.04,
               pointB:{x:this.offsetX, y:this.offsetY}
           }
           console.log(options)
           this.pendulem = Constraint.create(options)
           World.add(world,this.pendulem)
       }
       
       display(){
            var pointA = this.pendulem.bodyA.position ;
            var pointB = this.pendulem.pointB ;
            strokeWeight(3);
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
   }



//ok
   ///ohhhhoooooooo
   //pendulum is above the other two in index.html
   //SEQUENCE always has to be taken care of. Lets go there
   //check now 