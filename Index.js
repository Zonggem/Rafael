
const WeatherEvents = require("./WeatherEvents.json")
const Images = require("./Images")

const Havelightning= WeatherEvents.filter((weatherevent)=>{
    return weatherevent.isLightning === true
})
 const timmings = Havelightning.map((lightning)=>{
    return lightning.datetime
 })

const equalTimming = Images.filter((image)=>{
      return timmings.includes(image.datetime)
     
})
const NameofImages = equalTimming.map((timming)=>{
    return timming.name
})
console.log(NameofImages)


const HavelightningThunder= WeatherEvents.filter((weatherevent)=>{
    return weatherevent.isLightning === true
    || weatherevent.isThunder === true
})
 const Timmings = Havelightning.map((lightning)=>{
    return lightning.datetime
 })
 console.log(Timmings)

