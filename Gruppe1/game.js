let config = {
	type: Phaser.AUTO,
	width: 1490,
	height: 715,
	physics: {
		default: "arcade",
		arcade: {
			gravity: {
				y: 200
			},
			debug: false
		}

	},
	scene: {
		preload: preload,
		create: create,
		update: update
	}
};

let game = new Phaser.Game(config);
let image = {};
let image2 = {};
//var barrel = {};
//var bullets = {};
var Velocity = 5
var Velocity2 = 5
var Frame = 0;
var Spawn = 400;
var VelocityUp = -3.5
var VelocityUp2 = -3.5
var Rotation = 0
var Rotation2 = 0
let block1 = {};
let block2 = {};
let block3 = {};
let block4 = {};
let block5 = {};
let block6 = {};
let block7 = {};
let block8 = {};
let block9 = {};
let block10 = {};
let block11 = {};
let block12 = {};
var sprite;
var lockText;
var Down2 = false;
var Down = false;
var Up = false;
var Up2 = false;
var Left = false;
var Left2 = false;
var Right = false;
var Right2 = false;
var collade1block = false;
var collade2block = false;
var collade3block = false;
var collade4block = false;
var collade5block = false;
var collade6block = false;
var collade7block = false;
var collade8block = false;
var collade9block = false;
var collade10block = false;
var collade11block = false;
var collade12block = false;
var collade1block2 = false;
var collade2block2 = false;
var collade3block2 = false;
var collade4block2 = false;
var collade5block2 = false;
var collade6block2 = false;
var collade7block2 = false;
var collade8block2 = false;
var collade9block2 = false;
var collade10block2 = false;
var collade11block2 = false;
var collade12block2 = false;

function preload(){
	//this.load.image("bullet", "bulletSilver_outline_for_Black.png");
	//this.load.image("barrel1", "barrelBlack_outline.png");
	this.load.image("crosshair", "crosshair_red_small.png");
	this.load.image("tank1_black", "tankBlack_outline.png");
	this.load.image("tank2_blue", "tankBlue_outline.png")
	this.load.image("Sandbag1", "sandbagBrown.png")
	this.load.image("barrelrustgr1", "barrelGrey_sde_rust.png")
	this.load.image("barrelgreenup", "barrelGreen_up.png")
	this.load.image("tree_s1", "treeSmall.png")
	this.load.image("barrelgrey1", "barrelGrey_side.png")
	this.load.image("barrelred1", "barrelRed_side.png")
	this.load.image("barrelgreendamaged", "barrelGreen_side_damaged.png")
	this.load.image("oil1", "oil.png")
	this.load.image("tree_s2", "treeSmall2.png")
	this.load.image("tree_l1", "treeLarge.png")
	this.load.image("tree_l2", "treeLarge2.png")
	this.load.image("tree_s3", "treeSmall3.png")
	//this.load.image("backgroundpartgrass", "grass.png");
	//this.load.image("backgroundpartsand", "sand.png");
	//this.load.image("backgroundpartdirt", "dirt.png");
	this.load.spritesheet("background", "Plainsfinit.png", { frameWidth: 32, frameHeight: 32 });
}
function create(){
	//this.input.keyboard.on("keydown", onevent);
	this.input.keyboard.on("keydown_S",()=>Down = true);
	this.input.keyboard.on("keydown_DOWN",()=>Down2 = true);
	this.input.keyboard.on("keyup_S",()=>Down = false);
	this.input.keyboard.on("keyup_DOWN",()=>Down2 = false);
	this.input.keyboard.on("keydown_W",()=>Up = true);
	this.input.keyboard.on("keydown_UP",()=>Up2 = true);
	this.input.keyboard.on("keyup_W",()=>Up = false);
	this.input.keyboard.on("keyup_UP",()=>Up2 = false);
	this.input.keyboard.on("keydown_A",()=>Left = true);
	this.input.keyboard.on("keydown_LEFT",()=>Left2 = true);
	this.input.keyboard.on("keyup_A",()=>Left = false);
	this.input.keyboard.on("keyup_LEFT",()=>Left2 = false);
	this.input.keyboard.on("keydown_D",()=>Right = true);
	this.input.keyboard.on("keydown_RIGHT",()=>Right2 = true);
	this.input.keyboard.on("keyup_D",()=>Right = false);
	this.input.keyboard.on("keyup_RIGHT",()=>Right2 = false);

		//this.add.image(config.width / 1.5, config.height / 2, "backgroundpartdirt");
		//this.add.image(config.width / 1.72, config.height / 2, "backgroundpartgrass");
		//this.add.image(config.width / 2, config.height / 2, "backgroundpartgrass");
	let group = this.make.group({
        key: "background",
        frame: Phaser.Utils.Array.NumberArray(0, 4500),
        randomFrame: true,
        gridAlign: {
            x: 80,
            y: 50,
            width: 100,
            height: 90,
            cellWidth: 20,
            cellHeight: 20
        }
    });
	block1 = this.physics.add.staticImage(Phaser.Math.Between (3,1470), Phaser.Math.Between (3,700), "Sandbag1");
	block2 = this.physics.add.staticImage(Phaser.Math.Between (3,1470), Phaser.Math.Between (3,700), "barrelrustgr1");
	block3 = this.physics.add.staticImage(Phaser.Math.Between (3,1470), Phaser.Math.Between (3,700), "barrelgreenup");
	block5 = this.physics.add.staticImage(Phaser.Math.Between (3,1470), Phaser.Math.Between (3,700), "barrelgrey1");
	block6 = this.physics.add.staticImage(Phaser.Math.Between (3,1470), Phaser.Math.Between (3,700), "barrelred1");
	block7 = this.physics.add.staticImage(Phaser.Math.Between (3,1470), Phaser.Math.Between (3,700), "barrelgreendamaged");
	block8 = this.physics.add.staticImage(Phaser.Math.Between (3,1470), Phaser.Math.Between (3,700), "oil1");
	//var keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
	//var keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
	//var keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
	//var keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
	//keyLeft.onDown = Leftdown2
	//keyRight.onDown = Rightdown2
	//keyUp.onDown = Updown2
	//keyDown.onDown = Downdown2
	//var keyM = this.input.keyboard.addkey(Phaser.Input.Keyboard.KeyCodes.M);
	this.physics.world.setBounds(0, 0, 1480, 715);
	//bullets = game.make.group();
    //bullets.enableBody = true;
    //bullets.physicsBodyType = Phaser.Physics.ARCADE;

    //bullets.createMultiple(50, "bullet");
    //bullets.setAll("checkWorldBounds", true);
    //bullets.setAll("outOfBoundsKill", true);
	image = this.physics.add.sprite(200, 0, "tank1_black");
	image2 = this.physics.add.sprite(500, 0, "tank2_blue");
	//barrel = game.add.sprite(400, 300, "barrel1");
	//barrel.anchor.set(0.5);
	//barrel.body.allowRotation = false;
	block10 = this.physics.add.staticImage(Phaser.Math.Between (3,1470), Phaser.Math.Between (3,700), "tree_l1");
	block9 = this.physics.add.staticImage(Phaser.Math.Between (3,1470), Phaser.Math.Between (3,700), "tree_s2");
	block4 = this.physics.add.staticImage(Phaser.Math.Between (3,1470), Phaser.Math.Between (3,700), "tree_s1");
	block11 = this.physics.add.staticImage(Phaser.Math.Between (3,1470), Phaser.Math.Between (3,700), "tree_s3");
	block12 = this.physics.add.staticImage(Phaser.Math.Between (3,1470), Phaser.Math.Between (3,700), "tree_l2");
	sprite = this.add.sprite(400, 300, "crosshair");
	this.input.on("pointerdown", function (pointer) {

        this.input.mouse.requestPointerLock();

    }, this);
	this.input.on("pointermove", function (pointer) {

        if (this.input.mouse.locked)
        {
            sprite.x += pointer.movementX;
            sprite.y += pointer.movementY;


            // Force the sprite to stay on screen
            sprite.x = Phaser.Math.Wrap(sprite.x, 0, game.renderer.width);
            sprite.y = Phaser.Math.Wrap(sprite.y, 0, game.renderer.height);

            if (pointer.movementX > 0) { sprite.setRotation(0); }
            else if (pointer.movementX < 0) { sprite.setRotation(0); }
            else { sprite.setRotation(0); }

            updateLockText(true);
        }
	}, this);
	this.input.keyboard.on("keydown_R", function (event) {
        if (this.input.mouse.locked)
        {
            this.input.mouse.releasePointerLock();
        }
	}, this);
	this.input.on("pointerlockchange", function (event) {

        console.log(event);

        updateLockText(event.isPointerLocked, sprite.x, sprite.y);

    }, this);

    lockText = this.add.text(16, 16, '', {
        fontSize: '20px',
        fill: '#ffffff'
    });

    updateLockText(false);
	image.setScale(0.75)
	image.setCollideWorldBounds(true);
	image.setBounce(false);
	image.setGravity(false);
	image2.setScale(0.75)
	image2.setCollideWorldBounds(true);
	image2.setBounce(false);
	image2.setGravity(false);
	//var keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
	//var keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
	//var keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
	//var keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
	//var keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
	//var keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
	//keyW.onDown = Updown
	//keyA.onDown = Leftdown
	//keyD.onDown = Rightdown
	//keyS.onDown = Downdown
	//keyQ.onDown = Turnleftdown
	//keyE.onDown = Turnrightdown
	this.physics.add.collider(image, block1, colladeblock1);
	this.physics.add.collider(image, block2, colladeblock2);
	this.physics.add.collider(image, block3, colladeblock3);
	//this.physics.add.collider(image, block4, colladeblock4);
	this.physics.add.collider(image, block5, colladeblock5);
	this.physics.add.collider(image, block6, colladeblock6);
	this.physics.add.collider(image, block7, colladeblock7);
	this.physics.add.collider(image, block8, colladeblock8);
	//this.physics.add.collider(image, block9, colladeblock9);
	//this.physics.add.collider(image, block10, colladeblock10);
	//this.physics.add.collider(image, block11, colladeblock11);
	//this.physics.add.collider(image, block12, colladeblock12);
	this.physics.add.collider(image2, block1, colladeblock102);
	this.physics.add.collider(image2, block2, colladeblock202);
	this.physics.add.collider(image2, block3, colladeblock302);
	//this.physics.add.collider(image2, block4, colladeblock4,2);
	this.physics.add.collider(image2, block5, colladeblock502);
	this.physics.add.collider(image2, block6, colladeblock602);
	this.physics.add.collider(image2, block7, colladeblock702);
	this.physics.add.collider(image2, block8, colladeblock802);
	//this.physics.add.collider(image2, block9, colladeblock902);
	//this.physics.add.collider(image2, block10, colladeblock1002);
	//this.physics.add.collider(image2, block11, colladeblock1102);
	//this.physics.add.collider(image2, block12, colladeblock1202);
	this.physics.add.collider(image, image2, colladetanks1);

}

function update(){
	//barrel.rotation = game.physics.arcade.angleToPointer(barrel);

    //if (game.input.activePointer.isDown)
    //{
    //    fire();
    //}
	//console.log("5");
	if(Down){Downdown();}
	if(Down2){Downdown2();}
	if(Up){Updown();}
	if(Up2){Updown2();}
	if(Left){Leftdown();}
	if(Left2){Leftdown2();}
	if(Right){Rightdown();}
	if(Right2){Rightdown2();}
	if(Right && collade1block){colladerightblock1();}
	if(Left && collade1block){colladeleftblock1();}
	if(Down && collade1block){colladedownblock1();}
	if(Up && collade1block){colladeupblock1();}
	if(Right && collade2block){colladerightblock2();}
	if(Left && collade2block){colladeleftblock2();}
	if(Down && collade2block){colladedownblock2();}
	if(Up && collade2block){colladeupblock2();}
	if(Right && collade3block){colladerightblock3();}
	if(Left && collade3block){colladeleftblock3();}
	if(Down && collade3block){colladedownblock3();}
	if(Up && collade3block){colladeupblock3();}
	if(Right && collade4block){colladerightblock4();}
	if(Left && collade4block){colladeleftblock4();}
	if(Down && collade4block){colladedownblock4();}
	if(Up && collade4block){colladeupblock4();}
	if(Right && collade5block){colladerightblock5();}
	if(Left && collade5block){colladeleftblock5();}
	if(Down && collade5block){colladedownblock5();}
	if(Up && collade5block){colladeupblock5();}
	if(Right && collade6block){colladerightblock6();}
	if(Left && collade6block){colladeleftblock6();}
	if(Down && collade6block){colladedownblock6();}
	if(Up && collade6block){colladeupblock6();}
	if(Right && collade7block){colladerightblock7();}
	if(Left && collade7block){colladeleftblock7();}
	if(Down && collade7block){colladedownblock7();}
	if(Up && collade7block){colladeupblock7();}
	if(Right && collade8block){colladerightblock8();}
	if(Left && collade8block){colladeleftblock8();}
	if(Down && collade8block){colladedownblock8();}
	if(Up && collade8block){colladeupblock8();}
	if(Right && collade9block){colladerightblock9();}
	if(Left && collade9block){colladeleftblock9();}
	if(Down && collade9block){colladedownblock9();}
	if(Up && collade9block){colladeupblock9();}
	if(Right && collade10block){colladerightblock10();}
	if(Left && collade10block){colladeleftblock10();}
	if(Down && collade10block){colladedownblock10();}
	if(Up && collade10block){colladeupblock10();}
	if(Right && collade11block){colladerightblock11();}
	if(Left && collade11block){colladeleftblock11();}
	if(Down && collade11block){colladedownblock11();}
	if(Up && collade11block){colladeupblock11();}
	if(Right && collade12block){colladerightblock12();}
	if(Left && collade12block){colladeleftblock12();}
	if(Down && collade12block){colladedownblock12();}
	if(Up && collade12block){colladeupblock12();}
	if(Right2 && collade1block2){colladeright2block1();}
	if(Left2 && collade1block2){colladeleft2block1();}
	if(Down2 && collade1block2){colladedown2block1();}
	if(Up2 && collade1block2){colladeup2block1();}
	if(Right2 && collade2block2){colladeright2block2();}
	if(Left2 && collade2block2){colladeleft2block2();}
	if(Down2 && collade2block2){colladedown2block2();}
	if(Up2 && collade2block2){colladeup2block2();}
	if(Right2 && collade3block2){colladeright2block3();}
	if(Left2 && collade3block2){colladeleft2block3();}
	if(Down2 && collade3block2){colladedown2block3();}
	if(Up2 && collade3block2){colladeup2block3();}
	if(Right2 && collade4block2){colladeright2block4();}
	if(Left2 && collade4block2){colladeleft2block4();}
	if(Down2 && collade4block2){colladedown2block4();}
	if(Up2 && collade4block2){colladeup2block4();}
	if(Right2 && collade5block2){colladeright2block5();}
	if(Left2 && collade5block2){colladeleft2block5();}
	if(Down2 && collade5block2){colladedown2block5();}
	if(Up2 && collade5block2){colladeup2block5();}
	if(Right2 && collade6block2){colladeright2block6();}
	if(Left2 && collade6block2){colladeleft2block6();}
	if(Down2 && collade6block2){colladedown2block6();}
	if(Up2 && collade6block2){colladeup2block6();}
	if(Right2 && collade7block2){colladeright2block7();}
	if(Left2 && collade7block2){colladeleft2block7();}
	if(Down2 && collade7block2){colladedown2block7();}
	if(Up2 && collade7block2){colladeup2block7();}
	if(Right2 && collade8block2){colladeright2block8();}
	if(Left2 && collade8block2){colladeleft2block8();}
	if(Down2 && collade8block2){colladedown2block8();}
	if(Up2 && collade8block2){colladeup2block8();}
	if(Right2 && collade9block2){colladeright2block9();}
	if(Left2 && collade9block2){colladeleft2block9();}
	if(Down2 && collade9block2){colladedown2block9();}
	if(Up2 && collade9block2){colladeup2block9();}
	if(Right2 && collade10block2){colladeright2block10();}
	if(Left2 && collade10block2){colladeleft2block10();}
	if(Down && collade10block2){colladedown2block10();}
	if(Up2 && collade10block2){colladeup2block10();}
	if(Right2 && collade11block2){colladeright2block11();}
	if(Left2 && collade11block2){colladeleft2block11();}
	if(Down2 && collade11block2){colladedown2block11();}
	if(Up2 && collade11block2){colladeup2block11();}
	if(Right2 && collade12block2){colladeright2block12();}
	if(Left2 && collade12block2){colladeleft2block12();}
	if(Down2 && collade12block2){colladedown2block12();}
	if(Up2 && collade12block2){colladeup2block12();}
	Frame += 1;
	var right  = config.width - image.width / 5;
	if(image.x == (0 + image.width / 2)){Velocity = 200;}
	if(image.x >= right){Velocity = -300;}
	if(Frame>200&&image.body.velocity.x<-500){Velocity = 200}
	if(Frame>60){Frame=0}
	image.setVelocityX(Velocity);
	if(Frame>600){Spawn -= 5;}
	if(Frame = 5){Velocity = 0}
	var right  = config.width - image2.width / 5;
	if(image2.x == (0 + image2.width / 2)){Velocity2 = 200;}
	if(image2.x >= right){Velocity2 = -300;}
	if(Frame>200&&image2.body.velocity.x<-500){Velocity2 = 200}
	if(Frame>60){Frame=0}
	image2.setVelocityX(Velocity2);
	if(Frame = 5){Velocity2 = 0}
	//if(!Rightdown && !Leftdown){Velocity = 0}
	image.setVelocityY(VelocityUp);
	if(Frame = 5){VelocityUp = -3.5}
	image.setRotation(Rotation);
	image2.setVelocityY(VelocityUp2);
	if(Frame = 5){VelocityUp2 = -3.5}
	image2.setRotation(Rotation2);
	//if(!Updown && !Downdown){VelocityUp = -0.5}
	//image.setScale(2)
	//if(Frame = 10){Rotation = 0}
	//if(Velocity > 0){Rotation = 30}
	//if(Velocity < 0){Rotation = 30}
	//if(VelocityUp < 0){Rotation = 0}
	//if(VelocityUp > 0){Rotation = 60}
	//if(Velocity>0){image.setRotation(32.98673);}
	//if(Velocity<0){image.setRotation(-32.98673);}
	//if(VelocityUp<0){image.setRotation(0);}
	//if(VelocityUp>0){image.setRotation(65.97346);}
	if(Frame = 5){collade1block = false}
	if(Frame = 5){collade2block = false}
	if(Frame = 5){collade3block = false}
	if(Frame = 5){collade4block = false}
	if(Frame = 5){collade5block = false}
	if(Frame = 5){collade6block = false}
	if(Frame = 5){collade7block = false}
	if(Frame = 5){collade8block = false}
	if(Frame = 5){collade9block = false}
	if(Frame = 5){collade10block = false}
	if(Frame = 5){collade11block = false}
	if(Frame = 5){collade12block = false}
	if(Frame = 5){collade1block2 = false}
	if(Frame = 5){collade2block2 = false}
	if(Frame = 5){collade3block2 = false}
	if(Frame = 5){collade4block2 = false}
	if(Frame = 5){collade5block2 = false}
	if(Frame = 5){collade6block2 = false}
	if(Frame = 5){collade7block2 = false}
	if(Frame = 5){collade8block2 = false}
	if(Frame = 5){collade9block2 = false}
	if(Frame = 5){collade10block2 = false}
	if(Frame = 5){collade11block2 = false}
	if(Frame = 5){collade12block2 = false}

}
function updateLockText (isLocked){
   lockText.setText([
//        isLocked ? "The pointer is now locked!" : "The pointer is now unlocked.",
//        "Sprite is at: (" + sprite.x + "," + sprite.y + ")",
		"Press R to release pointer lock.",
		//"Press M for single Device Multiplayer."
    ]);
}
function Leftdown(){
	Velocity = -150
	Rotation = -32.98673
}
function Rightdown(){
	Velocity = 150
	Rotation = 32.98673
}
function Updown(){
	VelocityUp = -150
	Rotation = 0
}
function Downdown(){
	VelocityUp = 150
	Rotation = 65.97346
}
function Leftdown2(){
	Velocity2 = -150
	Rotation2 = -32.98673
}
function Rightdown2(){
	Velocity2 = 150
	Rotation2 = 32.98673
}
function Updown2(){
	VelocityUp2 = -150
	Rotation2 = 0
}
function Downdown2(){
	VelocityUp2 = 150
	Rotation2 = 65.97346
}
//function Turnleftdown(){
//	Rotation -= 32.98673
//}
//function Turnrightdown(){
//	Rotation += 32.98673
//}
function colladeblock1(image,block1){
	//Velocity = -601
	//VelocityUp = -601
	collade1block = true
	//collade1block = false
}
function colladeblock2(image,block2){
	//Velocity = -601
	//VelocityUp = -601
	collade2block = true
}
function colladeblock3(image,block3){
	//Velocity = -601
	//VelocityUp = -601
	collade3block = true
}
//function colladeblock4(image,block4){
//	Velocity = -601
//VelocityUp = -601
//collade4block = true
//}
function colladeblock5(image,block5){
	//Velocity = -601
	//VelocityUp = -601
	collade5block = true
}
function colladeblock6(image,block6){
	//Velocity = -601
	//VelocityUp = -601
	collade6block = true
}
function colladeblock7(image,block7){
	//Velocity = -601
	//VelocityUp = -601
	collade7block = true
}
function colladeblock8(image,block8){
	//Velocity = -601
	//VelocityUp = -601
	collade8block = true
}
//function colladeblock9(image,block9){
//	Velocity = -601
//VelocityUp = -601
//collade9block = true
//}
//function colladeblock10(image,block10){
//	Velocity = -601
//VelocityUp = -601
//collade10block = true
//}
//function colladeblock11(image,block11){
//	Velocity = -601
//VelocityUp = -601
//collade11block = true
//}
//function colladeblock12(image,block12){
//	Velocity = -601
//VelocityUp = -601
//collade12block = true
//}
function colladeblock102(image2,block1){
	//Velocity2 = -601
	//VelocityUp2 = -601
	collade1block2 = true
}
function colladeblock202(image2,block2){
	//Velocity2 = -601
	//VelocityUp2 = -601
	collade2block2 = true
}
function colladeblock302(image2,block3){
	//Velocity2 = -601
	//VelocityUp2 = -601
	collade3block2 = true
}
//function colladeblock402(image2,block4){
//	Velocity2 = -601
//VelocityUp2 = -601
//collade4block2 = true
//}
function colladeblock502(image2,block5){
	//Velocity2 = -601
	//VelocityUp2 = -601
	collade5block2 = true
}
function colladeblock602(image2,block6){
	//Velocity2 = -601
	//VelocityUp2 = -601
	collade6block2 = true
}
function colladeblock702(image2,block7){
	//Velocity2 = -601
	//VelocityUp2 = -601
	collade7block2 = true
}
function colladeblock802(image2,block8){
	//Velocity2 = -601
	//VelocityUp2 = -601
	collade8block2 = true
}
//function colladeblock902(image2,block9){
//	Velocity2 = -601
//VelocityUp2 = -601
//collade9block2 = true
//}
//function colladeblock1002(image2,block10){
//	Velocity2 = -601
//VelocityUp2 = -601
//collade10block2 = true
//}
//function colladeblock1102(image2,block11){
//	Velocity2 = -601
//VelocityUp2 = -601
//collade11block2 = true
//}
//function colladeblock1202(image2,block12){
//	Velocity2 = -601
//VelocityUp2 = -601
//collade12block2 = true
//}
function colladetanks1(image,image2){
	//Velocity = -601
	//VelocityUp = -601
	//Velocity2 = 601
	//VelocityUp2 = 601
}
function onevent(event){
	if(event.key == "s"){Downdown();}
	if(event.key == "w"){Updown();}
	if(event.key == "a"){Leftdown();}
	if(event.key == "d"){Rightdown();}
	if(event.key == "ArrowDown"){Downdown2();}
	if(event.key == "ArrowUp"){Updown2();}
	if(event.key == "ArrowLeft"){Leftdown2();}
	if(event.key == "ArrowRight"){Rightdown2();}
}
function colladerightblock1(){
	Velocity = 0
}
function colladeleftblock1(){
	Velocity = 0
}
function colladedownblock1(){
	VelocityUp = 0
}
function colladeupblock1(){
	VelocityUp = 0
}
function colladerightblock2(){
	Velocity = 0
}
function colladeleftblock2(){
	Velocity = 0
}
function colladedownblock2(){
	VelocityUp = 0
}
function colladeupblock2(){
	VelocityUp = 0
}
function colladerightblock3(){
	Velocity = 0
}
function colladeleftblock3(){
	Velocity = 0
}
function colladedownblock3(){
	VelocityUp = 0
}
function colladeupblock3(){
	VelocityUp = 0
}
function colladerightblock4(){
	Velocity = 0
}
function colladeleftblock4(){
	Velocity = 0
}
function colladedownblock4(){
	VelocityUp = 0
}
function colladeupblock4(){
	VelocityUp = 0
}
function colladerightblock5(){
	Velocity = 0
}
function colladeleftblock5(){
	Velocity = 0
}
function colladedownblock5(){
	VelocityUp = 0
}
function colladeupblock5(){
	VelocityUp = 0
}
function colladerightblock6(){
	Velocity = 0
}
function colladeleftblock6(){
	Velocity = 0
}
function colladedownblock6(){
	VelocityUp = 0
}
function colladeupblock6(){
	VelocityUp = 0
}
function colladerightblock7(){
	Velocity = 0
}
function colladeleftblock7(){
	Velocity = 0
}
function colladedownblock7(){
	VelocityUp = 0
}
function colladeupblock7(){
	VelocityUp = 0
}
function colladerightblock8(){
	Velocity = 0
}
function colladeleftblock8(){
	Velocity = 0
}
function colladedownblock8(){
	VelocityUp = 0
}
function colladeupblock8(){
	VelocityUp = 0
}
function colladerightblock9(){
	Velocity = 0
}
function colladeleftblock9(){
	Velocity = 0
}
function colladedownblock9(){
	VelocityUp = 0
}
function colladeupblock9(){
	VelocityUp = 0
}
function colladerightblock10(){
	Velocity = 0
}
function colladeleftblock10(){
	Velocity = 0
}
function colladedownblock10(){
	VelocityUp = 0
}
function colladeupblock10(){
	VelocityUp = 0
}
function colladerightblock11(){
	Velocity = 0
}
function colladeleftblock11(){
	Velocity = 0
}
function colladedownblock11(){
	VelocityUp = 0
}
function colladeupblock11(){
	VelocityUp = 0
}
function colladerightblock12(){
	Velocity = 0
}
function colladeleftblock12(){
	Velocity = 0
}
function colladedownblock12(){
	VelocityUp = 0
}
function colladeupblock12(){
	VelocityUp = 0
}
function colladeright2block1(){
	Velocity2 = 0
}
function colladeleft2block1(){
	Velocity2 = 0
}
function colladedown2block1(){
	VelocityUp2 = 0
}
function colladeup2block1(){
	VelocityUp2 = 0
}
function colladeright2block2(){
	Velocity2 = 0
}
function colladeleft2block2(){
	Velocity2 = 0
}
function colladedown2block2(){
	VelocityUp2 = 0
}
function colladeup2block2(){
	VelocityUp2 = 0
}
function colladeright2block3(){
	Velocity2 = 0
}
function colladeleft2block3(){
	Velocity2 = 0
}
function colladedown2block3(){
	VelocityUp2 = 0
}
function colladeup2block3(){
	VelocityUp2 = 0
}
function colladeright2block4(){
	Velocity2 = 0
}
function colladeleft2block4(){
	Velocity2 = 0
}
function colladedown2block4(){
	VelocityUp2 = 0
}
function colladeup2block4(){
	VelocityUp2 = 0
}
function colladeright2block5(){
	Velocity2 = 0
}
function colladeleft2block5(){
	Velocity2 = 0
}
function colladedown2block5(){
	VelocityUp2 = 0
}
function colladeup2block5(){
	VelocityUp2 = 0
}
function colladeright2block6(){
	Velocity2 = 0
}
function colladeleft2block6(){
	Velocity2 = 0
}
function colladedown2block6(){
	VelocityUp2 = 0
}
function colladeup2block6(){
	VelocityUp2 = 0
}
function colladeright2block7(){
	Velocity2 = 0
}
function colladeleft2block7(){
	Velocity2 = 0
}
function colladedown2block7(){
	VelocityUp2 = 0
}
function colladeup2block7(){
	VelocityUp2 = 0
}
function colladeright2block8(){
	Velocity2 = 0
}
function colladeleft2block8(){
	Velocity2 = 0
}
function colladedown2block8(){
	VelocityUp2 = 0
}
function colladeup2block8(){
	VelocityUp2 = 0
}
function colladeright2block9(){
	Velocity2 = 0
}
function colladeleft2block9(){
	Velocity2 = 0
}
function colladedown2block9(){
	VelocityUp2 = 0
}
function colladeup2block9(){
	VelocityUp2 = 0
}
function colladeright2block10(){
	Velocity2 = 0
}
function colladeleft2block10(){
	Velocity2 = 0
}
function colladedown2block10(){
	VelocityUp2 = 0
}
function colladeup2block10(){
	VelocityUp2 = 0
}
function colladeright2block11(){
	Velocity2 = 0
}
function colladeleft2block11(){
	Velocity2 = 0
}
function colladedown2block11(){
	VelocityUp2 = 0
}
function colladeup2block11(){
	VelocityUp2 = 0
}
function colladeright2block12(){
	Velocity2 = 0
}
function colladeleft2block12(){
	Velocity2 = 0
}
function colladedown2block12(){
	VelocityUp2 = 0
}
function colladeup2block12(){
	VelocityUp2 = 0
}
//function fire() {

    //if (game.time.now > nextFire && bullets.countDead() > 0)
    //{
    //    nextFire = game.time.now + fireRate;

     //   var bullet = bullets.getFirstDead();

     //   bullet.reset(barrel.x - 8, barrel.y - 8);

     //   game.physics.arcade.moveToPointer(bullet, 300);
    //}
//}