var config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.spritesheet('diamonds', 'assets/sprites/diamonds32x24x5.png', { frameWidth: 32, frameHeight: 24 });
}

function create ()
{
    layer = this.add.layer();

    layer.createMultiple(50, 'diamonds', 3, { x: 32, y: 32, stepX: 14 });

    layer.spread('alpha', 0, 1);
}
