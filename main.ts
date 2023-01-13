namespace SpriteKind {
    export const PC_projectile = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction != -100) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . 4 4 . 5 5 5 . 4 4 . . . 
            . . . . d e b 5 5 5 3 e d . . . 
            . . . . 4 e b b b b 3 e 4 . . . 
            . . . . d e b b b 4 3 e d . . . 
            . . . . 4 e b b 4 4 3 e 4 . . . 
            . . . . d e b 4 4 4 3 e d . . . 
            . . . . 4 e 3 3 3 3 3 e 4 . . . 
            . . . . d e 2 2 2 2 2 e d . . . 
            . . . . 4 e . . . . . e 4 . . . 
            . . . . d d . . . . . d d . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    direction = -100
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction != -200) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . d 4 d 4 d 4 d 4 d 4 . . . . 
            . . d e e e e e e e e 4 . . . . 
            . . . . 2 3 b b b b b . . . . . 
            . . . . 2 3 4 b b b 5 5 5 5 2 . 
            . . . . 2 3 4 4 b b 5 5 5 5 2 . 
            . . . . 2 3 4 4 4 b 5 5 5 5 2 . 
            . . . . 2 3 3 3 3 3 3 . . . . . 
            . . d e e e e e e e e 4 . . . . 
            . . d 4 d 4 d 4 d 4 d 4 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        mySprite.image.flipX()
    }
    direction = -200
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction != 200) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . d 4 d 4 d 4 d 4 d 4 . . . . 
            . . d e e e e e e e e 4 . . . . 
            . . . . 2 3 b b b b b . . . . . 
            . . . . 2 3 4 b b b 5 5 5 5 2 . 
            . . . . 2 3 4 4 b b 5 5 5 5 2 . 
            . . . . 2 3 4 4 4 b 5 5 5 5 2 . 
            . . . . 2 3 3 3 3 3 3 . . . . . 
            . . d e e e e e e e e 4 . . . . 
            . . d 4 d 4 d 4 d 4 d 4 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    direction = 200
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction != 100) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . 4 4 . 5 5 5 . 4 4 . . . 
            . . . . d e b 5 5 5 3 e d . . . 
            . . . . 4 e b b b b 3 e 4 . . . 
            . . . . d e b b b 4 3 e d . . . 
            . . . . 4 e b b 4 4 3 e 4 . . . 
            . . . . d e b 4 4 4 3 e d . . . 
            . . . . 4 e 3 3 3 3 3 e 4 . . . 
            . . . . d e 2 2 2 2 2 e d . . . 
            . . . . 4 e . . . . . e 4 . . . 
            . . . . d d . . . . . d d . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        mySprite.image.flipY()
    }
    direction = 100
})
let mySprite: Sprite = null
let direction = 0
direction = -100
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . 5 5 5 . . . . . . 
    . . . . . . . 5 5 5 . . . . . . 
    . . . . 4 4 . 5 5 5 . 4 4 . . . 
    . . . . d e b 5 5 5 3 e d . . . 
    . . . . 4 e b b b b 3 e 4 . . . 
    . . . . d e b b b 4 3 e d . . . 
    . . . . 4 e b b 4 4 3 e 4 . . . 
    . . . . d e b 4 4 4 3 e d . . . 
    . . . . 4 e 3 3 3 3 3 e 4 . . . 
    . . . . d e 2 2 2 2 2 e d . . . 
    . . . . 4 e . . . . . e 4 . . . 
    . . . . d d . . . . . d d . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
forever(function () {
	
})
