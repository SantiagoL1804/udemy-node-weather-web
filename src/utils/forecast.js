const request = require("request");

const forecast = (lat, lon, cb) => {
  const url = `http://api.weatherstack.com/current?access_key=83ada13a7606ba40eda5953b03bb6a08&query=${lat},${lon}&units=m`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      cb("Unable to connect to weather app!");
    } else if (body.error) {
      cb("Unable to find location");
    } else {
      const {
        temperature,
        feelslike,
        weather_descriptions: descriptions,
        humidity,
      } = body.current;
      const [description] = descriptions;
      console.log(humidity);
      cb(
        null,
        // { temperature, feelslike, description }
        `${description}: It is currently ${temperature} degrees out, and it feels like ${feelslike} degrees out, with a humidity of ${humidity}.`
      );
    }
  });
};

module.exports = forecast;
