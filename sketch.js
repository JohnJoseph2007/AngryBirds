const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var en, wo;
var box1, ground1, box2;

function setup(){
    var canvas = createCanvas(1200,400);
    en = Engine.create();
    wo = en.world;

    //LEVEL 1

    box1 = new Box(700, 390-35, 70, 70);
    box2 = new Box(920, 390-35, 70, 70);

    pig1 = new Pig((700+920)/2, 390-(35/2));

    log1 = new Log((700+920)/2, 390-45, 300, PI/2);

    //LEVEL 2

    box3 = new Box(700, 335, 70, 70);
    box4 = new Box(920, 335, 70, 70);

    pig2 = new Pig((700+920)/2, 320);

    log2 = new Log((700+920)/2, 320, 300, PI/2);

    //LEVEL 3

    box5 = new Box((700+920)/2, 300, 70, 70);

    log3 = new Log(760, 260, 150, PI/4);
    log4 = new Log(870, 260, 150, -(PI/4));

    //BIRD

    bird1 = new Bird(200, 200);

    ground1 = new Ground(600, 390);
}

function draw(){
    background(0);
    Engine.update(en);
    box1.display();
    box2.display();
    ground1.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}