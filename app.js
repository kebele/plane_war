let kenar = 25;
let ship;
let box =[];
let boxLength = 10;
let drops = [];



function setup(){
    createCanvas(500, 500);//canvas

    //boxLength kadar kutu oluşturmak için döngü
    for(let i=0; i < boxLength; i++){
        box[i] = new Box();
    }
    

    ship = new Ship();//yeni bir gemi yapacak

    


}


function draw(){
    background(160,160,160)//canvasın rengi
    //kutuların düşmesi ve bunun ekranda görünmesi için döngü
    ship.show();
    ship.moveX();
    ship.moveY();

    

    for(let i=0; i < boxLength; i++){
        box[i].fall();
        box[i].show();
        // console.log(box[0].x, box[0].y)
    }
    
    for(let i = 0; i < drops.length; i++){
        drops[i].show();
        drops[i].move();
        
        //dropların çiçekleri vurması kontrolu
        for(let j = 0; j < box.length; j++){
            if(drops[i].hits(box[j])){
                 box[j].explode();
                drops[i].evaporate();
                // box.splice(i,1);                
                console.log("SHOOT");

            }
        }
    }

    for(let i = drops.length-1; i >= 0; i--){
        if( drops[i].toDelete){
            // drops.splice(i, 1);            
            drops.pop();
                                    
        }
    }
    gameOver();
   
}


//ship movement

function keyReleased(){
    if( key != ' '){
        ship.setDirx(0);
        ship.setDiry(0);        
    }    
}

function keyPressed(){
    if(key === ' '){
        // let drop = new Drop(width/2, height/2);// canvasın tam ortasından başlıyor
        // let drop = new Drop(ship.x, height-60);
        let drop = new Drop(ship.x, ship.y);
        //tam ship in agzından başlasın
        drops.push(drop);
    }

    if(keyCode === RIGHT_ARROW){
        // ship.move(1);
        ship.setDirx(1);
        
    }else if(keyCode === LEFT_ARROW){
        // ship.move(-1)
        ship.setDirx(-1);
        
    }else if(keyCode === UP_ARROW){
        ship.setDiry(-1);
    }else if( keyCode === DOWN_ARROW){
        ship.setDiry(1);        
    }

    console.log(box.x)
}