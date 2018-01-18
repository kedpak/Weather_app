const req = require('request');


// Takes in the arguments from command line and query it into google maps uriAddress
// Returns and object with address property, longitude and latitude properties
let geocodeAddress = (argv, callback) => {
  let uriAddress = encodeURIComponent(argv);
  req({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${uriAddress}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Cannot connect to servers.');
    } else if (body.status === 'ZERO_RESULTS'){
      callback('Unable to find the adddress!');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        lat: body.results[0].geometry.location.lat,
        lng: body.results[0].geometry.location.lng
      });
    }
  });
}


module.exports.geocodeAddress = geocodeAddress;
