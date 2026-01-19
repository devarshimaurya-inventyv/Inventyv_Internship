// @ts-check

/**
 * Implement the export classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */


export class Size{
  constructor(width = 80, height = 60){
    this.width=width 
    this.height=height ;
  }

   resize(width,height){
    this.width=width;
    this.height= height;
  }  
}


export class Position{
  constructor(x=0,y=0){
    this.x=x;
    this.y=y;
  }

   move(x,y){
    this.x=x;
    this.y=y;
  }  
}

export class ProgramWindow {
  constructor(){
    this.screenSize=new Size(800,600);
    this.size=new Size();
    this.position=new Position();
  }

     resize(newSize){
     const newWidth=this.screenSize.width - this.position.x;
     const newheight=this.screenSize.height - this.position.y;

    this.size.width = Math.max(1, Math.min(newSize.width, newWidth));
    this.size.height = Math.max(1, Math.min(newSize.height, newheight));
  } 
     move(newPosition ){
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    this.position.x = Math.max(0, Math.min(newPosition.x, maxX));
    this.position.y = Math.max(0, Math.min(newPosition.y, maxY));
  }  
}

export function changeWindow(ProgramWindow ){
    ProgramWindow.size.width=400;
    ProgramWindow.size.height=300;
    ProgramWindow.position.x=100;
    ProgramWindow.position.y=150;
     return ProgramWindow
  }  