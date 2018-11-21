const Koa = require('koa2');
const app = new Koa();
app.use(ctx => ctx.status = 200);

module.exports = app;
