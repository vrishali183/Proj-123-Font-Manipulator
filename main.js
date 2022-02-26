difference = 0;
rightWristX = 0;
leftWristX = 0;

  function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(560,150);

}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);

   leftWristX = 
    rightWristX = 
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " +   + " rightWristX = "+  + " difference = " + );
  }
}

function draw() {
background('#6C91C2');

  document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
textSize(difference);
fill('#FFE787');
text('Miracle', 50, 400);
}
