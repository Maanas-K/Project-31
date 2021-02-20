class Drop{
    constructor(x,y){
        var options={
            friction:0.1,
           
        }

        this.body=Bodies.circle(x,y,30,options);
       World.add(world,this.body);

       
       this.dropArr=[];
    }
    display(){

        

        

       
        var pos=[this.body.position.x,this.body.position.y]
        this.dropArr.push(pos);

        for (var i=0; i<this.dropArr.length; i++){
            fill ("blue")
            ellipse (this.dropArr[i][0],this.dropArr[i][1],5,15)
          }

    }
    reset(){

    if(this.body.position.y>height){
        Body.setPosition(this.body,{x: random (30,770), y: random(20,100)})
    }
        
    }
}