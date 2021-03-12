class Block
{
    constructor(x,y,width,height,angle)
    {
        var boptions=
        {
            isStatic:false,
            restitution:0.2,
            friction:1.0,
            density:1.0
        }

        this.body=Bodies.rectangle(x,y,width,height,boptions)
        this.width=width;
        this.height=height
        this.angle=angle

        Matter.Body.setAngle(this.body,angle)
  

    World.add(engine.world,this.body);
    }

    display()
    {
        
       var rand=Math.round(random(1,5))
        switch(rand)
        {
            case 1: fill("yellow")
                    break;
            case 2: fill("cyan")
                    break;
            case 3: fill("lime")
                    break;
            case 4: fill("pink")
                    break;
            case 5: fill("orange")
                    break;
        }
        
        var angle=this.body.angle;
        var position=this.body.position;
        angleMode(RADIANS)
        push();
        translate(position.x,position.y);
        rotate(angle)
        rectMode(CENTER);
       /* strokeWeight(7);
        stroke("brown")
        fill("orange");*/
        rect(0,0,this.width,this.height);
        pop();
    }
}