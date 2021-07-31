// var a=13;
// console.log(a);
// var b = true;
// console.log(b);
// var c = "nisha ";
// console.log(c);
// console.log(c.length);
// console.log(c.toUpperCase());
// console.log(parseInt('13.9'));
// console.log(20+31);
// console.log("hi"+"nisha");
// console.log("a"/"b");
// console.log(1/0);
// console.log(3<2);
for(var i = 1; i<10; i = i+2){
  //console.log(i);
}

function setup() {
  createCanvas(800,400);
  ball = createSprite(400, 200, 50, 50);
  if(keyDown(DOWN_ARROW)){
    console.log("ball");
  }
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}