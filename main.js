function preload(){

}

function setup(){
    canvas = createCanvas(650,480);
    canvas.position(290,250);

    video= createCapture(VIDEO);
    video.hide();

    tint_color="";
}

function draw(){
    tint(tint_color);

    fill(0,255,255)
    rect(50,20,550,450);
    
    image(video,200,160,275,225);
    fill(0,255,0)
    circle(50,50,100);
    circle(600,50,100); 
    circle(50,430,100);
    circle(600,430,100);
}

function filter_tint(){
    tint_color=document.getElementById("color_name").value;

}

function take_snapshot(){
    save('picture.png')
}

