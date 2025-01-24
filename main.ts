basic.forever(function () {
    serial.writeLine("temp " + input.temperature() + "light" + input.lightLevel() + "sound" + input.soundLevel())
})
