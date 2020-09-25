input.onGesture(Gesture.TiltLeft, function () {
    makerController.player1.press(ArcadeButton.Left)
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.A)
    music.jumpUp.play()
    light.setPixelColor(0, 0xff0080)
    pause(100)
    light.setPixelColor(0, 0x000000)
})
input.onGesture(Gesture.TiltRight, function () {
    makerController.player1.press(ArcadeButton.Right)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.B)
    music.pewPew.play()
    light.setPixelColor(9, 0xff8000)
    pause(100)
    light.setPixelColor(9, 0x000000)
})
music.powerUp.play()
light.setAll(0xffff00)
for (let index = 0; index <= 100; index++) {
    light.setBrightness(index)
}
light.setAll(0x7f00ff)
light.setBrightness(150)
forever(function () {
    makerController.player1.setAnalogThreshold(ArcadeAnalogButton.LeftRight, 0, 1023)
    input.setAccelerometerRange(AcceleratorRange.OneG)
})
