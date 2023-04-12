const canvas = document.getElementById("myCanvas");
//canvas.height=window.innerHeight;
//moved into functio anmimate() - see why below
canvas.width = 200;

//get the drawing context, 2d is fine for these purposes
const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width * 0.9);
//const car = new Car(100,100,30,50);
const car = new Car(road.getLaneCenter(1), 100, 30, 50);

animate();

function animate() {
  car.update();
  // well now, can't leave a trail where the car has been
  // although this does leave room for some afterburner affects
  canvas.height = window.innerHeight;

  ctx.save();
  // nothing on x - the y value of the car
  ctx.translate(0, -car.y + canvas.height * 0.7);
  // road comes before car :D
  road.draw(ctx);
  car.draw(ctx);

  ctx.restore();
  requestAnimationFrame(animate);

}