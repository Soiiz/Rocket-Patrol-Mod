// Kenny Chau, kchau6, Rocket Patrol Mod, 4/18/22, 12-15hrs
// Point Break down
/*
5 points: Allow player to control rocket
5 points: adding background music to play scene
10 points: 4 new explosion SFX
20 points: new spaceship type /small/more points
60 points: Changed title screen look with some artwork/different font/font color, color UI, theme (cat/park theme), changed player to water, 
            changed rocket to cat, starfield now a grassfield, new sounds such as enemies dying and player shooting.
    if 60 does not meet the req:
            5 points: new scrolling tile
            10 points: new title screen
            10 points: new animated sprite
            20 points: new artwork for all in game assets
*/
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}
let game  = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;