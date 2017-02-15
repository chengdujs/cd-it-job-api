const db = require('./../common/db');
const Schema = db.Schema;
const ObjectId = db.SchemaTypes.ObjectId;

let jobSchema = new Schema({
  name: String,
  salary: String,
  city: String, //工作地点
  workExperience: String, //工作经验
  education: String, // 学历要求
  jobTemptation: String, // 职位诱惑
  jobDescription: String, // 职位描述
  workArea: String, // 工作地址（可以选的那部分）
  workAddress: String, // 工作地址（手动输入的那部分）
  createDate: Number, // 发布时间
  createBy: ObjectId, // 发布者
  lastUpdateDate: Number, // 最后更新时间
  lastUpdateBy: ObjectId, // 最后更新人
  // 以上为基本信息
  interviewEvaluation: [{
    userId: ObjectId,
    evaluationContent: String, // 评价内容
    descScore: number, // 描述符合度评分（星级）
    interviewerScore: number, // 面试官评分
    environmentScore: number, // 公司环境评分
    tags: [String], // 标签
    stars: [ObjectId], // 点赞人员
    createDate: long // 评价时间
  }] //面试评价
});

let Job = db.model('jobs', jobSchema);

module.exports = Job;
