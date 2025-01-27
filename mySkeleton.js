class mySkeleton {
	constructor(game){
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./mySpriteSheet_cropped.png"), 3, 0, 48.0059, 75, 9, 0.15)
		this.x = 0;
		this.y = 0;
		this.speed = 100;
	};

	update() {
			this.x += this.speed*this.game.clockTick;
			if(this.x > 1024) this.x = 0;
	};

	draw(ctx){
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
	};






}