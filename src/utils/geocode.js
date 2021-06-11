const request = require('request')
const geocode = (address,callback)=>{
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoieGhvc2h1YSIsImEiOiJja3BwYmFoa3YwdHRkMnZwNGV2c2hmeHNpIn0.dFMQ3lYB3t13ALgcHquyeA&limit=1'

  
request({ url, json: true }, (error, {body}) => {
  if (error) {
      callback('Unable to connect to weather services!',undefined)
  } else if (body.features.length === 0) {
      callback('Unable to find location',undefined)  
  } else{
      callback(undefined, {
          latitude : body.features[0].center[1],
          longitude: body.features[0].center[0],
          location : body.features[0].place_name
      })
}
})
}

module.exports=geocode