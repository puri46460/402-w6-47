radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
    basic.pause(2000)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("P")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(randint(5, 9))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.pause(2000)
    basic.showIcon(IconNames.Diamond)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("T")
})
radio.setTransmitPower(1)
radio.setGroup(47)
basic.showIcon(IconNames.Happy)
