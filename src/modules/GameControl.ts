import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    dirtection: string = '';
    isLive: boolean = true;
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    init() {
        //keyboard Event
        document.addEventListener('keydown', this.keydownHandle.bind(this));
        this.run();
    }

    keydownHandle(event: KeyboardEvent) {
        this.dirtection = event.key;
    }

    run() {
        //move logic
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.dirtection) {
            case "ArrowUp": Y -= 10; break;
            case "ArrowDown": Y += 10; break;
            case "ArrowLeft": X -= 10; break;
            case "ArrowRight": X += 10; break;
        }

        this.checkEat(X, Y);

        // game over logic
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        }
        catch (e: any) {
            alert(e.message + 'Game Over!!!');
            this.isLive = false;
        }
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }

    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }
}

export default GameControl;