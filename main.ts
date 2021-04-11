let SLOVA = ""
let text = ""
input.onButtonPressed(Button.A, function () {
    SLOVA = "ABCDEFGHIJKLMNOPRSTUVZ"
    text = SLOVA.charAt(randint(0, SLOVA.length - 1))
    basic.showString(text)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    SLOVA = "abcdefghijklmnoprstuvz"
    text = SLOVA.charAt(randint(0, SLOVA.length - 1))
    basic.showString(text)
    basic.pause(1000)
    basic.clearScreen()
})
