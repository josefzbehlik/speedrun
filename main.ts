const mySerial = Utility.encodeSerial(control.deviceSerialNumber())
radio.setTransmitSerialNumber(true)
radio.setGroup(5)
let heslo = 12
music.setVolume(8)

radio.onReceivedNumber(function (receivedNumber: number) {
    music.playTone(Note.C, music.beat(BeatFraction.Whole))
    console.log(receivedNumber)
    })



radio.onReceivedValue(function(name: string, value: number) {
    if (name === "grp"){heslo = value}
    
    
})



input.onButtonPressed(Button.B, function () {
    radio.sendNumber(heslo)
    })

