input.onGesture(Gesture.TiltLeft, function () {
    makerController.player1.press(ArcadeButton.Left)
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.A)
    music.pewPew.play()
    light.setPixelColor(0, 0x0000ff)
    pause(100)
    light.setPixelColor(0, 0x999999)
})
input.onGesture(Gesture.TiltRight, function () {
    makerController.player1.press(ArcadeButton.Right)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.B)
    music.jumpUp.play()
    light.setPixelColor(9, 0xff0000)
    pause(100)
    light.setPixelColor(9, 0x999999)
})
music.powerUp.play()
light.setAll(0x999999)
for (let index = 0; index <= 65; index++) {
    light.setBrightness(index)
}
light.setBrightness(5)
forever(function () {
    makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
})
