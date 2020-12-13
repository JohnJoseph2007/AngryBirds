class Log extends Base{
    constructor(x, y, height, ang) {
        super(x, y, 20, height, ang);
        this.image = loadImage("Sprites/log.png");
        this.h = height;
        Matter.Body.setAngle(this.body, ang);
    }
}