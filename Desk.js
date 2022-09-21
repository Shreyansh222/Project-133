Status = "";
Desk_Image = "";

function preload()
{
Desk_Image = loadImage("Desk_Image.jpg");
}

function setup()
{
canvas = createCanvas(640,350);
canvas.center();
objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
console.log("Model Loaded!");
Status = true;
objectDetector.detect(Desk_Image,gotResults);
}

function gotResults(error,results)
{
if(error)
{
console.error(error);
}
console.log(results);
}

function draw()
{
image(Desk_Image,0,0,640,350);
if(Status != ""){for(i = 0; i < objects.length; i++)
{
document.getElementById("status").innerHTML = "Status: Objects Detected";
        
fill("#00FFFF");
percent = floor(objects[i].confidence * 100);
text(objects[i].label + " " + percent + "%",objects[i].x - 180, objects[i].y - 200);
noFill();
stroke("#00FFFF");
rect(objects[i].x - 180, objects[i].y - 200, objects[i].width - 2693, objects[i].height - 1750);
}
}
}