const req = require('request');
const yargs = require('yargs');
const argv = yargs.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather',
    string: true
  }
}).help().alias('help', 'h').argv;

console.log(argv);

console.log(encodeURIComponent(argv));

req({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.a)}`,
  json: true
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
