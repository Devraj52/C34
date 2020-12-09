class Hang{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length:220,
            angularStifness:1.0
        }
        
        this.pointB = pointB;
        this.pointX=bodyA.x;
        this.pointY=bodyA.y-250;
        this.hang = Constraint.create(options);
        //this.color=rgb(100,200,255);
        World.add(world, this.hang);
    }
    display(){
        
        if(this.hang.bodyA){
            var pointA = this.hang.bodyA.position;
            var pointB = this.pointB;
            push();
            //translate(this.hang.posititon.x,this.hang.position.y);
            strokeWeight(3);
            stroke(5,5,5);
            //fill(this.color)
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();
        }
    }
    
}