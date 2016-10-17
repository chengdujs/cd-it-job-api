const db = require('./../common/db');

const Schema = db.Schema;

let userSchema = new Schema({
  userId: String
});

let User = db.model('users', userSchema);

module.exports = User;