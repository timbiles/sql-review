require('dotenv').config();
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const port = 3001;

const {getBands, createBand, deleteBand } = require('./ctrl');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
  })
  .catch(err => console.log(err));

//endpoints

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
