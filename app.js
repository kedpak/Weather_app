const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const req = require('request');
const weather = require('./weather/weather.js')

// set up argument inputs from command line
// Takes in the address, location, or zip code and sets it to address property
const argv = yargs.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather',
    string: true
  }
}).help().alias('help', 'h').argv;

// Grab geocode longitude and latitude from command line and call get weather function with callback
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results.address));
    weather.getWeather(results, (errorMessage, results2) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(results2);
      }
    });
  }
});
