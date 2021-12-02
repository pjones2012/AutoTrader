const express = require('express');
const db = require('./DBMS.ts');
const app = express();
app.use(express.json());

var PORT = 3000;
var server = app.listen(PORT, ()=> {
  console.log('listening on Port: ', PORT);
})
app.use(express.static(__dirname + '/../build'));

app.get('/Login', function (req, res) {
  //console.log(req.query);
  db.findOne(req.query.name, (err, result)=>{
    if(err){
      console.log(err);
      res.status(404);
      res.send(err);
    } else {
      console.log(result);
      res.status(200);
      res.send(result);
    }
  })
});

app.post('/watchItem', function (req, res) {
  console.log(req.body.list);
  db.updateWatchList(req.body.list,req.body.name, (err, result)=>{
    if(err){
      //console.log(err);
      res.status(404);
      res.send(err);
    } else {
      res.status(201);
      res.send(req.body.list);
    }
  })
});
