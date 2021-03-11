const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var block1,i=600,poly

function setup()
{
    createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
    
    ground=new Ground(width/2,height-50,width*2,20)

    stand1=new Ground(700,400,300,15);

    stand2=new Ground(1100,300,150,15)

    poly=new Polygon(250,250,25);

    sling=new Sling(poly.body,{x:250,y:250})
    

//stage 1
//layer 1
    block1=new Block(i,280,30,40)
    block2=new Block(i+40,280,30,40)
    block3=new Block(i+80,280,30,40)
    block4=new Block(i+120,280,30,40)
    block5=new Block(i+160,280,30,40)
    block6=new Block(i+200,280,30,40)

//layer 2
    block7=new Block(i+20,200,30,40)
    block8=new Block(i+60,200,30,40)
    block9=new Block(i+100,200,30,40)
    block10=new Block(i+140,200,30,40)
    block11=new Block(i+180,200,30,40)

//layer 3
    block12=new Block(i+40,140,30,40)
    block13=new Block(i+80,140,30,40)
    block14=new Block(i+120,140,30,40)
    block15=new Block(i+160,140,30,40)

//layer 4
    block16=new Block(i+60,80,30,40)
    block17=new Block(i+100,80,30,40)
    block18=new Block(i+140,80,30,40)

//layer 5
    block19=new Block(i+80,20,30,40)
    block20=new Block(i+120,20,30,40)

//layer 6
    block21=new Block(i+100,-30,30,40)

//stage 2

//layer 1
    block22=new Block(i+450,250,40,40)
    block23=new Block(i+500,250,40,40)
    block24=new Block(i+550,250,40,40)

//layer 2
    block25=new Block(i+475,200,40,40)
    block26=new Block(i+525,200,40,40)

//layer 3
    block27=new Block(i+500,100,40,40)

    Engine.run(engine);
}

function draw()
{
    background(0)


    
    ground.display();

    stand1.display();
    stand2.display();

    poly.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();

    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();

    block12.display();
    block13.display();
    block14.display();
    block15.display();

    block16.display();
    block17.display();
    block18.display();

    block19.display();
    block20.display();

    block21.display();

    block22.display();
    block23.display();
    block24.display();
  
    block25.display();
    block26.display();

    block27.display();
}

function mouseDragged()
{
    Body.setPosition(poly.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
    sling.fly();
}