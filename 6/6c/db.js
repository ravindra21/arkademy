var mysql = require('mysql');

var config = {
  host : 'localhost',
  user : 'admin',
  password : 'password',
  database : 'caffe'
};

var con = mysql.createConnection(config);

con.connect(err => {
  if(err) throw err;
  console.log('database connected');
});

module.exports = con;

