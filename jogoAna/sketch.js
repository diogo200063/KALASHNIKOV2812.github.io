src="path/to/p5.sound.js"
var xd = 200;
var xa = [];
var y = []; 
var cont = 0;
var estadoTiro = false;
var xt;
var yt;
var distancia = [];
var estadoColisao = [];
var estadoCInimigo = [];
var p=0;
var f = 1;
var vida = 3;
var yb = [];
var xab = [];
var estadoBonus = false;
var tela = 1;
var img = [];
var som;
var carinha = [];


function preload(){
  for(i = 1; i<=7; i++){
    img[i] = loadImage('img'+i+'.png');
  }
  soundFormats('mp3','ogg');
  som=loadSound('o_velho_e_o_mar_cortado.mp3');
}

//imageeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeens
// 1 - menina
// 2 - floresta fundo
// 3 - cara triste
// 4 - cara tedio
// 5 - cara feliz
// 6 - estrela 
// 7 - coracao


function setup() {
  createCanvas(400, 400);
  for(i = 0;i<100;i++){
    xa[i] = Math.random()*377.5
    xab[i] = Math.random()*377.5
    estadoColisao[i] = false;
    carinha[i] = 3;
    estadoCInimigo[i] = false;
  }
  y[0] = 0
  for(i = 1; i <100;i++){
    y[i] = y[i-1]-200
  }
  som.setVolume(0.1);
  som.play();
  som.loop();
}

function draw(){
  //telaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas
  if(tela==1){
    background(225);
    image(img[2],-100,-40);
    fill(0);
    textSize(15);
    text ("Este é o jogo As Aventuras de Manú." + "\n" + "\n" + "Utilize os comandos Ctrl para disparar os tiros e as" + "\n" + "setas do teclado para movimentar a menina Manú." + "\n" + "\n" + "Aperte a seta para cima para iniciar.", 20, 100);
    if(keyIsDown(UP_ARROW)){
      tela=2;
    }
  }

  if(tela==3){
    background(255);
    image(img[2],-100,-40);
    fill(0);
    textSize(30);
    text("Perdestes, Camarada!",50, 150);
    textSize(20)
    text("Chegastes na fase "+f, 50, 175)
    text("Desejas tu jogar novamente?"+"\n"+"  (Se sim, aperte enter)" ,50,200)
      if(keyIsDown(ENTER)){
        tela=2;
     }
   }
  
  
  if(tela == 4){
    background(255);
    image(img[2],-100,-40);
    fill(0);
    textSize(30);
    text("Ganhastes, Camarada!",50,150);
    textSize(15);
    text("Obrigada por ter ajudado a menina Manú a espalhar"+"\n"+"mais amor pelo mundo!",40, 175);
    textSize(20)
    text("Desejas tu jogar novamente?"+"\n"+"(Se sim, aperte a seta para cima)" ,50,250)
      if(keyIsDown(UP_ARROW)){
        tela=2;
      }
  }
  
  if(tela==2){
    background(0, 150+(10*f), 240+(10*f));
    image(img[2],-100,-40);
//inicio das equacoes do emojiiiiiiiiiiiiiiiiiiiiiiiiiii
    for(i = 0;i<100;i++){
      if(y[i] <=500){
        y[i] = y[i]+1/2*f;
      }
      image(img[3],xa[i],y[i], 25, 25);
    }
//equacao da colisao do tiro com o emojiiiiiiiiiiiiiiiiiiiiii
    for(i = 0;i<100;i++){
      distancia[i]=dist(xt,yt,xa[i],y[i]);
      if(distancia[i]<=25&&carinha[i]<5){
        estadoColisao[i] = true
        xt = 500;
        p = p+10
      }
      if(estadoColisao[i]==true){
        image(img[5],xa[i],y[i], 25,25); 
        carinha[i] = carinha[i]+2
      }
    }
  // colisao do emoji com a bonequinhaaaaaaaaaaaaaaaaa
    for(i = 0;i<100;i++){
      distancia[i]=dist(xd,375,xa[i],y[i]);
      if(distancia[i]<=37&&carinha[i]<5){
       estadoCInimigo[i] = true;
      }
      else{
      estadoCInimigo[i] = false;
      }
      if(estadoCInimigo[i]==true){
        vida--
        y[i] = 500;
      }
    }
  
  //inicio das equacoes pra bonequinhaaaaaaaaaaaaaaaaaaaaaaaaaaaa
  if (keyIsDown(LEFT_ARROW) && xd >= 0){
    xd-=4;
  }
  if (keyIsDown(RIGHT_ARROW) && xd<=350){
    xd+=4;
  }
    image(img[1], xd, 400, 50, -60)
  if(keyIsDown(CONTROL)&&estadoTiro==false){
   xt = xd+25
   yt = 375
  estadoTiro = true
}

  if(estadoTiro==true){
    image(img[7],xt,yt,25,25);
    yt = yt-7-1*f
  }
  if(yt<0){
    estadoTiro = false
  }
    
    //desenho do bonussssssssssssssssssssssssssssssssssss
  for(i = 0;i<33;i++){
   yb[i] = (y[(i+3)*2])*1.2+f
  }
  for(i = 0;i<33;i++){
    image(img[6],xab[i],yb[i], 40, 40); //imagem, movimento, dimensões
  }
  for(i = 0;i<33;i++){
   distancia[i]=dist(xd,375,xab[i],yb[i]);
   if(distancia[i]<=37){
    estadoBonus = true
    break;
   }
   else{
    estadoBonus = false;
   }
   
  }
  if(estadoBonus==true){
      vida++;
      yb[i] = 500;
      xab[i] = 500;
     
   }
    
    
//fazer o textooooooooooooooooooooooooooooooooooooooooooooooooooo
  fill(0)
  textSize(15)
  text("pontuação: "+p, 280, 20) 
  text("vida: "+vida, 20, 20)
  text("fase: "+f, 150, 20)
  if(y[10*f-1] >= 400){
    if(p<75*f||vida <= 0){
      tela=3
    }else{
      f++;
  }
  if(f == 11){
    tela = 4
  }
  }
    //condiçao pra reiniciarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
  if(tela!==2){
    image(img[3],xa[i],y[i], 25, 25);
    f = 1;
    vida = 3;
    p = 0;
    for(i = 0;i<100;i++){
      xa[i] = Math.random()*377.5
      xab[i] = Math.random()*377.5
      carinha[i] = 3;
      estadoColisao[i] = false
    }
    y[0] = 0
    for(i = 1; i <100;i++){
      y[i] = y[i-1]-200
    }
  }
}
}
