m = ""
m1 = ""

function preload()
{
    loadSound("m.mp3", "m1.mp3")
}

function setup()
{
    canvas = createCanvas(600,500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
}

function draw()
{
    image(video, 0, 0, 600, 500);
}