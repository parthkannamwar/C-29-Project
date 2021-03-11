class Block
{
    constructor(x,y,width,height)
    {
        var boptions=
        {
            isStatic:false,
            restitution:0,
            friction:6,
            density:2
        }

        this.body=Bodies.rectangle(x,y,width,height,boptions)
        this.width=width;
        this.height=height
  

    World.add(engine.world,this.body);
    }

    display()
    {
        
        push();

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
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop();
    }
}