class RainDrop {
    constructor (img) {
        this.pos = createVector(random(210)+90, 0);
        this.vel = createVector(0, random(9, 11));
        this.image = img;
    }

    move() {
        this.pos.add(this.vel);
        if (this.pos.y > height) {
            this.pos.y = 0;
        }
    }

    show() {
        image(this.image, this.pos.x, this.pos.y, 10, 10);
    }
}