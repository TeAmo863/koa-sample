// 导入 Koa
import Koa from 'koa'

// 创建一个 Koa 应用实例
const app = new Koa()

// ----- 添加路由时请替换这一部分代码 -----
app.use(async ctx => {
  // 访问 / 路径时的处理操作
  if (ctx.req.url === '/') {
    ctx.body = '当前访问的路径为 /'
  }
  // 访问 /test 路径时的处理操作
  if (ctx.req.url === '/test') {
    ctx.body = '当前访问的路径为 /test'
  }
})
// ----- 添加路由时请替换这一部分代码 -----

// 启动服务并监听 3000 端口
app.listen(3000)
console.log('服务正在运行...')