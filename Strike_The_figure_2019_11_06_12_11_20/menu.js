function menu(){
  background(imgMenu);  
  textSize(70);
  fill('rgb(29, 233, 182)');
  stroke(25);
  strokeWeight(20);
  text('Strike The Figure',70, 85)
  
  fill('rgba(0, 150, 136,0.9)');
  noStroke();
  rect(130,150,400,70,100);
  
  textSize(30);
  fill(0);
  text('Jogar',285,190);
  
  fill('rgba(0, 150, 136,0.9)'); 
  noStroke();
  rect(130,250,400,70,100); 
  
  textSize(30);
  fill(0);
  text('Tutorial',280,290);
  
  fill('rgba(0, 150, 136,0.9)'); 
  noStroke();
  rect(130,350,400,70,100); 
  
  textSize(30);
  fill(0);
  text('Equipe',280,390);
  
  noFill();
  stroke(120);
  strokeWeight(10);
  rect(130,y,400,70,100);
}
