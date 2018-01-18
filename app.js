const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');


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
    console.log(JSON.stringify(results, undefined, 4));
  }
});

//https://api.darksky.net/forecast/51cdd45a01c3e1cc2be1f670d52d755a
