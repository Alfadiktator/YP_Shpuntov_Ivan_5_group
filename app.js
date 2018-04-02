const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => { res.sendFile(path.resolve('public/index.html')); });

app.get('/public/*', (req, res) => {
  //console.log(req);
  res.sendFile(path.resolve('./' + req.url))
});

const server = app.listen(8000, () => {
  console.log(`Server started working`);
});