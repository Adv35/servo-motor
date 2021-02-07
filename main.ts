basic.forever(function () {
    maqueen.servoRun(maqueen.Servos.S1, 90)
    basic.pause(500)
    maqueen.servoRun(maqueen.Servos.S1, 180)
    basic.pause(500)
    maqueen.servoRun(maqueen.Servos.S1, 0)
    basic.pause(500)
})
