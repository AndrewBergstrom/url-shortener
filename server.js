require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose')

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

let resObj = {};

// Your first API endpoint
app.post('/api/shorturl', function(req, res) {


  res.json(resObj);
});
let uri = MONGO_URI;
mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true});

let urlSchema = mongoose.urlSchema({
  original: {type: String, required: true},
  short: Number
})

let Url = mongoose.model('Url', urlSchema)

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
