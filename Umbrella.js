class UM{
    constructor(x,y){
        var options={
            isStatic:true
        }

        this.body= Bodies.circle(x,y,70,options)
        World.add(world,this.body)

        
    }

}