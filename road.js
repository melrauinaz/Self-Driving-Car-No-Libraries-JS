class Road{
  constructor(x,width,laneCount=3){
    this.x=x;
    this.width=width;
    this.laneCount=laneCount;
    
    // center the car on the road
    this.left=x-width/2;
    this.right=x+width/2;

    // make the road go on forever
    const infinity = 1000000;
    this.top=-infinity;
    this.bottom=infinity;

    const topLeft={x:this.left,y:this.top};
    const topRight={x:this.right,y:this.top};
    const bottomLeft={x:this.left,y:this.bottom};
    const bottomRight={x:this.right,y:this.bottom};
    this.borders=[
      [topLeft,bottomLeft],
      [topRight,bottomRight]
    ];
  } 

  // no matter the number of lanes the car finds the center of the lane
   getLaneCenter(laneIndex){
     const laneWidth=this.width/this.laneCount;
     return this.left+laneWidth/2+
       // added min causing car to stay on a lane visible on canvas
        Math.min(laneIndex,this.laneCount-1)*laneWidth;
   } 

  draw(ctx){
    ctx.lineWidth=5;
    ctx.strokeStyle="white";

    for(let i=1;i<=this.laneCount-1;i++){
      const x=lerp(//interpolate the positioning of the lanes
        this.left,
        this.right,
        i/this.laneCount // think 0/,1/3,2/3,3/3 mel :)
      );
      
        
    
     
    
      ctx.setLineDash([20,20]);
      ctx.beginPath();
      ctx.moveTo(x,this.top);
      ctx.lineTo(x,this.bottom);
      ctx.stroke();
      
      // no longer needed using DRY above
      // ctx.beginPath();
      // ctx.moveTo(this.right,this.top);
      // ctx.lineTo(this.right,this.bottom);
      // ctx.stroke();
    } 
    //set up borders so we can have the car 'see' the borders later
    // setup to draw borders seperatly so the 'street' can handle curves in the future :)
   ctx.setLineDash([]);
    this.borders.forEach(border=>{
      ctx.beginPath();
      ctx.moveTo(border[0].x,border[0].y);
      ctx.lineTo(border[1].x,border[1].y);
      ctx.stroke();
    })
    
  }
}






    
