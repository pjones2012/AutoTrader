const { Client } = require('pg')

const client = new Client({
  user: 'postgres',
  host: '',
  database: 'investcrypto',
  password: 'password',
  port: 5433,
})
client.connect();

var findOne =(name, cb)=>{
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

module.exports={
  findOne,
  updateWatchList,
}