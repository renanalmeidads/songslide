import Constants from "../../constants.js";

export default class StarterLevel extends Phaser.Scene
{
    constructor() {
        super();
        this.strings = [];
    }

    preload() {
        this.load.json('shapes', '../assets/shapes.json');

        this.load.image('line0001', '../assets/line0001.png');
        this.load.image('circle', '../assets/circle.png');
        this.load.image('initial-slide', '../assets/song-part-1.png');

        this.load.image('bottom-button', '../assets/bottom-button.png');
        this.load.image('upper-button', '../assets/upper-button.png');
        this.load.image('left-button', '../assets/left-button.png');
        this.load.image('right-button', '../assets/right-button.png');
    }

    create ()
    {
        this.cameras.main.setSize(1920, 1080);
        var shapes = this.cache.json.get('shapes');
        //this.matter.world.setBounds(0, 0, game.config.width, game.config.height);

        var initialSlide = this.matter.add.sprite(0, 0, 'initial-slide', null, {shape: shapes.songPart1}).setStatic(true);
        initialSlide.setPosition(820, 2200);  // position (0,280)
        initialSlide.setScale(1);

        initialSlide.setFriction(0.03, 0, 0);

        var initialSlide2 = this.matter.add.sprite(0, 0, 'initial-slide', null, {shape: shapes.songPart1}).setStatic(true);
        initialSlide2.setPosition(3300, 6000);  // position (0,280)
        initialSlide2.setScale(1);

        initialSlide2.setFriction(0.03, 0, 0);

        // var line1 = this.matter.add.sprite(0, 0, 'line0001', null, {shape: shapes.line0001}).setStatic(true);
        // line1.setPosition(280, 280);  // position (0,280)
        // line1.setScale(.5);


        // var line2 = this.matter.add.sprite(0, 0, 'line0001', null, {shape: shapes.line0001}).setStatic(true);
        // line2.setPosition(350, 350);  // position (0,280)
        // line2.setScale(.06);

        var ball = this.matter.add.image(0, 0, 'circle', null, {shape: shapes.circle});

        // const offset = { x: 3, y: 0 };
        // circle.body.position.x += offset.x;
        // circle.body.position.y += offset.y;

        //circle.setPosition(0 + circle.centerOfMass.x, 0 + circle.centerOfMass.y);  // position (0,280)
        ball.setScale(0.05);

        ball.setBounce(.21);

        ball.setFriction(0.2, 0, 0);


        this.note = this.add.image(1920, 900, 'left-button');
        this.note.setScrollFactor(0);

       this.cameras.main.startFollow(ball, false, 0.5, 0.5);
    }

    update () {
        this.moveNote(this.note, 4);
    }

    moveNote(note, speed) {
        note.x -= speed;

        if(this.note.x < 0) {
            this.resetNotePosition(this.note);
        }
    }

    resetNotePosition(note) {
        note.x = 1920;
    }

}