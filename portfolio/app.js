const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const cors = require('cors');




const app = express();
app.use(cors());
const path = require('path');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());



//Database

mongoose.connect("mongodb://127.0.0.1:27017/portfolioDB", {useNewUrlParser: true, useUnifiedTopology: true})//changing url for db
    .then( () => console.log("ConnectedToMongoDB"))
    .catch((err) => console.error(err));

//Creating schema

const educationPortfolioSchema = new mongoose.Schema({
    institute: String,
    university: String,
    course: String,
    duration: String,
    marks: String

});

const EducationPortfolio = new mongoose.model("EducationPortfolio", educationPortfolioSchema);

// Route to render the HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post("/api/saveEducationPortfolio", (req, res) => {
    const {institute, university, course, duration, marks} = req.body;

    const newEducationPortfolio = new EducationPortfolio({
        institute, university, course, duration, marks
    });

    newEducationPortfolio.save()
        .then((educationPortfolio) => {
            console.log(educationPortfolio);
            res.json(educationPortfolio);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({error: "An error occured"});

        });
});

app.get("/api/getEducationEntries", (req, res) => {
    EducationPortfolio.find({})
      .then((educationEntries) => {
        res.json(educationEntries);
      })
      .catch((err) => {
        console.error("Error fetching education entries from database:", err);
        res.status(500).json({ error: "An error occurred" });
      });
  });

app.listen(3001, function() {
    console.log("Server started on port 3001");
  });


    