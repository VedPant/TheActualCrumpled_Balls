class Paper{
    constructor(){
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
    }
    this.body= Bodies.circle(100,100,20,options);
    this.width=20;
    this.height=20;
    World.add(world, this.body);
    }


    display(){
        var pos=this.body.postion;
        ellipse(pos.x,pos.y,this.width,this.height)
    }
 }