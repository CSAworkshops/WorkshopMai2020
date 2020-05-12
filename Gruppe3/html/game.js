let config = {
  //Technischer Typ AUTO = Wählt Automatisch, WEBGL = Nutzt WebGL, CANVAS = Nutzt ein Canvas
  type: Phaser.AUTO,
  //Breite des Spiels
  width: 800,
  //Höhe des Spiels
  height: 600,
  //Physic zum spiel hinzufügen
  physics: {
    //Typ der Physic
    default: "arcade",
    //Eigenschaften der Physic
    arcade: {
    
      debug: false, //Wenn debug: true dann wird ein Kasten und die Schwerkraft mit einem grünen strich angezeigt
    },
  },

  scene: {
    preload: preload,
    create: create,
    update: update,
  },
  scale: {
    mode: Phaser.Scale.FIT,
  }
};

//Neues Spiel erzeugen
let game = new Phaser.Game(config);
let player;
let cursors;
let points;
let highScore;
let apple;
let x;
let y;
let high;
const velocity = 300;

//Lädt zu anfang des Spiels
function preload() {
  highScore = 0;
  this.load.image("snake", "snake.png");
  this.load.image("apple","apfel.png");
}


function create() {
  sky = new Phaser.Display.Color(155, 255, 50);
  this.cameras.main.setBackgroundColor(sky);

  player = this.physics.add.sprite(400, 300, "snake").setScale(0.3);
  player.setCollideWorldBounds(true);
  cursors = this.input.keyboard.createCursorKeys();

  var text2 = this.add.text(10, 10, 'Score:', { font: '30px Arial' });
  //pink | gelb | blau | rot
  text2.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
  points = this.add.text(100, 10, '', { font: '30px Arial' });
  //pink | gelb | blau | rot
  points.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
  high= this.add.text(10,50, '',{ font: '30px Arial'});
  high.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);

	x=Phaser.Math.Between(50, 750)
	y=Phaser.Math.Between(50, 550)
  
  apple = this.physics.add.group({
    key: 'apple',
    setXY: { x: x, y: y}
	});
	
    this.physics.add.overlap(player, apple, collectApple, null, this);
}


function update() {
  let left = cursors.left.isDown;
  let right = cursors.right.isDown;
  let up = cursors.up.isDown;
  let down = cursors.down.isDown;
  
  if (left) {
	  player.setVelocityY(0);
    player.setVelocityX(-velocity);
  }

  if (right) {
	player.setVelocityY(0);
    player.setVelocityX(velocity);
  }

  if (up) {
	  player.setVelocityX(0);
    player.setVelocityY(-velocity);
    
  }
  if (down){
	  player.setVelocityX(0);
	  player.setVelocityY(velocity);
  }

	
  points.text = highScore;
  
	if(highScore>=50){
		high.text="YAY";
	}
	if(highScore>=100){
		high.text="Double YAY";
	}
	if(highScore>=500){
		high.text="SUPER YAY";
	}
	if(highScore>=1000){
		high.text="ULTIMATIVES YAAAAY";
	}
}

function collectApple (player, apple)
    {
        apple.disableBody(true, true);
		highScore += 10;
		x=Phaser.Math.Between(50, 750);
		y=Phaser.Math.Between(50, 550);
		apple.enableBody(true, x, y, true, true);
		
    }
