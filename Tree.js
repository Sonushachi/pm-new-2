class Tree{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.treeWidth = 450;
        this.treeHeight = 600;
        this.treeThickness = 10;
        this.image  = loadImage("images/tree.png");
        this.bBody = Bodies.rectangle(this.x,this.y,this.treeWidth,this.treeThickness,{isStatic:true});
        this.lBody = Bodies.rectangle(this.x,this.y,this.treeThickness,this.treeHeight,{isStatic:true});
        this.rBody = Bodies.rectangle(this.x + this.treeWidth,this.y,this.treeThickness,this.treeHeight,{isStatic:true});
        World.add(world,this.bBody);
        World.add(world,this.lBody);
        World.add(world,this.rBody);
    }

    display(){
        var posBottom = this.bBody.position;
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.treeWidth,700);
    }
}