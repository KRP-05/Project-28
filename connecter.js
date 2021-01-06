class Connector{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.004
        }
        this.pointB  = pointB
        this.connect = Constraint.create(options);
        World.add(world, this.connect);
    }
        Fly(){
        this.connect.bodyA = null
    }
    attach(body){
       this.connect.bodyA = body
        
        
    }
    display(){
        if(this.connect.bodyA){
        var pointA = this.connect.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}