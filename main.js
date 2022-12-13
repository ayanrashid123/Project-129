song = "";
leftWristX = 0;
leftWristY = 0;

scoreLeftWristX = 0;
status1 = "";

rightWristX = 0;
rightWristY = 0;
function preload() {
 song = loadSound("music.mp3");   
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function gotPoses(results) {
    if(results.length > 0)
{
    console.log(results);
    scoreLeftWristX = results[0].pose.keypoints[9].score;
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX +"leftWristY = "+ leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX +"rightWristY = "+ rightWristY);
}
}
function modelLoaded() {
    console.log('PoseNet Is Initialized')
}

function draw() {
    image(video, 0, 0, 600, 500);
    fill("#0000FF")
    storke("#0000FF")
    status1 = song.isPlaying()
    if(scoreLeftWristX > 0.2)
    {
        circle(leftWristX,leftWristY,20);
        song2.stop()
        if(status1 == false)
        {
            song2.play()
        }
    }
}

function play() {
    song.play();
}