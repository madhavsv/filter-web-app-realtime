function preload() {
    
}
function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);

    
}
function draw() {
    Image(video,0, 0, 300, 300);
    
}
function take_Snapshot() {
    save('myFilterImge.png')
    
}
function modelLoaded(params) {
    console.log('poseNet is intialized')
    
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x=" + results[0].pose.nose.x)
        console.log("nose y=" + results[0].pose.nose.y)
    }
}