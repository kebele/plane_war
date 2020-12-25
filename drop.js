function Drop(x,y){
    this.x = x;
    this.y = y;
    this.r = 8;
    this.toDelete = false;

    
    this.show = function(){
        noStroke();
        fill(50, 0, 255)
        // ellipse(this.x, this.y, 16, 16);
        // ellipse(this.x, this.y, this.r*2, this.r*2);
        rect(this.x, this.y,7,12)
    } 

    this.evaporate = function(){
        this.toDelete = true;
    }

    this.hits = function(box){
        let d = dist(this.x, this.y, box.x, box.y)
        if ( d < this.r + box.r){        
            // console.log("hit")
            // this.toDelete = true;            
            return true
        }else{
            return false
        }
    }

    this.move = function(){
        this.y = this.y -5;//5 speed için
    }
}