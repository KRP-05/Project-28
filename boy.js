class boy{
    constructor(){
        var options={
        isStatic : true
        }
        this.body = Bodies.rectangle(600,300,0,0,options);
        this.image = loadImage("boy.png")
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("brown");
        image(this.image,100,380,200,400);
      }
    }