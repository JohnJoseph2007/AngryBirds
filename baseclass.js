class Base {
    constructor(x, y, width, height, ang){
        var options = {
            restitution : 0.8,
            friction : 0.5,
            density : 0.4
        }
        this.image = loadImage("Sprites/base.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.w = width;
        this.h = height;
        World.add(wo, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop();
    }
}