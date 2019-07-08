var bubbles = [];

function setup()
{
    createCanvas(600,400);
    for(var i=0;i<3000;i++)
    {
        var x = random(width);
        var y = random(height);
        var r = random(1,10);
        bubbles[i] = new Bubble(x,y,r);
    }
}
function draw()
{
    background(15,6,85);
    for(var i=0;i<bubbles.length;i++)
    {
        bubbles[i].move();
        bubbles[i].show();
    }
    
}