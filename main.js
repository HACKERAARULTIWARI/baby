var img="";
var status="";
objects=[];

                                                                            

function setup(){
canvas=createCanvas(500,640);
canvas.position(406,251);
video=createCapture(VIDEO);
video.hide();
objectDetector=ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML="status:detecting objects.";
}

function modelloaded(){
console.log("whatever");
status=true;
objectDetector.detect(video,gagaga);
}

function gagaga(error,results){
if(error){
console.error("heck");
}
else{
console.log(results);
objects=results;

}
}

function preload(){

}

function draw(){
image(video,0,0,500,640);
if(status != ""){
for(i = 0; i < objects.length;i++){
document.getElementById("status").innerHTML="status:object detected";
fill("red");
var percent=floor(objects[i].confidence * 100);
text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
noFill();
stroke("maroon");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}
}