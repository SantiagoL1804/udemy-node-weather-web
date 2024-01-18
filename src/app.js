const fs = require("fs");
const path = require("path");

const hbs = require("hbs");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// Denine paths for Express config
const publicDirectoryPath = path.join(__dirname, "..", "public");
const viewsPath = path.join(__dirname, "..", "templates", "views");
const partialsPath = path.join(__dirname, "..", "templates", "partials");

//Handle handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Handle static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", { title: "Weather app", name: "Santiago Larrique" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About me", name: "Santiago Larrikarda" });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Santiago Larrique",
    message: "Help me please",
  });
});

app.get("/weather", (req, res) => {
  const { address } = req.query;

  if (!address.length) {
    return res.json({ error: "Address is required" });
  }

  geocode(address, (error, { lat, lon, place: location } = {}) => {
    if (error) {
      return res.send({ error });
    }

    forecast(lat, lon, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }
      res.send({
        forecast: forecastData,
        location,
        address,
      });
    });
  });
});

app.get("/products", (req, res) => {
  const { search } = req.query;
  if (!search) {
    return res.status(404).json({ error: "No search found" });
  }
  console.log(search);
  res.json({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    text: "Help article not found",
    name: "Santiago Larrique",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    text: "Page not found",
    name: "Santiago Larrique",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
