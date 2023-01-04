class Controls{
  constructor(){
    this.forward=false;
    this.left=false;
    this.right=false;
    this.reverse=false;

    this.#addKeyboardListeners();// hash tag denotes private method
  }

  #addKeyboardListeners(){
    document.onkeydown=(event)=>{
      //=> allows us to keep the reference to the controls object above
      //using 'function(event)' stops refering to the controls object above
      switch(event.key){
        case "ArrowLeft":
          this.left=true;
          break;
        case "ArrowRight":
          this.right=true;
          break;
        case "ArrowUp":
          this.forward=true;
          break;
        case "ArrowDown":
          this.reverse=true;
          break;
        
      }
      //console.table(this); //purpose =  debug/test keypress  
    }
    document.onkeyup=(event)=>{
      switch(event.key){
        case "ArrowLeft":
          this.left=false;
          break;
        case "ArrowRight":
          this.right=false;
          break;
        case "ArrowUp":
          this.forward=false;
          break;
        case "ArrowDown":
          this.reverse=false;
          break;
        
      }
      //console.table(this);//purpose = debug/test keypress 
    }
  }
  
}