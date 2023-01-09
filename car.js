class Car{
    constructor(x,y,width,height){// properties
    this.x=x;//attributes
    this.y=y;
    this.width=width;
    this.height=height;

    // well cars still don't stop on a dime... so lets fix that
    this.speed=0;
    this.acceleration=0.2;
    // stop the car from going to fast, give it some friction
    this.maxSpeed=3;
    // maybe declare maxspeedreverse here in future
    this.friction=0.05;

    // fix to follow laws of physics
    this.angle=0;
    
    this.controls=new Controls()
    
  }
// update method
  update(){
    this.#move();
  }

  #move(){
    // write our update method
    //update(){
      //up the y axis
      if(this.controls.forward){
        this.speed+=this.acceleration;
      }
      //down the y axis
      if(this.controls.reverse){
        this.speed-=this.acceleration;
      }
      
      if(this.speed>this.maxSpeed){
        this.speed=this.maxSpeed;
        
      }
      // control speed/friction of car in reverse
      // also see maxspeedreverse comment in constructor function
      if(this.speed<-this.maxSpeed/2){
        this.speed=-this.maxSpeed/2;
      }
      // ** figure out how to track value of speed in console for clarity
      if(this.speed>0){
        this.speed-=this.friction;
      }
      if(this.speed<0){
        this.speed+=this.friction;
      }
      // keep the car from moving when keys(gas) are not depressed
      if(Math.abs(this.speed)<this.friction){
        this.speed=0;
      }
      // when backing up, left right controls were responding in reverse of what they should - implemented flip
      
      if(this.speed!=0){
        const flip=this.speed>0?1:-1;
          // implementing left and right
        if(this.controls.left){
          // implement better physics then 'this.x-=2;'
          this.angle+=0.03*flip;
        }
        if(this.controls.right){
          //this.x+=2
          this.angle-=0.03*flip;
        }
      }
  
      // this.y-=this.speed;
      this.x-=Math.sin(this.angle)*this.speed;
      this.y-=Math.cos(this.angle)*this.speed;
     
    }
  //end update method
  
 
  
// draw method
  draw(ctx){
    // rotation using canvas ctx
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(-this.angle);
    
    ctx.beginPath();
    ctx.rect(
      -this.width/2,
      -this.height/2,
      this.width,
      this.height      
    );
    ctx.fill();

    ctx.restore();
  
  }
  
}