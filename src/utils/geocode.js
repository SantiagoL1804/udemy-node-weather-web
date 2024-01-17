const request = require("request");

const geocode = (address, cb) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoidGFjaGkxMTEiLCJhIjoiY2xyZG9kYWJ2MWFsdTJxbGhmMzIyZ2RvYSJ9.rCNjtL9CUs_MFJaF3yFCWA&limit=1;`;

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      cb("Unable to connect to location app!");
    } else if (body.features.length === 0) {
      cb("Something went wrong with request, try another location.");
    } else {
      const place = body.features[0].place_name;
      const lat = body.features[0].center[1];
      const lon = body.features[0].center[0];
      cb(null, { place, lat, lon });
    }
  });
};

module.exports = geocode;
