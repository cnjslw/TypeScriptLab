class ScorePanel {
    score: number = 0;
    level: number = 1;
    maxLevel:number;
    scoreElemt: HTMLElement;
    levelElemt: HTMLElement;

    constructor(maxLevel:number = 10) {
        this.scoreElemt = document.getElementById('score')!;
        this.levelElemt = document.getElementById('level')!;
        this.maxLevel = maxLevel;
    }

    //add score
    addScore() {
        this.score++;
        this.scoreElemt.innerHTML = this.score + '';
        if(this.score % 10 === 0 && this.score != 0){
            this.addLevel();
        }
    }

    //add level
    addLevel() {
        if (this.level < this.maxLevel) {
            this.levelElemt.innerHTML = ++this.level + '';
        }
    }
}

export default ScorePanel;