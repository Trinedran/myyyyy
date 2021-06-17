canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var car1_width = 100;
var car1_height = 90;
car1_x = 10;
car1_y = 10;
car1_img = "car1.png";

function add(){

   car1_imgTag = new Image();
   car1_imgTag.onload = uploadrover;
   car1_imgTag.src = car1_img;
}

function car1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
 { keyPressed = e.keyCode;
     console.log(keyPressed);
      if(keyPressed == '38')
       { up();
         console.log("up"); }

          if(keyPressed == '40')
           { down(); 
            console.log("down"); } 
            
            if(keyPressed == '37') 
            { left(); 
                console.log("left"); }

                if(keyPressed == '39') 
                { right(); 
                    console.log("right"); } }