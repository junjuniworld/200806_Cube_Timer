let set_Time = 0
input.onGesture(Gesture.TiltRight, function () {
    set_Time = 7
    music.playTone(988, music.beat(BeatFraction.Sixteenth))
    music.playTone(880, music.beat(BeatFraction.Sixteenth))
    basic.showString("" + (set_Time))
    while (set_Time > 0) {
        basic.pause(60000)
        set_Time += -1
        basic.showNumber(set_Time)
    }
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.showString("7")
})
input.onGesture(Gesture.TiltLeft, function () {
    set_Time = 5
    basic.showString("" + (set_Time))
    while (set_Time > 0) {
        basic.pause(60000)
        set_Time += -1
        basic.showNumber(set_Time)
    }
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.showString("5")
})
input.onGesture(Gesture.LogoUp, function () {
    set_Time = 10
    music.playTone(988, music.beat(BeatFraction.Sixteenth))
    music.playTone(880, music.beat(BeatFraction.Sixteenth))
    basic.showString("" + (set_Time))
    while (set_Time > 0) {
        basic.pause(60000)
        set_Time += -1
        basic.showNumber(set_Time)
    }
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.showString("10")
})
input.onGesture(Gesture.ScreenUp, function () {
    set_Time = 0
    basic.showIcon(IconNames.SmallDiamond)
})
input.onGesture(Gesture.ScreenDown, function () {
    set_Time = 30
    music.playTone(988, music.beat(BeatFraction.Sixteenth))
    music.playTone(880, music.beat(BeatFraction.Sixteenth))
    basic.showString("" + (set_Time))
    while (set_Time > 0) {
        basic.pause(60000)
        set_Time += -1
        basic.showNumber(set_Time)
    }
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.showString("30")
})
input.onGesture(Gesture.LogoDown, function () {
    set_Time = 15
    basic.showString("" + (set_Time))
    while (set_Time > 0) {
        basic.pause(60000)
        set_Time += -1
        basic.showNumber(set_Time)
    }
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.showString("15")
})