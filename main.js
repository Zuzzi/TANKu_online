var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', 
                                       { preload: preload, create: create, update: update, render: render })

var player;
var barrel;
									   
function preload() {
   game.load.image('tank', 'assets/PNG/Tanks/tankBlue_outline.png');
   game.load.image("barrel", "assets/PNG/Tanks/barrelBlue_outline.png");
}

function create() {
	player = game.add.sprite(200, 200, 'tank');
	player.scale.setTo(0.5, 0.5);
	player.anchor.setTo(0.5, 0.5);
    barrel = new Phaser.Sprite(this.game, 0, 0, "barrel");  
	player.addChild(barrel);
	barrel.anchor.setTo(0,0.5)

}

function update() {


    if (game.input.keyboard.isDown(Phaser.KeyCode.W))
    {
		speed = 3
        var velocityX = Math.cos(player.angle * Math.PI / 180) * speed;
        var velocityY = Math.sin(player.angle * Math.PI / 180) * speed;
        player.x += velocityX;
        player.y += velocityY;	
	}
		
	if (game.input.keyboard.isDown(Phaser.KeyCode.D)) 
	{
		player.angle += 1;
	}
		
	if (game.input.keyboard.isDown(Phaser.KeyCode.A))
	{
		player.angle -= 1;
	}
	
	if (game.input.keyboard.isDown(Phaser.KeyCode.S))
    {
        speed = -2;
		var velocityX = Math.cos(player.angle * Math.PI / 180) * speed;
        var velocityY = Math.sin(player.angle * Math.PI / 180) * speed;
        player.x += velocityX;
        player.y += velocityY;
	}
	
	
	 //barrel.rotation = game.physics.arcade.angleToPointer(barrel);
	 barrel.angle += 1

}

function render() {
    game.debug.spriteInfo(barrel, 20, 32);
	

}


