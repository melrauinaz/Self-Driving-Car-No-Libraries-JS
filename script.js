const canvas=document.getElementById("myCanvas");
//canvas.height=window.innerHeight;
//moved into functio anmimate() - see why below
canvas.width=200;

//get the drawing context, 2d is fine for these purposes
const ctx = canvas.getContext("2d");
const car = new Car(100,100,30,50);

animate();

function animate(){
  car.update();
  // well no can't leave a trail where the car has been
  // although this does leave room for some afterburner affects
  // also
  canvas.height=window.innerHeight;
  car.draw(ctx);
  requestAnimationFrame(animate);
  
}