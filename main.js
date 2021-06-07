difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
          video = createCapture(VIDEO);
          video.size(550 ,500);
          
          canvas = createCanvas(550 , 550);
          canvas.position(560 , 150);

          PoseNet = ml5.poseNet(video, modelLoaded);
          PoseNet.on('pose' , gotposes);
}

function modelLoaded() {
          console.log('PoseNet is Initialized');
}

function gotposes(results) {
          if (results.lenght>0) {
                    console.log(results);

                    rightWristX = results[0].pose.rightWrist.x;

                    console.log("Right Wrist X = " + rightWristX);

                    leftWristX = results[0].pose.leftWrist.x;

                    console.log("Left Wrist X = " + leftWristX);
                    difference = floor(leftWristX - rightWristX);
          textSize(difference);
          document.getElementById('font').innerHTML = "Font size of the text will be = " + difference;
          }
}

function draw() {

          background(0, 128 ,0);

          fill(0 , 54 , 42);
          textSize(50);

          text("Amol" , 50 ,400);

}

/*difference = 0;
rightWristX = 0;
leftWristX = 0;

  function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(560,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}

function draw() {
background('#6C91C2');

  document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
textSize(difference);
fill('#FFE787');
text('Peter', 50, 400);
}
*/