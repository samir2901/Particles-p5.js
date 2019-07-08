class Bubble
{
    constructor(x,y,r)
    {
        this.x=x;
        this.y=y;
        this.r=r;
    }
    move()
    {
        this.x += random(-5,5);
        this.y += random(-5,5);
    }
    show()
    {
        noStroke();
        fill(255,0,0);
        ellipse(this.x,this.y,this.r,this.r);
    }
}