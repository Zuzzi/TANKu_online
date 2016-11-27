var game = new Phaser.Game(1024, 640, Phaser.CANVAS, 'phaser-example', 
									   { preload: preload, create: create, update: update, render: render })

var player;
var barrel;
var tiles;
var obstacles;
var obs;
var currentSpeed = 0;
									   
function preload() {
   game.load.image('tank', 'assets/PNG/Tanks/tankBlue_outline.png');
   game.load.image("barrel", "assets/PNG/Tanks/barrelBlue_outline.png");
   game.load.tilemap('map', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);
   game.load.image('tiles', 'assets/towerDefense_tilesheet.png');
}

function create() {

	
	
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	map = game.add.tilemap("map");
    map.addTilesetImage("towerDefense_tilesheet", "tiles");

    map.createLayer("Background").resizeWorld();
    map.createLayer("Foreground");
	collision_layer = map.createLayer("Collision");

    player = game.add.sprite(200, 200, 'tank');
	player.scale.setTo(0.5, 0.5);
	player.anchor.setTo(0.5, 0.5);
	barrel = game.add.sprite(200,200,"barrel");
	barrel.anchor.setTo(0,0.5);
	barrel.scale.setTo(0.5,0.5);
    game.physics.enable(player, Phaser.Physics.ARCADE);
	game.physics.enable(barrel, Phaser.Physics.ARCADE);
	
	game.world.setBounds(0, 0, 1024, 640);
	game.physics.enable (player);
	player.body.collideWorldBounds = true;
    
	//map.setCollisionBetween(22, 23 ,true, collision_layer.index,true);
	map.setCollisionBetween(134, 135 ,true, collision_layer.index,true);
	map.setCollisionBetween(130, 131 ,true, collision_layer.index,true);
	map.setCollisionBetween(136, 137 ,true, collision_layer.index,true);
	game.world.addAt(player, collision_layer.index);
	player.body.maxVelocity.setTo(200, 200);
	

}



function update() {
	
	
   game.physics.arcade.collide(player, collision_layer);
   barrel.x = player.x;
   barrel.y = player.y;


	if (game.input.keyboard.isDown(Phaser.KeyCode.W))
	{
		speed = 3
		var velocityX = Math.cos(player.angle * Math.PI / 180) * speed;
		var velocityY = Math.sin(player.angle * Math.PI / 180) * speed;
		player.body.velocity.x += velocityX;
		player.body.velocity.y += velocityY;
	}
	else {
		
		
		if (player.body.velocity.x > 0) 
		{
			player.body.velocity.x -= 1;	
			if (player.body.velocity.x < 0.99)
			{
				player.body.velocity.x = 0;
			}
		}
		
		else if (player.body.velocity.x < 0) 
		{
			
			player.body.velocity.x += 1;
			if (player.body.velocity.x > -0.99)
			{
				player.body.velocity.x = 0;
			}
			
		}
		
		if (player.body.velocity.y > 0) 
		{
			player.body.velocity.y -= 1;
			if (player.body.velocity.y < 0.99)
			{
				player.body.velocity.y = 0;
			}
		}
		
		else if (player.body.velocity.y < 0) 
		{
			player.body.velocity.y += 1;
			if (player.body.velocity.y > -0.99)
			{
				player.body.velocity.y = 0;
			}
		}
		


	}


		
	if (game.input.keyboard.isDown(Phaser.KeyCode.D)) 
	{
		player.angle += 2;
		player.body.velocity.x = 0;
		player.body.velocity.y = 0;

	}
		
	if (game.input.keyboard.isDown(Phaser.KeyCode.A))
	{
		player.angle -= 2;
		player.body.velocity.x = 0;
		player.body.velocity.y = 0;

	}
	

	barrel.rotation = game.physics.arcade.angleToPointer(barrel);

}

function render() {
	game.debug.spriteInfo(player, 20, 32);
	

}


