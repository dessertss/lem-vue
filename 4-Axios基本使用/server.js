const path = require('path');
// 构建服务器架构，配置好art-template,路由
const Koa = require('koa');
const fs = require('fs');
// 处理请求体数据
let app = new Koa();
// const cors = require('koa2-cors');
const Router = require('koa-router');
const router = new Router();
// 处理文字和文件的请求体数据
const formidable = require('koa-formidable')

router.post('/upload', async (ctx, next) => {
        console.log('上传成功');
        ctx.body = 'ok'
    })
    .get('/', async ctx => {
        ctx.body = {
            token: 'abc',
            msg: 'ok'
        }
    })
    .post('/add', async ctx => {
        ctx.req.on('data', data => {
            console.log(data);
            console.log(data.toString());
        });
        ctx.body = 'post ok'
    })
app.use(async (ctx, next) => {
    console.log(ctx.request.header.origin);
    ctx.response.set('Access-Control-Allow-Origin', '*');
    ctx.response.set('Access-Control-Allow-Methods', "PUT, POST, GET, DELETE, OPTIONS");
    ctx.response.set('Access-Control-Allow-Origin', 'token');
    // ctx.response.set('Access-Control-Allow-Credentials', true);
    await next();
})
app.use(router.routes());
app.use(router.allowedMethods());
// 开启服务器
app.listen(8888, () => {
    console.log('服务器启动在8888端口')
});