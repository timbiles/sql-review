require('dotenv').config();
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const port = 3001;

const app = express();
app.use(bodyParser.json());

const { getBands, createBand } = require('./ctrl');

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
  })
  .catch(err => console.log(err));

//endpoints
app.get('/api/bands', getBands)
app.post('/api/bands', createBand)

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
