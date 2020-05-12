let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update,
  }
};

let game = new Phaser.Game(config);
let image;


let allAnimals = ["bear", "buffalo", "chick", "elephant", "snake"];

// Hier wird das Array deklariert, in welchem in create() zehn images geladen werden.
let animalsOnScreen = [];

let ypos;
let xpos;

function preload () {
  this.load.image("bear", "../img/bear.png");
  this.load.image("buffalo", "../img/buffalo.png");
  this.load.image("chick", "../img/chick.png");
  this.load.image("elephant", "../img/elephant.png");
  this.load.image("snake", "../img/snake.png");

}

function create () {

  // Hier werden in das 10er-Array zehn zufällig gewählte Images aus dem Array "allAnimals" gespeichert
  for (let i= 0; i<=9; i++){

    //zufälliges Tier wird ausgewählt
    let randomAnimal = allAnimals[Math.floor(Math.random() * allAnimals.length)];

    //Hier wird die horizontale Startposition des aktuellen Array-Elements zufällig gesetzt und das Bild hinzugefügt
    xpos = (Math.random()*700) + 50; // ZUFÄLLIGE x-POSITION
    ypos = 0-(60 * i); //VERSETZTE y-POSITION: Das erste Bild bei allAnimals[0] startet bei y=0, das zweite bei y= -55 usw

    image = this.add.image(xpos,ypos,""+randomAnimal);


    //Hier wird die Größe des Bilder gesetzt

    image.setScale(0.5);

    //Das Image-Objekt (Tier) aus dieser Schleife wird im Array "animalsOnScreen" an der Stelle i gespeichert
    animalsOnScreen[i] = image;
  }
  // --> nach 10 Durchläufen (i = 0-9) sind im Array "animalsOnScreen" 10 Objekte (Tiere) gespeichert mit untersch. Positionen
  console.log(animalsOnScreen);



  // Hier in create müssen noch Objekte für die Darstellung der Anleitung, jeweilige Reaktionsaufgabe, Punktestand, ... erzeugt werden
}

function update () {

  // hier werden die Objekte im Array "animalsOnScreen" nach unten bewegt
  for (let i= 0; i<=9; i++){
    let xPosThisAnimal = animalsOnScreen[i].x;
    let yPosThisAnimal = animalsOnScreen[i].y;
   animalsOnScreen[i].setPosition(xPosThisAnimal, yPosThisAnimal+1);
  }

  // es wird überprüft, an welcher Position sie sich befinden --> wenn nicht mehr sichtbar (yPos > 650), dann reset
  for (let j=0; j<=9; j++){
    if (animalsOnScreen[j].y > 650){

      xpos = (Math.random()*700) + 50; // ZUFÄLLIGE x-POSITION
      ypos = -25;
      let randomAnimal = allAnimals[Math.floor(Math.random() * allAnimals.length)];
      image = this.add.image(xpos,ypos,""+randomAnimal);
      image.setScale(0.5);
      animalsOnScreen[j] = image;
    }
  }


}