class RainDrop {
    constructor () {
        this.pos;
        this.vel;
        this.image = loadImage('blue_amogus.png');
    }

    move() {
        this.pos + this.vel;
    }

    show() {
        image(this.image, this.pos.x, this.pos.y);
    }
}