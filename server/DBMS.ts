const { Client } = require('pg')

const client = new Client({
  user: 'postgres',
  host: '',
  database: 'investcrypto',
  password: '',
  port: 5432,
})
client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
});

var findOne = (name, cb)=>{
  //console.log(name);
  client.query(`SELECT * from users where name=$1`, [name],(err, res) => {
    if (res){
      return  cb(null,res);
    } else if (err){
      return cb(err, null);
    }

  })
}
 var updateWatchList=(list, name, cb)=>{
  console.log(list);
  client.query(`UPDATE users SET watchlist=$1 WHERE name=$2`, [list, name],(err, res) => {
    if (res){
      return cb(null,res);
    } else if (err){
      return cb(err, null);
    }

  })
}

var createOne=( name, cb)=>{
  console.log(name);
  client.query(`INSERT INTO users (name) VALUES ($1)`, [name],(err, res) => {
    if (res){
      return cb(null,res);
    } else if (err){
      return cb(err, null);
    }

  })
}
var deleteOne=( name, cb)=>{
  console.log(name);
  client.query(`DELETE FROM users WHERE name=$1;`, [name],(err, res) => {
    if (res){
      return cb(null,res);
    } else if (err){
      return cb(err, null);
    }

  })
}

module.exports={
  findOne,
  updateWatchList,
  createOne,
  deleteOne,
}