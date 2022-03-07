
import { LightningElement, track } from 'lwc';

export default class Game extends LightningElement {
    score;
    blockSize = 20;
    @track gameBlocks = [];
    
    renderComplete = false;

    xSpeed = 1;
    ySpeed = 0;

    xHead = 0;
    yHead = 0;

    xMax;
    yMax;


    startGame () {
        setInterval(() => {
            this.moveSnake();
        }, 300);
    }

    moveSnake() {
        let currentPosition = this.gameBlocks.findIndex(x => x.id === `${this.xHead}:${this.yHead}`);
        this.gameBlocks[currentPosition].snake = false;
        this.gameBlocks[currentPosition].class = '';

        this.xHead += this.xSpeed;
        this.yHead += this.ySpeed;

        // x
        if(this.xHead >= this.xMax) { 
            this.xHead = 0;
        } if(this.xHead < 0) { 
            this.xHead = this.xMax - 1;
        }
        // y
        if(this.yHead >= this.yMax) { 
            this.yHead = 0;
        } if(this.yHead < 0) { 
            this.yHead = this.yMax - 1;
        }
        
        let newPosition = this.gameBlocks.findIndex(x => x.id === `${this.xHead}:${this.yHead}`);
        this.gameBlocks[newPosition].snake = true;
        this.gameBlocks[newPosition].class = 'snake';
    }


    addKeyBoardControls() {
        window.addEventListener('keydown', (e) => {
            e.preventDefault();
            console.log(e.key)
            switch(e.key) {
                case 'i':
                    this.xSpeed = 0;
                    this.ySpeed = -1;
                    break;
                case 'k':
                    this.xSpeed = 0;
                    this.ySpeed = 1;
                    break;
                case 'j':
                    this.xSpeed = -1;
                    this.ySpeed = 0;
                    break;
                case 'l':
                    this.xSpeed = 1;
                    this.ySpeed = 0;
                    break;
            }
        });
    }

    renderedCallback() {
        if(!this.renderComplete) {    
            let eWidth = this.template.querySelector('.game-container').clientWidth;
            let eHeight = this.template.querySelector('.game-container').clientHeight;

            this.xMax = Math.floor(eWidth/this.blockSize);
            this.yMax = Math.floor(eHeight/this.blockSize);

            let tmpBlocks = [];
            for (let y = 0; y < this.yMax; y++){
                for(let x = 0; x < this.xMax; x++){
                    let obj;
                    if(x === 0 && y === 0){
                        obj = {id: `${x}:${y}`, snake: true, food: false, class: 'snake'};
                    }
                    else {
                        obj = {id: `${x}:${y}`, snake: false, food: false, class: ''};
                    }
                    tmpBlocks.push(obj);
                }
            }
            this.renderComplete = true;
            this.gameBlocks = tmpBlocks;
            this.addKeyBoardControls();
            this.startGame();
        }
    }
}