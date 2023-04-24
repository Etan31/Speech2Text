///////ADDED CORS HEADERS(DONE- CAN APPEND TO EXISTING DATA.JSON)
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express("app");
const path = require("path");

const port = process.env.port || 5500;

app.use(bodyParser.json());
app.use(express.static(__dirname + "public"));

const dataFilePath = "./saveData/data.json";

// Allow CORS requests from any origin
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.options("/saveData", (req, res) => {
  res.sendStatus(200);
});

// app.get("/", (req, res) => {
//   res.render("main.html");
// });

app.post("/saveData", (req, res) => {
  const inputText = req.body.input.filename;
  const convertedText = req.body.textarea.convertedtext;

  const newData = {
    input: {
      filename: inputText,
    },
    textarea: {
      convertedtext: convertedText,
    },
  };

  fs.readFile(dataFilePath, "utf8", (err, existingData) => {
    if (err) {
      // If data.json doesn't exist, create it and write the data to it
      const newDataArray = [newData];
      fs.writeFile(
        dataFilePath,
        JSON.stringify(newDataArray, null, 2),
        (err) => {
          if (err) {
            console.error(err);
            res.status(500).send("Error writing to data.json");
          } else {
            res.send("Data written to data.json successfully");
          }
        }
      );
    } else {
      // If data.json exists, read the existing data and append the new data to it
      const existingDataArray = existingData.length
        ? JSON.parse(existingData)
        : [];
      existingDataArray.push(newData);
      fs.writeFile(
        dataFilePath,
        JSON.stringify(existingDataArray, null, 2),
        (err) => {
          if (err) {
            console.error(err);
            res.status(500).send("Error writing to data.json");
          } else {
            res.send("Data appended to data.json successfully");
          }
        }
      );
    }
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
