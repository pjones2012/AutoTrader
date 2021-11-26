const express = require('express');
const app = express();
app.use(express.json());

var PORT = 3000;
var server = app.listen(PORT, ()=> {
  console.log('listening on Port: ', PORT);
})
app.use(express.static(__dirname + '/../build'));
