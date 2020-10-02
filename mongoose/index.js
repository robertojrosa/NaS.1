var mongoose = require('mongoose')
var connectionString = process.env.MONGO_STR

mongoose.set('useUnifiedTopology', true);
mongoose.connect(connectionString, {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB ON')
});

module.exports = db;
