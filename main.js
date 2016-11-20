var game = new Phaser.Game(1024, 640, Phaser.CANVAS, 'phaser-example', 
									   { preload: preload, create: create, update: update, render: render })

var player;
var barrel;
var tiles;
									   
function preload() {
   game.load.image('tank', 'assets/PNG/Tanks/tankBlue_outline.png');
   game.load.image("barrel", "assets/PNG/Tanks/barrelBlue_outline.png");
   game.load.tilemap('map', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);
   game.load.image('tiles', 'assets/towerDefense_tilesheet.png');
}

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	map = game.add.tilemap('map');
	map.addTilesetImage('towerDefense_tilesheet', 'tiles');
    map.createLayer('Background');
	map.createLayer('Foreground');
	collision_layer = map.createLayer('Collision');
	player = game.add.sprite(200, 200, 'tank');
	player.scale.setTo(0.5, 0.5);
	player.anchor.setTo(0.5, 0.5);
	barrel = game.add.sprite(200,200,"barrel");
	barrel.anchor.setTo(0,0.5);
	barrel.scale.setTo(0.5,0.5);
	game.world.setBounds(0, 0, 1024, 640);
	game.physics.enable (player);
	game.physics.enable(collision_layer);
	player.body.collideWorldBounds = true;
	map.setCollisionBetween(0, 10000, true, collision_layer);
	//tiles = collision_layer.getTiles(0, 0, collision_layer.layer.widthInPixels, collision_layer.layer.heightInPixels);
	map.setCollision(player, collision_layer);
	
	

	
	/*if (map.objects.Obstacles) {
		
		obstacles = map.objects.Obstacles
		obstacles.forEach(obstacle => {
			
			console.log("hiii");
			console.log(obstacle.id);
			
			
		});
		
	} */
    
	
 

}

function update() {
	
	
    game.physics.arcade.collide(player, tiles);

	if (game.input.keyboard.isDown(Phaser.KeyCode.W))
	{
		speed = 3
		var velocityX = Math.cos(player.angle * Math.PI / 180) * speed;
		var velocityY = Math.sin(player.angle * Math.PI / 180) * speed;
		player.x += velocityX;
		player.y += velocityY;	
		barrel.x = player.x
		barrel.y = player.y
	}
		
	if (game.input.keyboard.isDown(Phaser.KeyCode.D)) 
	{
		player.angle += 2;
	}
		
	if (game.input.keyboard.isDown(Phaser.KeyCode.A))
	{
		player.angle -= 2;
	}
	
	 barrel.rotation = game.physics.arcade.angleToPointer(barrel);   

}

function render() {
	game.debug.spriteInfo(player, 20, 32);
	

}


