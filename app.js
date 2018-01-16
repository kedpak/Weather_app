const req = require('request');

req({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1315%20gateview%20ave%20california',
  json: true
}, (error, response, body) => {
  console.log(body);
});
