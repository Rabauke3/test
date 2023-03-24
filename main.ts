basic.forever(function () {
    pins.setEvents(DigitalPin.C16, PinEventType.Pulse)
    basic.setLedColor(0x00ff00)
    if (pins.digitalReadPin(DigitalPin.C16) == 0) {
        basic.setLedColor(0x00ff00)
    } else {
        basic.setLedColor(0xff0000)
        basic.pause(60000)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.setLedColor(0x0000ff)
        basic.pause(300000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.setLedColor(0xff0000)
        basic.pause(1000)
    }
})
