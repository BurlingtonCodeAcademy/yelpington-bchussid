//-----------------imports----------------//
const express = require("express");
const path = require("path");
const fs = require("fs");
const { response } = require("express");

//------------------------global variables --------------------------------//
const app = express();
const port = process.env.PORT || 8000;
const restDir = path.resolve("./restaurants");

//---------------------middleware-------------------//
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//-----------routing-----------//

//homepage
app.get("/", (req, res) => {
  res.send("testing the api? you there?");
});

//list of IDs
app.get("/ids", (req, res) => {
  res.sendFile(path.resolve(`restaurants/ids.json`));
});

//corresponds to fetch on line 52 in 'restaurant.html' - establishes rt to each restaurants file
//first one gets the info, second is the rt to the html
app.get("/api/:id", (req, res) => {
  let id = req.params.id;
  res.sendFile(path.resolve(`restaurants/${id}`));
});

app.get("/restaurants/:restId", (req, res) => {
  let htmlFile = path.resolve("./public/restaurant.html");
  res.sendFile(htmlFile);
});

//----start the server and display message indicating that it's listening----//
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
