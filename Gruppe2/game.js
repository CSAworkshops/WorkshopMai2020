var GameScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

// GameScene einrichten

        function GameScene() {
            Phaser.Scene.call(this, { key: 'gameScene', active: true });

            this.player = null;
            this.cursors = null;
            this.score = 0;
            this.scoreText = null;
        },

// Bilder/Spritesheets laden

    preload: function () {
        this.load.image('sky', 'sky.png');
        this.load.image('star', 'star.png');
        this.load.image('bomb', 'bomb.png');
        this.load.image('platform', 'platform.png');
        this.load.image('grass', 'grass.png');
        this.load.image('grassCenter', 'grassCenter.png');
        this.load.image('grassCenter_rounded', 'grassCenter_rounded.png');
        this.load.image('grassCliffLeft', 'grassCliffLeft.png');
        this.load.image('grassCliffLeftAlt', 'grassCliffLeftAlt.png');
        this.load.image('grassCliffRight', 'grassCliffRight.png');
        this.load.image('grassCliffRightAlt', 'grassCliffRightAlt.png');
        this.load.image('grassHalf', 'grassHalf.png');
        this.load.image('grassHalfLeft', 'grassHalfLeft.png');
        this.load.image('grassHalfMid', 'grassHalfMid.png');
        this.load.image('grassHalfRight', 'grassHalfRight.png');
        this.load.image('grassHillLeft', 'grassHillLeft.png');
        this.load.image('grassHillLeft2', 'grassHillLeft2.png');
        this.load.image('grassHillRight', 'grassHillRight.png');
        this.load.image('grassHillRight2', 'grassHillRight2.png'); 
        this.load.image('grassLedgeLeft', 'grassLedgeLeft.png');
        this.load.image('grassLedgeRight', 'grassLedgeRight.png');
        this.load.image('grassLeft', 'grassLeft.png');
        this.load.image('grassMid', 'grassMid.png');
        this.load.image('grassRight', 'grassRight.png');
        this.load.spritesheet('dude', 'dude.png', { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet('fullscreen', 'fullscreen.png', { frameWidth: 64, frameHeight: 64 });
    },

// Objekte werden erstellt

    create: function () {

        //translate(500, 400);

        var XPlayerPosition = 100, YPlayerPosition = 600;

        var XPlatformPosition = XPlayerPosition;

        var image = this.add.image(500, 400, 'sky');

        image.setDisplaySize(1920, 1080);

        var platforms = this.physics.add.staticGroup();

// Plattformen werden erstellt

        platforms.create(XPlatformPosition - 30, 735, 'grassLeft').setScale(2).refreshBody();
        platforms.create(XPlatformPosition + 110, 735, 'grassMid').setScale(2).refreshBody();
        platforms.create(XPlatformPosition + 250, 735, 'grassMid').setScale(2).refreshBody();
        platforms.create(XPlatformPosition + 390, 735, 'grassMid').setScale(2).refreshBody();
        platforms.create(XPlatformPosition + 530, 735, 'grassMid').setScale(2).refreshBody();
        platforms.create(XPlatformPosition + 670, 735, 'grassMid').setScale(2).refreshBody();
        platforms.create(XPlatformPosition + 810, 735, 'grassMid').setScale(2).refreshBody();

// Border auf der linken Seite

        platforms.create(-75, 635, 'grassCenter').setScale(2).refreshBody();
        platforms.create(-75, 495, 'grassCenter').setScale(2).refreshBody();
        platforms.create(-75, 355, 'grassCenter').setScale(2).refreshBody();


        var player = this.physics.add.sprite(XPlayerPosition, YPlayerPosition, 'dude');

        player.setBounce(0.2);
        player.setCollideWorldBounds(false);

// Bewegungen werden animiert

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.cursors = this.input.keyboard.createCursorKeys();

        var stars = this.physics.add.group({
            key: 'star',
            repeat: 14,
            setXY: { x: 12, y: 0, stepX: 70 }
        });

        stars.children.iterate(function (child) {

            child.setBounceY(Phaser.Math.FloatBetween(0.5, 0.5));

        });

// Scorezähler

        this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

        this.physics.add.collider(player, platforms);
        this.physics.add.collider(stars, platforms);

        this.physics.add.overlap(player, stars, this.collectStar, null, this);

        this.player = player;

// Fullscreenbutton

        var button = this.add.image(1000 - 16, 16, 'fullscreen', 0).setOrigin(1, 0).setInteractive();

        button.on('pointerup', function () {

            if (this.scale.isFullscreen) {
                button.setFrame(0);

                this.scale.stopFullscreen();
            }
            else {
                button.setFrame(1);

                this.scale.startFullscreen();
            }

        }, this);
    },

// Updater

    update: function () {
        var cursors = this.cursors;
        var player = this.player;

// Steuerung

        if (cursors.left.isDown) {
            player.setVelocityX(-160);

            player.anims.play('left', true);
        }
        else if (cursors.right.isDown) {
            player.setVelocityX(160);

            player.anims.play('right', true);
        }
        else {
            player.setVelocityX(0);

            player.anims.play('turn');
        }

        if (cursors.up.isDown && player.body.touching.down) {
            player.setVelocityY(-330);
        }
    },

// Sterne und Punktzahl

    collectStar: function (player, star) {
        star.disableBody(true, true);

        this.score += 10;
        this.scoreText.setText('Score: ' + this.score);
    }

});



// Config

var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 400 },
            debug: false
        }
    },
    scene: GameScene, scale: {
        mode: Phaser.Scale.FIT
    }
};

var game = new Phaser.Game(config);