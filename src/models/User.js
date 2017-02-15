const db = require('./../common/db');
const Schema = db.Schema;
const ObjectId = db.SchemaTypes.ObjectId;

let userSchema = new Schema({
  username: String,
  password: String,
  sex: String,
  country: String,
  province: String,
  city: String,
  avatarUrl: String,
  nickname: String,
  openId: String,
  unionId: String,
  createDate: Number,
  lastUpdateDate: Number,
  favoriteJob: [ObjectId],
  favoriteCompany: [ObjectId],
  isJobPoster: Boolean,
  applyStatus: String,
  applyInfo: {
    componyName: String, // 公司名称
    componyPhone: String, // 公司电话
    fullName: String, // 姓名
    phoneNumber: String // 个人电话
  }
});

let User = db.model('users', userSchema);

module.exports = User;
