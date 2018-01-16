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
  if (error) {
    console.log('Cannot connect to servers.');
  } else if (body.status === 'ZERO_RESULTS'){
    console.log('Unable to find the adddress!');
  }
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
