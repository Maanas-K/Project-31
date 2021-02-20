//I have exams and thus wasnt able to give this project much time

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var world,engine;

var drops;
var umbrella;
var manIMG;
var thunder,thunder1,thunder2,thunderFrame,rand;


function preload(){
   manIMG=loadImage("walking_1.png") ;
   thunder1=loadImage("1.png")
   thunder2=loadImage("2.png")

}

function setup(){
    createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world; 
    
    drops=new Drop(random(0,600),random(0,10))
    umbrella=new UM(300,320)
    
}

function draw(){
    background("black");

    

    

    

    drops.display();
    drops.reset();

    image (manIMG,300,320,300,300)

    Thunder();
}  
function Thunder(){
    rand=Math.round(random(1,4))

    if(frameCount%80==0){
        thunderFrame=frameCount;
        thunder=createSprite(random(10,570),random(10,30),10,10)

        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;

            case 2: thunder.addImage(thunder2);
            break;

            default:break;

        }
        thunder.scale=random(0.3,0.5)
    }
} 

