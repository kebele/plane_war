// function gameOver(){
//     for(let i = 0; i < boxLength; i++){
//         if(box[i].y+kenar == block.y){
            
//             for(let j = 1; j < (block.blockLength/kenar); j++){
//                 if(box[i].x == block.x+j*kenar || box[i].x+kenar == block.x + j*kenar){
//                     noLoop();
                    
//                     fill(255,0,0);
//                     text("game over", width/2-60, 100);
//                     break;
//                 }
//             }
//         }
//     }
// }

function gameOver(){
    // let d = (ship.x, ship.y, box.x, box.y);
    if( ship.x == box.x || ship.y == box.y){
        noLoop();
        fill(255,0,0);
                    text("game over", width/2-60, 100);
    }
    
}

// let d = dist(this.x, this.y, box.x, box.y)
//         if ( d < this.r + box.r){        
//             // console.log("hit")
//             // this.toDelete = true;            
//             return true
//         }else{
//             return false
//         }