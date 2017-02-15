const db = require('./../common/db');
const Schema = db.Schema;
const ObjectId = db.SchemaTypes.ObjectId;

let resumeSchema = new Schema({
  userId: ObjectId,
  resumeName: String, // 简历名称
  // 基本信息
  name: String,
  sex: String,
  birthday: Number,
  education: String,
  workYears: String, // 工作年限
  city: String,
  phoneNumber: String,
  emailAddress: String,
  selfIntro: String, // 自我介绍
  // 社交链接
  socialLinks: [{
    name: String, // 名称，如QQ，weibo
    linkAddress: String, // 主页地址
    createDate: Number
  }],
  // 工作经历
  workExperience: [{
    companyName: String, // 公司名称
    jobTitle: String, // 职位
    startDate: String, // 在职时间（开始）
    endDate: String, // 离职时间（结束）
    workContent: String, // 工作内容
    createDate: Number // 创建日期
  }],
  // 教育经历
  educationExperience: [{
    schoolName: String,
    majorName: String, // 专业名称
    education: String, // 最高学历
    graduationYear: number, // 毕业年份
    createDate: Number
  }],
  // 项目经验
  projectExperience: [{
    projectName: String, // 项目名称
    workContent: String, // 职责（工作内容）
    startDate: String, // 开始时间（起）
    endDate: String, // 结束时间（止）
    projectDesc: String,
    projectLink: String,
    createDate: Number
  }],
  // 作品
  products: [{
    name: String, // 作品名称
    linkAddress: String, // 作品链接
    imageAddress: String, // 作品图片地址
    description: String, // 作品描述
    createDate: Number // 创建时间
  }],
  // 期望工作
  wishWork: {
    jobTitle: String,
    jobType: String, // 全职，兼职，实习
    city: String,
    salary: String, // 薪水范围
    description: String, // 补充说明
    createDate: Number
  }
});

let Resume = db.model('resumes', resumeSchema);

module.exports = Resume;
