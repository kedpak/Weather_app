const req = require('request');

// Grabs weather from darksky api by passing in longitude and latitude properties
let getWeather = (results, callback) => {
  req({
    url: `https://api.darksky.net/forecast/51cdd45a01c3e1cc2be1f670d52d755a/${results.lat},${results.lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback("Location not found.");
    } else if (response.statusCode !== 200) {
      callback("Something went wrong!");
    } else if (response.statusCode === 200) {
      callback(`The current temperature for this location is ${body.currently.temperature} degrees`);
    }
  });
}

module.exports.getWeather = getWeather
