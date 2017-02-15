const db = require('./../common/db');
const Schema = db.Schema;
const ObjectId = db.SchemaTypes.ObjectId;

let companySchema = new Schema({
  name: String, //公司名称
  logoUrl: String, // logo地址
  city: String, // 所在城市
  financingStage: String, // 融资阶段
  industry: String, // 行业领域
  staffTotalNumber: String, // 员工总数
  address: String, // 办公地址
  description: String, // 公司介绍
  createDate: Number, // 创建该记录的时间（非公司创建时间）
  createBy: ObjectId, // 创建人（非公司创建人）
  lastUpdateDate: Number, // 最后更新时间
  lastUpdateBy: ObjectId, // 最后更新人
});

let Company = db.model('company', companySchema);

module.exports = Company;
