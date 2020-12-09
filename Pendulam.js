class Pendulam{
    constructor(x,y,r){
        var options={
            restitution:0.6,
            //friction:0.4,
            //slop:1,
            //inertia:Infinity
           };
        // to create circle.
        this.body=Bodies.circle(x,y,r,options);
        this.r=r;
        this.color=rgb(10,0,195);
        World.add(world,this.body);
    }
    display(){
        Engine.update(engine);
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(2);
        stroke("red")
        fill(this.color);
        ellipse(0,0,this.r,this.r);
    }
}