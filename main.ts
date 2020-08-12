// This stops the alarm by setting the light sensor to 0
input.onButtonPressed(Button.A, function () {
    LightLevel = 0
})
// Sets light sensor to detect light
input.onButtonPressed(Button.B, function () {
    LightLevel = input.lightLevel()
})
// Plays a sound and shows a message when alarm is called
function Alarm () {
    music.playTone(523, music.beat(BeatFraction.Double))
    basic.pause(800)
    music.playTone(523, music.beat(BeatFraction.Double))
    basic.showString("ALARM")
}
// This sets the light sensor to detect light
let LightLevel = 0
LightLevel = input.lightLevel()
// Checks if light sensor is above 40 to run alarm
basic.forever(function () {
    if (LightLevel > 40) {
        Alarm()
    }
})
