radio.onReceivedNumber(function (receivedNumber) {
    if (1 == receivedNumber) {
        basic.showString("a")
    }
    if (2 == receivedNumber) {
        basic.showString("b")
    }
    if (3 == receivedNumber) {
        basic.showString("c")
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(7)
basic.forever(function () {
	
})
