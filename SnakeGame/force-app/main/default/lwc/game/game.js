
import { LightningElement, track } from 'lwc';

export default class Game extends LightningElement {
    score;
    blockSize = 20;
    @track gameBlocks = [];
    
    renderComplete = false;

    renderedCallback() {
        if(!this.renderComplete) {    
            let eWidth = this.template.querySelector('.game-container').clientWidth;
            let eHeight = this.template.querySelector('.game-container').clientHeight;

            let xMax = Math.floor(eWidth/this.blockSize);
            let yMax = Math.floor(eHeight/this.blockSize);

            let tmpBlocks = [];
            for (let y = 0; y < yMax; y++){
                for(let x = 0; x < xMax; x++){
                    let obj = {id: `${x}:${y}`};
                    tmpBlocks.push(obj);
                }
            }
            this.gameBlocks = tmpBlocks;
        }
        this.renderComplete = true;
    }
}