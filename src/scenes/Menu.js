class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.image('grass', './assets/grass.png');
        this.load.image('menu', './assets/menuscreen.png');
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_death', './assets/deathsound.wav');
        this.load.audio('sfx_death1', './assets/deathsound1.wav');
        this.load.audio('sfx_death2', './assets/deathsound2.wav');
        this.load.audio('sfx_death3', './assets/deathsound3.wav');
        this.load.audio('sfx_shoot', './assets/shoot.wav');
        this.load.audio('sfx_music', './assets/bensound-jazzcomedy.mp3');
    }

    create() {
        this.grass = this.add.tileSprite(0, 0, 640, 480, 'menu').setOrigin(0, 0);
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Comic Sans MS',
            fontSize: '28px',
            backgroundColor: '#00B1FF',
            color: '#FF0000',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        

        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Use <-> arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00B1FF';
        menuConfig.color = '#FF0000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press <- for Novice or -> for Expert', menuConfig).setOrigin(0.5);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
      }
}