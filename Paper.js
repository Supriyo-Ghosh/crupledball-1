class Paper {
    constructor(x,y,radius) {
        var options ={
          restitution: 1,
          friction: 0.5,
          density: 1.2
        }
         this.radius = radius
        this.body = Bodies.circle(x, y,this.radius, options);
        World.add(world,this.body);
    }
    display() {
        var pos=this.body.position
        push();
        translate(pos.x, pos.y);
        
        ellipse(CENTER);
        fill("yellow");
        ellipse(0,0,this.radius,this.radius);
        pop()
    }
}