const mongoose = require('mongoose');
const config = require('./../config');

mongoose.connect(config.mongoAddress, {
  db: { native_parser: true },
  server: { poolSize: 5 }
});

// Debug mode
mongoose.set('debug', isDebug);

mongoose.Promise = global.Promise;

module.exports = mongoose;
