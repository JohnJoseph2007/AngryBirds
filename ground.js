class Ground {
    constructor(x, y){
        var gr = {
            isStatic : true
        }

        this.ground = Bodies.rectangle(x, y, 400*3, 20, gr);
        World.add(wo, this.ground);
    }

    display(){
        var pos = this.ground.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, 1200, 20);
    }
}