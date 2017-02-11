const router = new Router();

const testBiz = require('./../bizs/testBiz');

router.get('/', testBiz.getIndex);

module.exports = {
  router,
  priority: 0, // 优先级，越大越先加载
  prefix: '/'
}
