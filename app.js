const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const req = require('request');

const argv = yargs.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather',
    string: true
  }
}).help().alias('help', 'h').argv;


geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results));
    console.log(results.address);
    req({
      url: `https://api.darksky.net/forecast/51cdd45a01c3e1cc2be1f670d52d755a/${results.lat},${results.lng}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        console.log("Location not found.");
      } else if (response.statusCode !== 200) {
        console.log("Something went wrong!");
      } else if (response.statusCode === 200) {
        console.log(`The current temperature in ${argv.address} is ${body.currently.temperature} degrees`);
      }
    });
  }
});

//https://api.darksky.net/forecast/51cdd45a01c3e1cc2be1f670d52d755a
