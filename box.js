function Box(){
    this.x = floor(random(0, kenar)) * kenar;//kutunun x koordinatı
    this.y = floor(random(-kenar,0)) * kenar;//kutunun y kordinatı
    this.r = 15;
    this.ySpeed = 1.5;//kutunun düşüş hızı

    
    this.fall = function(){
        this.y += this.ySpeed;// kutuların düşüşü
        //kutuların sürekli düşmesi için sorgu
        if(this.y > height ){
            //kutunun ye koordinatı > canvasın yüksekliği ise yeniden kutu oluşturacak
            this.x = floor(random(0,kenar))*kenar;
            this.y = floor(random(-kenar,0))*kenar;
            //score++;
        }
    }

    this.explode = function(){
        // this.r = 8;
        // this.x += 5;
        this.y += -100;
    }

    this.show = function(){
        fill(255,0,0);//kutunun rengi kırmızı
        // rect(this.x, this.y, kenar, kenar)
        ellipse(this.x, this.y, this.r*2, this.r*2)
    }
}