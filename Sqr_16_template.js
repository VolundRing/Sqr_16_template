let buttons = [15];
var txtLds = [15];
var axisLds = [3];
let pageFilled = false;

function preload(){
  for(let i =0; i<16; i++){
    txtLds[i] = loadStrings('txtFiles/' +i +'.txt');
  }
  for(let i =0; i<4; i++){
    axisLds[i] = loadStrings('variableFiles/vari'+ i +'.txt');
  }
}

function setup() {

  createCanvas(1080,720);
  background (0);
  let x = 45;
  let y = 50;
  let w = 240;
  let h = 140;
  let b = 0;
  
  
  vertLine = new VLiner(x+495,y-3,x+495,y+594,axisLds[0],axisLds[1]);
  horLine = new HLiner(x-4,y+295,x+994,y+295,axisLds[2],axisLds[3]);
  
  for(r=0; r<2; r++){
    x=45;
    for(i=0; i<4; i++){
      buttons[b] = new Button(b,x,y,w,h,txtLds[b]);
      buttons.push(buttons[b]);
      x+=250;
      b++;
    } 
    y+=150;
  }
  //y+=20;
  for(r=0; r<2; r++){
    x=45;
    for(i=0; i<4; i++){
      buttons[b] = new Button(b,x,y,w,h,txtLds[b]);
      buttons.push(buttons[b]);
      x+=250;
      b++;
    } 
    y+=150;
  } 
}
//turn on to highlight boxes on hover over. Also uncomment Hovered function in button
 //function mouseMoved() {
 //   for(i=0; i<buttons.length; i++){
 //    buttons[i].hovered(mouseX,mouseY);
 //  }  
 //}
function mousePressed() {
  if(pageFilled == false){
    for(i=0; i<buttons.length; i++){
      buttons[i].clicked(mouseX,mouseY);
    }
   horLine.clicked(mouseX,mouseY);
   vertLine.clicked(mouseX,mouseY);
  }
  else{
   pageFilled = false; 
   for(i=0; i<buttons.length; i++){
      buttons[i].clearSel();
    }
   horLine.clearSel();
   vertLine.clearSel();
  }
}

class Button
{ 
  constructor(name,x,y,w,h,strings){//create the button add inputs such as x,y. 
  this.name =name;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.col = color(0,128,0);
  this.tCol = color('white');
  this.pgCol = color('white');
  this.pgTxtCol = color(0);
  this.selected = false;
  this.title = strings[0];
  this.text = strings;
  }
  clearSel(){
    //this.col = color(0,128,0);
    this.selected=false;
  }
  clicked(mx,my){
    if(this.selected == false){
      if(pageFilled == false){
        if (mx >= this.x && mx<=this.x+this.w && my>=this.y && my<=this.y+this.h){
          //this.col = color(0,255,0);
          this.selected = true;
          pageFilled = true;
        }
        else{
          //this.col = color(0,128,0);
          this.selected=false;
        }
      }
    }
  }
    //hovered(mx,my){
  //  if (mx >= this.x && mx<=this.x+this.w && my>=this.y && my<=this.y+this.h){
  //    //console.log("clicked" + this.name);
  //    if (!this.selected){
  //      this.col = color(0,180,0);
  //    }
  //  }
  //  else{
  //    if (!this.selected){
  //      this.col = color(0,128,0);
  //    }
  //  }
  //} 
  
  show(){
    noStroke();
    fill(this.col);
    rect(this.x,this.y,this.w,this.h);//the main box
    textSize(24);
    textAlign(CENTER,CENTER);
    fill(this.tCol);
    rectMode(CENTER);
    text(this.title,this.x+this.w/2,this.y+this.h/2,this.w-40,this.h-20);//the text of the box comes from the first line in .txt
    rectMode(CORNER);
  }
  page(){
    if(this.selected == true){
       fill(this.pgCol);
       rect(20,20,1040,680);
       textSize(16);
       fill(this.pgTxtCol);
       textAlign(LEFT);
       for (var i = 0; i < this.text.length; i++) {
         text(this.text[i], 50, 50+i*20);
       }
    }
  }
}

class VLiner{
  constructor(x1,y1,x2,y2,text1,text2){
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  this.tCol = color('white');
  this.text1 = text1;
  this.text2 = text2;
  this.selected1 = false;
  this.selected2 = false;
  this.pgCol = color('white');
  this.pgTxtCol = color(0);
  }
  clearSel(){
    this.selected1=false;
    this.selected2=false;
  }
  clicked(mx,my){
    if(this.selected1 == false){
      if(pageFilled == false){
        if (mx >= this.x1-100 && mx<=this.x1+100 && my>=this.y1-40 && my<=this.y1){//determine
          this.selected1 = true;
          pageFilled = true;
        }
        else{
          this.selected=false;
        }
      }
    }
    if(this.selected2 == false){
      if(pageFilled == false){
        if (mx >= this.x2-100 && mx<=this.x2+100 && my>=this.y2 && my<=this.y2+40){//determine
          this.selected2 = true;
          pageFilled = true;
        }
        else{
          this.selected2=false;
        }
      }
    }
  }
  page(){
      if(this.selected1 == true){
         fill(this.pgCol);
         rect(20,20,1040,680);
         textSize(16);
         fill(this.pgTxtCol);
         textAlign(LEFT);
         for (var i = 0; i < this.text1.length; i++) {
           text(this.text1[i], 50, 50+i*20);
         }
      }
      if(this.selected2 == true){
         fill(this.pgCol);
         rect(20,20,1040,680);
         textSize(16);
         fill(this.pgTxtCol);
         textAlign(LEFT);
         for (var i = 0; i < this.text2.length; i++) {
           text(this.text2[i], 50, 50+i*20);
         }
      }
    } 
 
  showL(){
  let c4 = color('white');
  stroke(color('white'));
  strokeWeight(2);
  line(this.x1,this.y1,this.x2,this.y2);
  fill(c4);
  triangle(this.x1-15,this.y1,this.x1,this.y1-10,this.x1+15,this.y1);
  triangle(this.x1-15,this.y2,this.x1,this.y2+10,this.x1+15,this.y2);
  //rect(this.x1-100,this.y1-40,200,40);
  //rect(this.x1-100,this.y2,200,40);
  textSize(24);
  textAlign(CENTER,CENTER);
  fill(this.tCol);
  rectMode(CENTER);
  strokeWeight(0.01);
  text(this.text1[0],this.x1,this.y1-25);
  text(this.text2[0],this.x2,this.y2+25);//the text of the box
  rectMode(CORNER);
  }
}
class HLiner{
  constructor(x1,y1,x2,y2,text1,text2){
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  this.tCol = color('white');
  this.text1 = text1;
  this.text2 = text2;
  this.selected1 = false;
  this.selected2 = false;
  this.pgCol = color('white');
  this.pgTxtCol = color(0);
  }
  clearSel(){
    this.selected1=false;
    this.selected2=false;
  }
  clicked(mx,my){
    if(this.selected1 == false){
      if(pageFilled == false){
        if (mx >= this.x1-40 && mx<=this.x1 && my>=this.y1-100 && my<=this.y1+100){//determine
          this.selected1 = true;
          pageFilled = true;
        }
        else{
          this.selected=false;
        }
      }
    }
    if(this.selected2 == false){
      if(pageFilled == false){
        if (mx >= this.x2 && mx<=this.x2+40 && my>=this.y2-100 && my<=this.y2+100){//determine
          this.selected2 = true;
          pageFilled = true;
        }
        else{
          this.selected2=false;
        }
      }
    }
  }
  page(){
    if(this.selected1 == true){
       fill(this.pgCol);
       rect(20,20,1040,680);
       textSize(16);
       fill(this.pgTxtCol);
       textAlign(LEFT);
       for (var i = 0; i < this.text1.length; i++) {
         text(this.text1[i], 50, 50+i*20);
       }
    }
    if(this.selected2 == true){
       fill(this.pgCol);
       rect(20,20,1040,680);
       textSize(16);
       fill(this.pgTxtCol);
       textAlign(LEFT);
       for (var i = 0; i < this.text2.length; i++) {
         text(this.text2[i], 50, 50+i*20);
       }
    }
  }
  showL(){
  let c4 = color('white');
  stroke(c4);
  strokeWeight(2);
  line(this.x1,this.y1,this.x2,this.y2); 
  fill(c4);
  triangle(this.x1,this.y1+15,this.x1-7,this.y1,this.x1,this.y1-15);
  triangle(this.x2,this.y1+15,this.x2+7,this.y1,this.x2,this.y1-15);
  //rect(this.x1-40,this.y1-100,40,200);
  //rect(this.x2,this.y1-100,40,200);
  push(); 
  textSize(24);
  fill(this.tCol);
  strokeWeight(0.01);
  rotate(-PI/2);
  text(this.text1[0],-this.y1,this.x1-20);
  rotate(PI/2);
  rotate(PI/2);
  text(this.text2[0],this.y1,-this.x2-20);
  pop();
  }
}


function draw() {
  background(0);
  if(pageFilled == false){
    for (let i=0; i<buttons.length; i++){
     buttons[i].show();
    }
    vertLine.showL();
    horLine.showL();
  }
  if (pageFilled == true){
    for (let i=0; i<buttons.length; i++){
     buttons[i].page();
    }
    vertLine.page();
    horLine.page();
  }
}
