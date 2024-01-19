const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const Joi = require("joi");

const port = process.env.PORT || 5005;

const genres = [
  {
    id: 1,
    title: "Thriller",
  },

  {
    id: 2,
    title: "Action",
  },

  {
    id: 3,
    title: "Comedy",
  },

  {
    id: 4,
    title: "Romance",
  },
];

app.get("/api/genre", (req, res) => {
  res.send("hello Paks");
});

app.listen(port, () => {
  console.log(`Listening on port :${port}`);
});

// Set to development
// console.log(`app: ${app.get("env")}`)

//Set to production, type the below code in the console
//export NODE_ENV=production
