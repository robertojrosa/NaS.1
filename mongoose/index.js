var mongoose = require('mongoose')
var connectionString = 'mongodb://nodehome:vivoConTresGatos@home-shard-00-00.ne7lo.mongodb.net:27017,home-shard-00-01.ne7lo.mongodb.net:27017,home-shard-00-02.ne7lo.mongodb.net:27017/website?ssl=true&replicaSet=home-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.set('useUnifiedTopology', true);
mongoose.connect(connectionString, {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('success!!!!!!!!!!!!!!!!!')
});

module.exports = db;
