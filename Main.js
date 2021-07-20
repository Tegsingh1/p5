function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();

}

function draw()
{
    image(video, 230, 150, 220, 200);
    
    fill(255, 0, 0);
    stroke(0, 128, 0);
    circle(50, 50, 80);

    fill(0, 120, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);

    rect(90, 40, 460, 20);

    fill(255, 0, 0);
    stroke(0, 128, 0);
    circle(550, 50, 80);

    
    fill(0, 120, 0);
    stroke(0, 128, 0);
    rect(90, 425, 460, 20);
    
    
    rect(90, 40, 460, 20);

    fill(255, 0, 0);
    stroke(0, 128, 0);
    circle(50, 425, 80);

    fill(255, 0, 0);
    stroke(0, 128, 0);
    circle(550, 425, 80);
}