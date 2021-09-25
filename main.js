var mx=0;
var my=0;

function preload()
{
    mi=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("poseNet Is Initialized");
}

function gotPoses(results)
{
 if(results.length>0){
     console.log(results);
     mx= results[0].pose.nose.x-10;
     my = results[0].pose.nose.y+4;
     console.log("mustachex = "+results[0].pose.nose.x);
     console.log("mustachey = "+results[0].pose.nose.y);
 }
}

function draw()
{
image(video, 0, 0, 300, 300);
image(mi, mx, my, 25, 25);
}

function take_snapshot()
{
    save('My Mustache.png');
}