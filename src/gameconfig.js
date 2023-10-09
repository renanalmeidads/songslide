import StarterLevel from "./scenes/levels/starterlevel.js";

const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scene: StarterLevel,
    backgroundColor: '#ffffff',
    physics: {
        default: "matter",
        matter: {
            //debug: true
        }
    }
};

const game = new Phaser.Game(config);

export { game as default };