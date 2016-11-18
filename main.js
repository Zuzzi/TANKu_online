var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', 
                                       { preload: preload, create: create, update: update, render: render })

var player;
									   
function preload() {
   game.load.image('tank', 'assets/PNG/Tanks/tankBlue_outline.png');
}

function create() {
	player = game.add.sprite(200, 200, 'tank');
	player.scale.setTo(0.5, 0.5);
	player.anchor.setTo(0.5, 0.5);
	game.physics.arcade.enable(player);
    player.body.allowRotation = true;

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
	


}

function render() {
    game.debug.spriteInfo(player, 20, 32);

}


