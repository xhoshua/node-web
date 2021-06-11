const request = require('request')
const forecast = (latitude , longitude ,callback)=>{
  const url = 'http://api.weatherstack.com/current?access_key=9b989cfbb477b88fb20b64b1299bfcce&query='+latitude+ ','+longitude
  request({ url, json: true }, (error, {body}) => {
    if(error){
       callback('Unable to connect to weather services!',undefined)
    }else if (body.error){
              callback('Unable to find location',undefined)
    }else {
     
          callback(undefined, body.current.weather_descriptions +'. It is currently ' + body.current.temperature +' degress out.  It feels like: '+body.current.feelslike +' degrees out. The humidity is '+ body.current.humidity +'%. There is a '+ body.current.precip + '% chance of rain')}
})
}
 module.exports = forecast