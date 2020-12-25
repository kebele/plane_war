function Ship(){
    this.blockLength = kenar;
    this.x = width/2;//gemi tam ortada başlayacak
    this.xdir = 0;//hangi yöne gideceğine dair
    this.y = height -20;
    this.ydir = 0;

    this.show = function(){
        fill(255)//beyaz gemi
        rectMode(CENTER)
        rect(this.x, this.y, this.blockLength,40)
    }

   this.setDirx = function(dir){
        this.xdir = dir;
    }
   this.setDiry = function(dir){
        this.ydir = dir;
    }

    this.moveX = function(dir){
        this.x += this.xdir * 5//5px kaysın gibi
    }
    this.moveY = function(dir){
        this.y += this.ydir * 5//5px kaysın gibi
    }

    
}