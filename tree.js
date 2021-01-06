class tree{
    constructor(){
        var options={
        isStatic : true
        }
        this.body = Bodies.rectangle(600,300,0,0,options);
        this.image = loadImage("tree.png")
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("brown");
        image(this.image,440,110,350,600);
      }
    }
